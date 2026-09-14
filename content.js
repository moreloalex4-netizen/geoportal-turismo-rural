// ============================================
// CONTENIDO DEL PORTAL
// ============================================
// Cada tema tiene una lista de "bloques". Tipos disponibles:
//
//   { type: "stats", items: [{ value, label }] }
//   { type: "text", parrafos: ["...", "..."] }
//   { type: "image", src, caption }
//   { type: "list", titulo (opcional), items: ["...", "..."] }
//   { type: "table", headers: [...], rows: [[...], [...]] }
//   { type: "chart", chartType: "bar"|"line", titulo, labels: [...], data: [...], unidad: "%" }
//
// Para agregar contenido nuevo (un dato, una tabla, un gráfico, una imagen),
// solo agrega un bloque nuevo al arreglo "bloques" del tema que corresponda,
// o crea un tema nuevo copiando la estructura de uno existente.
// ============================================

const CONTENIDO = {

  armenia: {
    nombre: "Armenia y el Quindío",
    temas: [
      {
        id: "contexto",
        titulo: "Contexto general",
        bloques: [
          {
            type: "stats",
            items: [
              { value: "1.200–2.000", label: "msnm de altitud" },
              { value: "51", label: "municipios en el PCC" },
              { value: "~24.000", label: "fincas cafeteras en el Quindío" },
              { value: "27.476 ha", label: "área cafetera principal" }
            ]
          },
          {
            type: "image",
            src: "images/paisaje-cafetero.svg",
            caption: "Paisaje Cultural Cafetero — Patrimonio de la Humanidad UNESCO, 2011"
          },
          {
            type: "text",
            parrafos: [
              "El Quindío hace parte del Paisaje Cultural Cafetero (PCC), declarado Patrimonio de la Humanidad por la UNESCO en 2011. La región se destaca por su arquitectura vernácula con bahareque y teja de barro, tradiciones campesinas y cultivos en ladera de café arábigo de alta calidad."
            ]
          },
          {
            type: "list",
            titulo: "Transformaciones recientes",
            items: [
              "Suburbanización y gentrificación en la zona rural",
              "Pérdida de vocación agrícola por condominios y vivienda campestre",
              "El POD Quindío 2023–2039 incorpora el PCC como determinante de ordenamiento"
            ]
          }
        ]
      },
      {
        id: "turismo",
        titulo: "Turismo rural",
        bloques: [
          {
            type: "stats",
            items: [
              { value: "70%", label: "turistas nacionales" },
              { value: "30%", label: "turistas internacionales" }
            ]
          },
          {
            type: "image",
            src: "images/finca-turistica.svg",
            caption: "Finca cafetera turística"
          },
          {
            type: "table",
            headers: ["Producto turístico", "Descripción"],
            rows: [
              ["Fincas cafeteras turísticas", "Alojamiento, recorridos productivos, cata de café"],
              ["Rutas temáticas", "Salento, Filandia, Calarcá, Montenegro"],
              ["Turismo gastronómico", "Patrimonio alimentario cafetero"],
              ["Caminos e historias de la tierra cafetera", "Turismo cultural — territorio como \"museo vivo\""]
            ]
          },
          {
            type: "list",
            titulo: "Impactos del turismo en Salento",
            items: [
              "Positivo: empleo local y valorización del patrimonio",
              "Negativo: presión sobre infraestructura y especulación inmobiliaria",
              "Riesgo de folklorización de la cultura cafetera"
            ]
          }
        ]
      },
      {
        id: "ordenamiento",
        titulo: "Ordenamiento territorial",
        bloques: [
          {
            type: "table",
            headers: ["Instrumento", "Qué establece"],
            rows: [
              ["Ley 2323 de 2023", "Enaltece el PCC e incorpora en planes de desarrollo"],
              ["POD Quindío 2023–2039", "Incluye el PCC como determinante de ordenamiento"],
              ["CONPES 3803 (2014)", "Plan de acción de sostenibilidad del PCC"]
            ]
          },
          {
            type: "list",
            titulo: "Determinantes del PCC",
            items: [
              "Protección del paisaje (cultivos en ladera, arquitectura vernácula)",
              "Usos del suelo compatibles con la caficultura",
              "Corredores turísticos entre municipios",
              "Protección de cuencas hidrográficas"
            ]
          },
          {
            type: "text",
            parrafos: [
              "Persisten desafíos: suburbanización, gentrificación, deterioro de la arquitectura vernácula y falta de regulación específica en varios POT municipales."
            ]
          }
        ]
      },
      {
        id: "economia",
        titulo: "Economía local",
        bloques: [
          {
            type: "chart",
            chartType: "bar",
            titulo: "Turismo como % del PIB departamental",
            labels: ["Quindío"],
            data: [17.5],
            unidad: "%"
          },
          {
            type: "table",
            headers: ["Actor", "Rol en la cadena de valor"],
            rows: [
              ["Fincas cafeteras", "Hospedaje, alimentación, recorridos"],
              ["Prestadores de servicios", "Guías locales, transportadores, artesanos"],
              ["Comercio local", "Café especial, artesanías, productos locales"]
            ]
          },
          {
            type: "list",
            titulo: "Desafíos estructurales",
            items: [
              "Estacionalidad — alta concentración en fines de semana",
              "Informalidad en muchos prestadores de servicios",
              "Dependencia del turismo nacional, baja captación internacional"
            ]
          }
        ]
      },
      {
        id: "campo",
        titulo: "Guía de campo",
        bloques: [
          {
            type: "list",
            titulo: "Lugares recomendados",
            items: [
              "Fincas cafeteras turísticas (Salento, Filandia, Calarcá)",
              "Corredores turísticos rurales entre municipios cafeteros",
              "Zonas de transición urbano-rural (periferia de Armenia)",
              "Centros históricos y arquitectura vernácula cafetera",
              "Miradores y paisajes culturales del PCC"
            ]
          },
          {
            type: "list",
            titulo: "Puntos clave para la exposición",
            items: [
              "Tema 1 — El PCC es Patrimonio UNESCO desde 2011: geografía, altitud y arquitectura vernácula",
              "Tema 2 — Suburbanización y gentrificación transforman la vocación agrícola del territorio",
              "Tema 3 — El turismo rural es estrategia de diversificación frente a la crisis cafetera",
              "Tema 4 — Ley 2323, POD Quindío y CONPES 3803 regulan el PCC en el territorio",
              "Tema 5 — El turismo trae empleo y valorización, pero también presión y especulación"
            ]
          }
        ]
      }
    ],
    mapa: {
      centro: { lat: 4.53, lon: -75.68, zoom: 10 },
      puntos: [
        { nombre: "Armenia", lat: 4.5339, lon: -75.6811, descripcion: "Capital del Quindío" },
        { nombre: "Salento", lat: 4.6378, lon: -75.5703, descripcion: "Municipio emblemático del PCC, turismo cafetero" },
        { nombre: "Filandia", lat: 4.6739, lon: -75.6631, descripcion: "Ruta temática cafetera" },
        { nombre: "Calarcá", lat: 4.5297, lon: -75.6436, descripcion: "Ruta temática cafetera" },
        { nombre: "Montenegro", lat: 4.5678, lon: -75.7503, descripcion: "Ruta temática cafetera" }
      ]
    }
  },

  cali: {
    nombre: "Cali y su zona rural",
    temas: [
      {
        id: "contexto",
        titulo: "Contexto general",
        bloques: [
          {
            type: "stats",
            items: [
              { value: "564 km²", label: "área total del municipio" },
              { value: "70%", label: "del territorio es zona rural" },
              { value: "15", label: "corregimientos rurales" },
              { value: "90%", label: "de la población en zona urbana" }
            ]
          },
          {
            type: "image",
            src: "images/rio-pance.svg",
            caption: "Zona rural de Cali — bosques y cuencas hidrográficas"
          },
          {
            type: "text",
            parrafos: [
              "La zona rural de Cali combina bosque húmedo tropical, bosques de niebla en los Farallones y cuencas como los ríos Pance, Cali y Dagua. Cali es conocida como la capital de la avifauna colombiana por su alta biodiversidad de aves."
            ]
          },
          {
            type: "list",
            titulo: "Actividades económicas rurales",
            items: [
              "Agricultura: caña de azúcar, frutales, plátano, hortalizas",
              "Ganadería bovina, porcicultura y avicultura",
              "Minería de materiales de construcción en cuencas de ríos",
              "Turismo emergente — ecoturismo y turismo comunitario"
            ]
          }
        ]
      },
      {
        id: "turismo",
        titulo: "Turismo rural",
        bloques: [
          {
            type: "stats",
            items: [
              { value: "50.000", label: "visitantes al río Pance cada fin de semana" }
            ]
          },
          {
            type: "image",
            src: "images/la-buitrera.svg",
            caption: "Turismo comunitario en La Buitrera"
          },
          {
            type: "table",
            headers: ["Corregimiento", "Oferta turística"],
            rows: [
              ["La Buitrera", "Senderismo, avistamiento de aves, hospedaje rural"],
              ["Pance", "Balneario, senderos ecológicos, educación ambiental"],
              ["San Cipriano y Golondrinas", "Ecoturismo en bosque de niebla, turismo afrodescendiente"]
            ]
          },
          {
            type: "text",
            parrafos: [
              "Una tesis de la UNAD (2020) identifica un segmento de turistas nacionales interesados en naturaleza y desconexión urbana, con propuestas de bajo impacto ambiental y baja inversión inicial."
            ]
          }
        ]
      },
      {
        id: "ordenamiento",
        titulo: "Ordenamiento territorial",
        bloques: [
          {
            type: "table",
            headers: ["Corredor turístico", "Conecta"],
            rows: [
              ["Cali–Buenaventura", "Pacífico vallecaucano, vía San Cipriano y Golondrinas"],
              ["Cali–Jamundí–Palmira", "Turismo urbano, agroindustrial y religioso"],
              ["Farallones–Pance", "Parque Nacional Natural — ecoturismo y conservación"]
            ]
          },
          {
            type: "list",
            titulo: "Instrumentos de ordenamiento",
            items: [
              "POT de Cali — clasifica suelo urbano, de expansión y rural",
              "POT Departamental del Valle del Cauca",
              "Plan de Desarrollo de Cali",
              "Estrategia Socioambiental de la Subcuenca del Río Pance (ICESI, 2016)"
            ]
          },
          {
            type: "text",
            parrafos: [
              "Persisten desafíos: presión urbanística en La Buitrera y Pance, conflictos de uso del suelo, impacto ambiental por la alta afluencia al río Pance y falta de regulación específica para turismo rural comunitario."
            ]
          }
        ]
      },
      {
        id: "economia",
        titulo: "Economía local",
        bloques: [
          {
            type: "chart",
            chartType: "bar",
            titulo: "Turismo como % del PIB departamental",
            labels: ["Valle del Cauca"],
            data: [9],
            unidad: "%"
          },
          {
            type: "stats",
            items: [
              { value: "10–15", label: "familias con ingresos complementarios en La Buitrera" }
            ]
          },
          {
            type: "list",
            titulo: "Desafíos estructurales",
            items: [
              "Baja formalización de prestadores de servicios",
              "Estacionalidad — alta concentración en fines de semana",
              "Limitada articulación con cadenas agrícolas locales",
              "Dependencia del turismo urbano de Cali"
            ]
          }
        ]
      },
      {
        id: "campo",
        titulo: "Guía de campo",
        bloques: [
          {
            type: "list",
            titulo: "Lugares recomendados",
            items: [
              "Corregimiento La Buitrera (turismo comunitario)",
              "Corregimiento Pance (balneario, río, parque natural)",
              "San Cipriano y Golondrinas (vía al mar, ecoturismo)",
              "Zonas de transición urbano-rural (periferia de Cali)",
              "Cuencas hidrográficas y corredores turísticos"
            ]
          },
          {
            type: "list",
            titulo: "Puntos clave para la exposición",
            items: [
              "Tema 1 — El 70% del territorio de Cali es rural, con alta biodiversidad y cuencas estratégicas",
              "Tema 2 — El turismo comunitario se desarrolla en La Buitrera, Pance, San Cipriano y Golondrinas",
              "Tema 3 — El POT y los corredores turísticos regulan el uso del suelo rural",
              "Tema 4 — El turismo representa 8-10% del PIB departamental, con retos de formalización y estacionalidad"
            ]
          }
        ]
      }
    ],
    mapa: {
      centro: { lat: 3.45, lon: -76.55, zoom: 10 },
      puntos: [
        { nombre: "Cali", lat: 3.4516, lon: -76.5320, descripcion: "Capital del Valle del Cauca" },
        { nombre: "Pance", lat: 3.3333, lon: -76.5833, descripcion: "Balneario del río Pance, Parque Natural Municipal" },
        { nombre: "La Buitrera", lat: 3.3667, lon: -76.5667, descripcion: "Turismo comunitario rural" },
        { nombre: "San Cipriano", lat: 3.8264, lon: -76.9439, descripcion: "Ecoturismo en bosque de niebla, vía al mar" },
        { nombre: "Golondrinas", lat: 3.55, lon: -76.75, descripcion: "Corregimiento en la vía Cali-Buenaventura" }
      ]
    }
  }

};
