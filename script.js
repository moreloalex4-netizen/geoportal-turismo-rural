// ============================================
// No necesitas editar este archivo — el contenido
// se edita en content.js.
// ============================================

const maps = {};
const charts = {};
let chartCounter = 0;

document.addEventListener("DOMContentLoaded", () => {
  buildRegion("armenia");
  buildRegion("cali");
  initRegionTabs();
});

function buildRegion(regionId) {
  const region = CONTENIDO[regionId];
  const navEl = document.querySelector(`[data-region-nav="${regionId}"]`);
  const contentEl = document.querySelector(`[data-region-content="${regionId}"]`);

  region.temas.forEach((tema, i) => {
    const btn = document.createElement("button");
    btn.className = "topic-btn" + (i === 0 ? " active" : "");
    btn.textContent = tema.titulo;
    btn.addEventListener("click", () => {
      navEl.querySelectorAll(".topic-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderTopic(contentEl, tema);
    });
    navEl.appendChild(btn);
  });

  renderTopic(contentEl, region.temas[0]);
  initRegionMap(regionId, region.mapa);
}

function renderTopic(contentEl, tema) {
  // Destruir gráficos previos para que no se acumulen instancias de Chart.js
  contentEl.querySelectorAll("canvas").forEach(c => {
    if (charts[c.id]) { charts[c.id].destroy(); delete charts[c.id]; }
  });

  contentEl.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = tema.titulo;
  contentEl.appendChild(h2);

  tema.bloques.forEach(bloque => {
    const el = renderBlock(bloque);
    if (el) contentEl.appendChild(el);
  });
}

function renderBlock(bloque) {
  const wrap = document.createElement("div");
  wrap.className = "block";

  switch (bloque.type) {

    case "stats": {
      wrap.className += " stat-grid";
      bloque.items.forEach(item => {
        const card = document.createElement("div");
        card.className = "stat-card";
        card.innerHTML = `<span class="stat-value">${item.value}</span><span class="stat-label">${item.label}</span>`;
        wrap.appendChild(card);
      });
      return wrap;
    }

    case "text": {
      wrap.className += " block-text";
      bloque.parrafos.forEach(texto => {
        const p = document.createElement("p");
        p.textContent = texto;
        wrap.appendChild(p);
      });
      return wrap;
    }

    case "image": {
      const frame = document.createElement("div");
      frame.className = "image-block";
      const img = document.createElement("img");
      img.src = bloque.src;
      img.alt = bloque.caption || "";
      frame.appendChild(img);
      if (bloque.caption) {
        const cap = document.createElement("div");
        cap.className = "image-caption";
        cap.textContent = bloque.caption;
        frame.appendChild(cap);
      }
      wrap.appendChild(frame);
      return wrap;
    }

    case "list": {
      if (bloque.titulo) {
        const h3 = document.createElement("h3");
        h3.textContent = bloque.titulo;
        h3.style.fontSize = "0.95rem";
        h3.style.marginBottom = "0.5rem";
        wrap.appendChild(h3);
      }
      const ul = document.createElement("ul");
      ul.className = "list-block";
      bloque.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
      return wrap;
    }

    case "table": {
      const tableWrap = document.createElement("div");
      tableWrap.className = "table-wrap";
      const table = document.createElement("table");
      table.className = "data-table";

      const thead = document.createElement("thead");
      const headRow = document.createElement("tr");
      bloque.headers.forEach(h => {
        const th = document.createElement("th");
        th.textContent = h;
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      bloque.rows.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);

      tableWrap.appendChild(table);
      wrap.appendChild(tableWrap);
      return wrap;
    }

    case "chart": {
      wrap.className += " chart-block";
      if (bloque.titulo) {
        const title = document.createElement("div");
        title.className = "chart-title";
        title.textContent = bloque.titulo;
        wrap.appendChild(title);
      }
      chartCounter++;
      const canvasId = `chart-${chartCounter}`;
      const canvas = document.createElement("canvas");
      canvas.id = canvasId;
      canvas.style.maxHeight = "220px";
      wrap.appendChild(canvas);

      // Se crea después de insertar el canvas en el DOM
      requestAnimationFrame(() => {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;
        charts[canvasId] = new Chart(ctx, {
          type: bloque.chartType || "bar",
          data: {
            labels: bloque.labels,
            datasets: [{
              label: bloque.unidad || "",
              data: bloque.data,
              backgroundColor: "#b5502f",
              borderColor: "#b5502f"
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, ticks: { color: "#6b5d4d" } },
              x: { ticks: { color: "#6b5d4d" } }
            }
          }
        });
      });
      return wrap;
    }

    default:
      return null;
  }
}

function initRegionMap(regionId, mapaData) {
  const map = L.map(`map-${regionId}`).setView([mapaData.centro.lat, mapaData.centro.lon], mapaData.centro.zoom);
  maps[regionId] = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  mapaData.puntos.forEach(p => {
    L.marker([p.lat, p.lon]).addTo(map).bindPopup(`<b>${p.nombre}</b><br>${p.descripcion}`);
  });
}

function initRegionTabs() {
  const buttons = document.querySelectorAll(".region-btn");
  const panels = document.querySelectorAll(".region-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const regionId = btn.dataset.region;
      document.getElementById(regionId).classList.add("active");

      if (maps[regionId]) {
        setTimeout(() => maps[regionId].invalidateSize(), 50);
      }
    });
  });
}
