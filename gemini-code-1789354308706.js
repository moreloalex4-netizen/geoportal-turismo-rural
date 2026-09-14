const REGIONAL_DATA = {
    quindio: {
        nombre: "Quindío",
        subtitulo: "Paisaje Cultural Cafetero",
        coordenadas: [4.53389, -75.68111],
        zoom: 10,
        geojsonPath: './data/quindio_municipios.geojson',
        estilo: {
            color: "#15803d",
            fillColor: "#86efac",
            fillOpacity: 0.4,
            weight: 2
        },
        metricas: {
            pib: "15 - 20%",
            pibEtiqueta: "Aporte Turismo al PIB Depto",
            area: "27.476 ha",
            areaEtiqueta: "Área Principal PCC"
        },
        tablas: [
            {
                titulo: "Uso Cobertura del Suelo (Ha)",
                columnas: ["Categoría", "Porcentaje"],
                filas: [
                    ["Café y Plátano", "42%"],
                    ["Bosque Nativo / Guadua", "31%"],
                    ["Pastos / Ganadería", "18%"],
                    ["Urbano e Infraestructura", "9%"]
                ]
            }
        ],
        chartData: {
            labels: ['Café', 'Bosque', 'Pastos', 'Urbano'],
            datasets: [{
                data: [42, 31, 18, 9],
                backgroundColor: ['#15803d', '#22c55e', '#eab308', '#64748b']
            }]
        }
    },
    cali: {
        nombre: "Cali Rural",
        subtitulo: "15 Corregimientos en Piedemonte",
        coordenadas: [3.42, -76.53],
        zoom: 11,
        geojsonPath: './data/cali_corregimientos.geojson',
        estilo: {
            color: "#0369a1",
            fillColor: "#38bdf8",
            fillOpacity: 0.4,
            weight: 2
        },
        metricas: {
            pib: "8 - 10%",
            pibEtiqueta: "Aporte Turismo PIB Valle",
            area: "70%",
            areaEtiqueta: "Territorio Rural Municipal"
        },
        tablas: [
            {
                titulo: "Vocación de Suelo Rural",
                columnas: ["Zonificación", "Proporción"],
                filas: [
                    ["Protección Ambiental", "55%"],
                    ["Agroforestal / Sostenible", "25%"],
                    ["Suburbanizado / Turístico", "20%"]
                ]
            }
        ],
        chartData: {
            labels: ['Protección', 'Agroforestal', 'Suburbano'],
            datasets: [{
                data: [55, 25, 20],
                backgroundColor: ['#0369a1', '#0ea5e9', '#f59e0b']
            }]
        }
    }
};