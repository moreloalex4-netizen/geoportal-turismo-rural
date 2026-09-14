document.addEventListener("DOMContentLoaded", function () {
    // 1. Inicialización del Mapa Base
    const map = L.map('map').setView(REGIONAL_DATA.quindio.coordenadas, REGIONAL_DATA.quindio.zoom);

    const basemapOsm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const basemapSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
    });

    const geojsonLayerGroup = L.layerGroup().addTo(map);

    // 2. Control del Visor de Capas
    L.control.layers({
        "Mapa Político": basemapOsm,
        "Vista Satelital": basemapSat
    }, null, { position: 'topright' }).addTo(map);

    // 3. Carga Dinámica de Capas GeoJSON
    function loadRegionData(regionKey) {
        const config = REGIONAL_DATA[regionKey];
        if (!config) return;

        geojsonLayerGroup.clearLayers();

        fetch(config.geojsonPath)
            .then(res => {
                if (!res.ok) throw new Error("No se encontró el archivo GeoJSON");
                return res.json();
            })
            .then(data => {
                const geojsonLayer = L.geoJSON(data, {
                    style: config.estilo,
                    onEachFeature: function (feature, layer) {
                        const nombre = feature.properties.MPIO_CNMBR 
                                    || feature.properties.CORREGIMIENTO 
                                    || feature.properties.NOMBRE 
                                    || feature.properties.nombre 
                                    || "Unidad Territorial";

                        layer.bindTooltip(`<strong>${nombre}</strong>`, { sticky: true });

                        layer.on({
                            mouseover: (e) => {
                                e.target.setStyle({ weight: 4, fillOpacity: 0.7 });
                                e.target.bringToFront();
                            },
                            mouseout: (e) => {
                                geojsonLayer.resetStyle(e.target);
                            },
                            click: (e) => {
                                map.fitBounds(e.target.getBounds());
                                layer.bindPopup(`<strong>${nombre}</strong><br/>Información espacial activa.`).openPopup();
                            }
                        });
                    }
                });

                geojsonLayerGroup.addLayer(geojsonLayer);
                map.flyTo(config.coordenadas, config.zoom);
                updateUI(config);
            })
            .catch(err => {
                console.error(`Error al cargar ${regionKey}:`, err);
                updateUI(config);
            });
    }

    // 4. Actualización Dinámica del Panel Lateral
    function updateUI(config) {
        document.getElementById('region-title').innerText = config.nombre;
        document.getElementById('region-subtitle').innerText = config.subtitulo;

        document.getElementById('metric-pib').innerText = config.metricas.pib;
        document.getElementById('label-pib').innerText = config.metricas.pibEtiqueta;

        document.getElementById('metric-area').innerText = config.metricas.area;
        document.getElementById('label-area').innerText = config.metricas.areaEtiqueta;

        // Renderizado de Tablas
        const infoContainer = document.getElementById('info-content');
        let htmlContent = "";

        if (config.tablas && config.tablas.length > 0) {
            config.tablas.forEach(tabla => {
                htmlContent += `<h3>${tabla.titulo}</h3><table class="data-table"><thead><tr>`;
                tabla.columnas.forEach(col => htmlContent += `<th>${col}</th>`);
                htmlContent += `</tr></thead><tbody>`;
                tabla.filas.forEach(fila => {
                    htmlContent += `<tr><td>${fila[0]}</td><td><strong>${fila[1]}</strong></td></tr>`;
                });
                htmlContent += `</tbody></table>`;
            });
        }
        infoContainer.innerHTML = htmlContent;

        // Renderizado del Gráfico
        if (typeof renderOrUpdateChart === 'function' && config.chartData) {
            renderOrUpdateChart(config.chartData);
        }
    }

    // 5. Listener de Eventos del Selector
    const selectRegion = document.getElementById('region-select');
    selectRegion.addEventListener('change', (e) => loadRegionData(e.target.value));

    // Carga inicial (Quindío)
    loadRegionData('quindio');
});
