document.addEventListener("DOMContentLoaded", function () {
    console.log("Inicializando Geoportal de Turismo Rural...");

    const regionSelect = document.getElementById('region-select');

    // Función para renderizar el texto extenso desde content.js
    function renderRegionalContent(regionKey) {
        const textContainer = document.getElementById('info-text-extra');
        if (textContainer && REGIONAL_CONTENT[regionKey]) {
            textContainer.innerHTML = REGIONAL_CONTENT[regionKey];
        } else if (textContainer) {
            textContainer.innerHTML = "<p><em>No hay información adicional disponible.</em></p>";
        }
    }

    // Escuchar cambios en la selección de nodo/departamento
    if (regionSelect) {
        regionSelect.addEventListener('change', function (e) {
            const selectedRegion = e.target.value;
            
            // 1. Cargar mapa y datos
            if (typeof loadRegionData === 'function') {
                loadRegionData(selectedRegion);
            }
            
            // 2. Cargar contenido descriptivo adicional
            renderRegionalContent(selectedRegion);
        });
    }

    // Carga inicial de contenido para Quindío
    renderRegionalContent('quindio');
});