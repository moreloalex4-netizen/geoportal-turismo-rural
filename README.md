# Portal — Turismo rural y ordenamiento territorial

Portal visual con dos zonas de estudio (Armenia/Quindío y Cali), organizado en bloques: tarjetas de datos, imágenes, tablas, gráficos y listas — pensado para que puedas seguir agregando contenido a medida que consigas más información.

Hecho con HTML/CSS/JS puro más **Leaflet** (mapas) y **Chart.js** (gráficos), ambos gratis y cargados desde CDN. No requiere instalar nada.

## Estructura

- `index.html` — estructura de la página
- `style.css` — estilos visuales
- `content.js` — **todo el contenido vive aquí**, organizado en bloques
- `script.js` — arma las pestañas, tarjetas, tablas, gráficos y mapas a partir de `content.js` (normalmente no necesitas tocarlo)
- `images/` — carpeta para tus fotos (por ahora tiene imágenes de ejemplo)

## Cómo agregar contenido nuevo

Todo el contenido de cada tema es una lista de **bloques** en `content.js`. Hay 6 tipos de bloque, y agregar uno nuevo es copiar y pegar la plantilla correspondiente dentro de la lista `bloques` del tema que quieras:

**Un dato o cifra:**
```js
{ type: "stats", items: [{ value: "42%", label: "descripción del dato" }] }
```

**Una imagen tuya** (guárdala en `images/` primero):
```js
{ type: "image", src: "images/mi-foto.jpg", caption: "Descripción de la foto" }
```

**Una lista de puntos:**
```js
{ type: "list", titulo: "Título opcional", items: ["Punto 1", "Punto 2"] }
```

**Una tabla:**
```js
{ type: "table", headers: ["Columna 1", "Columna 2"], rows: [["dato", "dato"], ["dato", "dato"]] }
```

**Un gráfico de barras o líneas:**
```js
{ type: "chart", chartType: "bar", titulo: "Título del gráfico", labels: ["2023", "2024", "2025"], data: [10, 25, 40], unidad: "%" }
```

**Un párrafo de texto** (para lo que realmente necesite explicación en prosa):
```js
{ type: "text", parrafos: ["Texto del párrafo."] }
```

## Cómo agregar una zona de estudio nueva (ej. Buga)

1. En `content.js`, copia el bloque completo `cali: { ... }` y cámbiale la clave a `buga: { ... }`.
2. En `index.html`, agrega un botón nuevo dentro de `<nav class="region-tabs">`:
   ```html
   <button class="region-btn" data-region="buga">Buga</button>
   ```
3. Agrega una sección nueva dentro de `<main>`, copiando la estructura de las que ya existen (`<section id="buga" class="region-panel">...</section>`).

## Publicarlo en GitHub Pages

1. Sube todos estos archivos (incluyendo la carpeta `images/`) a la raíz de tu repositorio en GitHub — no dentro de una subcarpeta.
2. Ve a Settings → Pages, selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
3. Tu portal queda en `https://tu-usuario.github.io/nombre-repo/` — cualquiera con ese link lo abre desde cualquier navegador, sin instalar nada.

Cada vez que agregues un bloque nuevo en `content.js`, solo vuelve a subir ese archivo y el sitio se actualiza solo.
