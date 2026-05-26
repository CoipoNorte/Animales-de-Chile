# Animales-de-Chile
# 🇨🇱 Mapa Interactivo de Chile

Aplicación web interactiva que permite explorar las 16 regiones de Chile mediante scroll, click o teclado. Incluye información geográfica, climática y fauna representativa de cada región.

![Chile Map](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Chile.svg/200px-Flag_of_Chile.svg.png)

---

## 📁 Estructura del Proyecto

```
📁 chile-map/
├── index.html          ← Estructura HTML
├── styles.css          ← Estilos visuales
├── data.js             ← Datos de regiones y fauna
├── script.js           ← Lógica e interacciones
├── chile.svg           ← Mapa SVG de Chile
└── README.md           ← Este archivo
```

---

## 🗺️ El SVG de Chile

El archivo `chile.svg` contiene los paths de cada región identificados con el código **ISO 3166-2:CL**.

### ¿Cómo identificar cada región?

Cada `<path>` dentro del SVG tiene un atributo `id` que corresponde al código ISO:

```xml
<svg viewBox="0 0 612.5365 708.72205">
    <path id="CL-AP" d="M..." />   <!-- Arica y Parinacota -->
    <path id="CL-TA" d="M..." />   <!-- Tarapacá -->
    <path id="CL-AN" d="M..." />   <!-- Antofagasta -->
    <!-- ... -->
</svg>
```

### Dimensiones del SVG

| Propiedad      | Valor         |
|----------------|---------------|
| `viewBox`      | `0 0 612.5365 708.72205` |
| Ancho interno  | 612.5365 unidades |
| Alto interno   | 708.72205 unidades |
| Orientación    | Norte arriba, Sur abajo |

### Cómo obtener el centro de una región (para zoom)

```javascript
const path = svgDoc.getElementById('CL-RM');
const bbox = path.getBBox();
const centerX = bbox.x + bbox.width / 2;
const centerY = bbox.y + bbox.height / 2;
const area = bbox.width * bbox.height; // útil para calcular zoom
```

### Cálculo de zoom según tamaño

```javascript
let zoom;
if (area < 100) zoom = 9;       // regiones muy pequeñas (RM, Ñuble)
else if (area < 400) zoom = 6;   // pequeñas
else if (area < 1500) zoom = 4;  // medianas
else if (area < 4000) zoom = 3;  // grandes
else if (area < 10000) zoom = 2; // muy grandes (Antofagasta)
else zoom = 1.3;                 // enormes (Magallanes)
```

---

## 📊 Tabla de Regiones

| # | Código ISO | Número | Región | Clima | Color | Descripción |
|---|-----------|--------|--------|-------|-------|-------------|
| 1 | `CL-AP` | XV | Arica y Parinacota | 🏜️ Desértico costero | `#C4956A` | Región más septentrional. Altiplano andino, valles y desierto costero. |
| 2 | `CL-TA` | I | Tarapacá | 🏜️ Desértico | `#BF8C5A` | Pampa del Tamarugal, salitreras y geoglifos gigantes en el desierto. |
| 3 | `CL-AN` | II | Antofagasta | 🏜️ Hiperárido | `#B8834E` | Corazón del Atacama. Cielos más limpios del mundo. |
| 4 | `CL-AT` | III | Atacama | 🏜️ Árido | `#A97B4B` | Desierto florido. Valles transversales y costa rica en biodiversidad. |
| 5 | `CL-CO` | IV | Coquimbo | 🌵 Semiárido | `#8B7355` | Valle del Elqui, pisco, observatorios y transición climática. |
| 6 | `CL-VS` | V | Valparaíso | 🍇 Mediterráneo | `#7A7A42` | Puerto patrimonio UNESCO, cerros coloridos. |
| 7 | `CL-RM` | RM | Metropolitana | 🍇 Mediterráneo | `#6B8E23` | Capital, 7 millones de habitantes. |
| 8 | `CL-LI` | VI | O'Higgins | 🌾 Mediterráneo | `#5E8B30` | Corazón agrícola. Viñedos de Colchagua. |
| 9 | `CL-ML` | VII | Maule | 🍇 Templado | `#4F8735` | Gran región vitivinícola y tradición huasa. |
| 10 | `CL-NU` | XVI | Ñuble | 🌲 Templado | `#488040` | Región más joven. Termas de Chillán. |
| 11 | `CL-BI` | VIII | Biobío | 🌲 Templado | `#3D7A45` | Zona industrial y forestal. Río Biobío. |
| 12 | `CL-AR` | IX | La Araucanía | 🌲 Templado lluvioso | `#2E7548` | Tierra Mapuche. Volcanes y araucarias. |
| 13 | `CL-LR` | XIV | Los Ríos | 🌧️ Lluvioso | `#267050` | Selva valdiviana, bosque templado milenario. |
| 14 | `CL-LL` | X | Los Lagos | 🌧️ Marítimo | `#1E6B55` | Chiloé, volcán Osorno, Carretera Austral. |
| 15 | `CL-AI` | XI | Aysén | 🧊 Subpolar | `#2B7D80` | Patagonia salvaje. Campos de hielo y fiordos. |
| 16 | `CL-MA` | XII | Magallanes | 🧊 Polar | `#5A9EB5` | Torres del Paine y territorio antártico. |

---

## 🦙 Fauna por Región

### XV — Arica y Parinacota (`CL-AP`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Vicuña | ![Vicuña](https://upload.wikimedia.org/wikipedia/commons/d/d5/Vicunacrop2.jpg) | Camélido silvestre de fibra finísima que vive sobre los 4.000 metros. |
| Flamenco Chileno | ![Flamenco](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phoenicopterus_chilensis_%28foto_toradji_uraoka%29.jpg/1280px-Phoenicopterus_chilensis_%28foto_toradji_uraoka%29.jpg) | Ave rosada que habita lagunas altiplánicas sobre los 3.500 metros. |
| Suri | ![Suri](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rhea_pennata_pennata_%286%29.JPG/960px-Rhea_pennata_pennata_%286%29.JPG) | Ñandú petiso, ave corredora del altiplano andino. |

### I — Tarapacá (`CL-TA`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Guanaco | ![Guanaco](https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Guanaco_Patagonico.jpg/1280px-Guanaco_Patagonico.jpg) | Camélido capaz de sobrevivir en el desierto gracias a la camanchaca. |
| Gaviota Garuma | ![Garuma](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gaviota_garuma_%28Leucophaeus_modestus%29._Parque_nacional_Pan_de_Az%C3%BAcar._Regi%C3%B3n_de_Atacama._Chile.jpg/1280px-Gaviota_garuma_%28Leucophaeus_modestus%29._Parque_nacional_Pan_de_Az%C3%BAcar._Regi%C3%B3n_de_Atacama._Chile.jpg) | Gaviota gris única que nidifica en pleno desierto interior. |
| Lobo Marino | ![Lobo](https://upload.wikimedia.org/wikipedia/commons/f/f0/Male_southern_sea_lion.jpg) | Mamífero marino común en el litoral costero e islotes. |

### II — Antofagasta (`CL-AN`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Flamenco Andino | ![Flamenco](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Two_andeanflamingo_june2003_arp.jpg/1280px-Two_andeanflamingo_june2003_arp.jpg) | Ave rosada que nidifica en el Salar de Atacama. |
| Vizcacha | ![Vizcacha](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Vizcacha_de_la_Sierra_%28Lagidium_viscacia%29%2C_Desierto_de_Siloli%2C_Bolivia%2C_2016-02-03%2C_DD_31.JPG/960px-Vizcacha_de_la_Sierra_%28Lagidium_viscacia%29%2C_Desierto_de_Siloli%2C_Bolivia%2C_2016-02-03%2C_DD_31.JPG) | Roedor de largas orejas en los roqueríos cordilleranos. |
| Gato Andino | ![Gato](https://upload.wikimedia.org/wikipedia/commons/2/29/Gato_andino.jpg) | Felino esquivo y amenazado de la alta montaña. |

### III — Atacama (`CL-AT`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Chinchilla | ![Chinchilla](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG/250px-Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG) | Roedor de pelaje denso en peligro crítico de la precordillera. |
| Zorro Chilla | ![Chilla](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Zorrito_Chile.JPG/330px-Zorrito_Chile.JPG) | Cánido pequeño de las llanuras y matorrales áridos. |
| Cóndor | ![Cóndor](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/960px-AndeanCondorMale.jpg) | Ave carroñera de gran envergadura en la cordillera. |

### IV — Coquimbo (`CL-CO`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Pingüino de Humboldt | ![Pingüino](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Spheniscus_humboldti_%28Humboldt-Pinguine_-_Humboldt_Penguins%29_-_Weltvogelpark_Walsrode_2013-01.jpg/250px-Spheniscus_humboldti_%28Humboldt-Pinguine_-_Humboldt_Penguins%29_-_Weltvogelpark_Walsrode_2013-01.jpg) | Ave marina de la Reserva Nacional Pingüino de Humboldt. |
| Chungungo | ![Chungungo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lfelina.jpg/250px-Lfelina.jpg) | La nutria marina más pequeña del mundo. |
| Pelícano | ![Pelícano](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/330px-Pelikan_Walvis_Bay.jpg) | Ave marina de gran pico presente en la costa. |

### V — Valparaíso (`CL-VS`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Degú | ![Degú](https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Octodon_Degus_fr.jpg/250px-Octodon_Degus_fr.jpg) | Roedor diurno y sociable del matorral esclerófilo. |
| Lobo Marino | ![Lobo](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Male_southern_sea_lion.jpg/250px-Male_southern_sea_lion.jpg) | Mamífero marino frecuente en los muelles de Valparaíso. |
| Pelícano | ![Pelícano](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/330px-Pelikan_Walvis_Bay.jpg) | Ave marina de gran pico presente en los puertos. |

### RM — Metropolitana (`CL-RM`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Zorro Culpeo | ![Culpeo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Culpeo_MC.jpg/250px-Culpeo_MC.jpg) | El cánido nativo más grande de Chile central. |
| Águila | ![Águila](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Parque_Nacional_do_Catimbau_Almir_das_Neves_Araujo_%2811%29_%28cropped%29.jpg/250px-Parque_Nacional_do_Catimbau_Almir_das_Neves_Araujo_%2811%29_%28cropped%29.jpg) | Rapaz que sobrevuela los cerros de la precordillera. |
| Tarántula | ![Tarántula](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Grammostola_rosea_adult_weiblich.jpg/250px-Grammostola_rosea_adult_weiblich.jpg) | Araña pollito, tarántula nativa de los cerros. |

### VI — O'Higgins (`CL-LI`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Loro Tricahue | ![Tricahue](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cyanoliseus_patagonus_-Psittacara_patagonica_Patagonian_Parrakeet-Maccaw_-by_Edward_Lear_1812-1888.jpg/250px-Cyanoliseus_patagonus_-Psittacara_patagonica_Patagonian_Parrakeet-Maccaw_-by_Edward_Lear_1812-1888.jpg) | El loro más grande de Chile, habita en colonias. |
| Puma | ![Puma](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Puma_concolor_puma_2.JPG/250px-Puma_concolor_puma_2.JPG) | El mayor felino de Chile, señor de la cordillera. |
| Lagartija | ![Lagartija](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Liolaemus_Tenuis.jpg/250px-Liolaemus_Tenuis.jpg) | Reptil endémico de colores verdes y azules intensos. |

### VII — Maule (`CL-ML`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Quique | ![Quique](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Galictis.jpg/250px-Galictis.jpg) | Carnívoro alargado emparentado con hurones. |
| Lechuza | ![Lechuza](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tyto_alba_close_up.jpg/250px-Tyto_alba_close_up.jpg) | Rapaz nocturna presente en campos y graneros. |
| Coipo | ![Coipo](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Myocastor_coypus_-_ragondin.jpg/250px-Myocastor_coypus_-_ragondin.jpg) | Roedor semiacuático de los ríos y humedales. |

### XVI — Ñuble (`CL-NU`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Carpintero Negro | ![Carpintero](https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg/250px-Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg) | Ave imponente de cabeza roja en bosques nativos. |
| Gato Colocolo | ![Colocolo](https://upload.wikimedia.org/wikipedia/commons/0/09/Lydekker_-_Colocolo.JPG) | Felino nativo pequeño, difícil de avistar. |
| Cóndor | ![Cóndor](https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg/250px-Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg) | Majestuoso carroñero de las cumbres andinas. |

### VIII — Biobío (`CL-BI`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Rana | ![Rana](https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Calyptocephalella_gayi_foto.jpg/250px-Calyptocephalella_gayi_foto.jpg) | Anfibios nativos habitan los bosques húmedos del sur. |
| Loro Choroy | ![Choroy](https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Enicognathus_leptorhynchus_en_Chilo%C3%A9.JPG/250px-Enicognathus_leptorhynchus_en_Chilo%C3%A9.JPG) | Loro endémico que vuela en bandadas ruidosas. |
| Zorrillo | ![Zorrillo](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chingue_%28Conepatus_chinga%29_Inao_V%C3%A1squez_001.jpg/250px-Chingue_%28Conepatus_chinga%29_Inao_V%C3%A1squez_001.jpg) | Chingue nativo con glándulas de olor defensivo. |

### IX — La Araucanía (`CL-AR`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Guiña | ![Guiña](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Leopardus_guigna.jpeg/250px-Leopardus_guigna.jpeg) | El felino más pequeño de América, gran trepador. |
| Carpintero Negro | ![Carpintero](https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg/250px-Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg) | Ave imponente de cabeza roja en bosques de araucarias. |
| Bandurria | ![Bandurria](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Theristicus_melanopis_1_Frank_Vassen.jpg/250px-Theristicus_melanopis_1_Frank_Vassen.jpg) | Ave de pico curvo en praderas y humedales. |

### XIV — Los Ríos (`CL-LR`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Monito del Monte | ![Monito](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Monito_del_Monte_ps6.jpg/250px-Monito_del_Monte_ps6.jpg) | Marsupial "fósil viviente" de la selva valdiviana. |
| Nutria | ![Nutria](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lontra_provocax.jpg/250px-Lontra_provocax.jpg) | Huillín, nutria de agua dulce en ríos nativos. |
| Martín Pescador | ![Martín](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/250px-Common_Kingfisher_Alcedo_atthis.jpg) | Ave colorida que pesca en ríos y esteros. |

### X — Los Lagos (`CL-LL`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Pudú | ![Pudú](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pudu_puda_01.jpg/250px-Pudu_puda_01.jpg) | El ciervo más pequeño del mundo, vive en bosques densos. |
| Zorro de Darwin | ![Darwin](https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pseudalopex_fulvipes-primer_plano.jpg/250px-Pseudalopex_fulvipes-primer_plano.jpg) | Uno de los cánidos más amenazados del planeta. |
| Cisne Cuello Negro | ![Cisne](https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cygnus_melancoryphus_-Puerto_Natales%2C_Patagonia%2C_Chile-8.jpg/250px-Cygnus_melancoryphus_-Puerto_Natales%2C_Patagonia%2C_Chile-8.jpg) | La mayor ave acuática del país. |

### XI — Aysén (`CL-AI`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Huemul | ![Huemul](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Huemul_de_la_Reserva_Nacional_Cerro_Castillo.jpg/250px-Huemul_de_la_Reserva_Nacional_Cerro_Castillo.jpg) | Ciervo del escudo nacional chileno, en peligro. |
| Cóndor | ![Cóndor](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/250px-AndeanCondorMale.jpg) | El ave voladora más grande del hemisferio occidental. |
| Martín Pescador | ![Martín](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/250px-Common_Kingfisher_Alcedo_atthis.jpg) | Se lanza en picada por peces en ríos patagónicos. |

### XII — Magallanes (`CL-MA`)

| Animal | Imagen | Descripción |
|--------|--------|-------------|
| Pingüino Rey | ![Pingüino](https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Manchot_royal_-_King_Penguin.jpg/250px-Manchot_royal_-_King_Penguin.jpg) | Segundo pingüino más grande, colonia en Tierra del Fuego. |
| Puma | ![Puma](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Puma_concolor_puma_2.JPG/250px-Puma_concolor_puma_2.JPG) | Rey de Torres del Paine, avistado frecuentemente. |
| Elefante Marino | ![Elefante](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/See_elefanten_edit.jpg/250px-See_elefanten_edit.jpg) | Gigantesco mamífero marino del extremo sur. |

---

## 🎮 Controles

| Acción | Método |
|--------|--------|
| Avanzar región | Scroll ↓ / Flecha ↓ → / PageDown / Espacio |
| Retroceder región | Scroll ↑ / Flecha ↑ ← / PageUp |
| Ir a primera región | Home |
| Ir a última región | End |
| Ir a región específica | Click en sidebar o click en el mapa SVG |
| Ver fauna | Click en card de animal |
| Cerrar detalle fauna | Click en ✕ o click fuera |
| Móvil | Swipe arriba/abajo |

---

## 🔧 Cómo reutilizar

### Agregar una nueva región

1. **SVG**: Agregar un `<path id="CL-XX" d="..."/>` en `chile.svg`
2. **data.js**: Agregar objeto al array `R`:

```javascript
{
    id: 'CL-XX',
    name: 'Nueva Región',
    num: 'XVII',
    clim: '🌤️ Clima',
    col: '#COLOR',
    desc: 'Descripción de la región.',
    animales: [
        {
            nombre: 'Animal',
            img: 'https://url-de-imagen.jpg',
            desc: 'Descripción del animal.'
        }
    ]
}
```

3. **data.js**: Agregar color a `COLORS`:

```javascript
'CL-XX': '#COLOR'
```

4. **index.html**: Agregar `<li>` al sidebar:

```html
<li data-r="CL-XX">
    <span class="rdot" style="background:#COLOR"></span>
    <span class="rnum">XVII</span>
    <span class="rname">Nueva Región</span>
    <span class="rtag">Clima</span>
</li>
```

### Cambiar la fauna de una región

Solo edita el array `animales` dentro del objeto correspondiente en `data.js`. Cada animal necesita:

```javascript
{
    nombre: 'Nombre visible',          // String
    img: 'https://url-completa.jpg',   // URL directa a imagen
    desc: 'Texto descriptivo.'         // String
}
```

### Adaptar a otro país

1. Reemplazar `chile.svg` por el SVG del país deseado
2. Cambiar los `id` de los paths a los códigos ISO correspondientes
3. Actualizar `data.js` con las regiones/estados del nuevo país
4. Ajustar las constantes de zoom en `script.js` si las proporciones del SVG son distintas:

```javascript
const pxX = cx * (objW / VIEWBOX_WIDTH);
const pxY = cy * (objH / VIEWBOX_HEIGHT);
```

---

## 📐 Referencia técnica del SVG

### Códigos ISO 3166-2:CL

| Código | Región | Orden geográfico |
|--------|--------|-------------------|
| `CL-AP` | Arica y Parinacota | 1 (extremo norte) |
| `CL-TA` | Tarapacá | 2 |
| `CL-AN` | Antofagasta | 3 |
| `CL-AT` | Atacama | 4 |
| `CL-CO` | Coquimbo | 5 |
| `CL-VS` | Valparaíso | 6 |
| `CL-RM` | Metropolitana | 7 |
| `CL-LI` | O'Higgins | 8 |
| `CL-ML` | Maule | 9 |
| `CL-NU` | Ñuble | 10 |
| `CL-BI` | Biobío | 11 |
| `CL-AR` | La Araucanía | 12 |
| `CL-LR` | Los Ríos | 13 |
| `CL-LL` | Los Lagos | 14 |
| `CL-AI` | Aysén | 15 |
| `CL-MA` | Magallanes | 16 (extremo sur) |

### Paleta de colores (norte a sur)

```
Norte  ████ #C4956A  Desértico cálido
       ████ #BF8C5A
       ████ #B8834E
       ████ #A97B4B
       ████ #8B7355
       ████ #7A7A42  Transición
       ████ #6B8E23  Mediterráneo
       ████ #5E8B30
       ████ #4F8735
       ████ #488040
       ████ #3D7A45  Templado
       ████ #2E7548
       ████ #267050  Lluvioso
       ████ #1E6B55
       ████ #2B7D80  Subpolar
Sur    ████ #5A9EB5  Polar frío
```

---

## 📝 Licencia

Proyecto educativo. Imágenes de fauna desde Wikimedia Commons (licencias CC/dominio público).
