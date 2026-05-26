const R = [
    {
        id: 'CL-AP',
        name: 'Arica y Parinacota',
        num: 'XV',
        clim: '🏜️ Desértico costero',
        col: '#C4956A',
        desc: 'Región más septentrional. Altiplano andino, valles y desierto costero.',
        animales: [
            {
                nombre: 'Vicuña',
                img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Vicunacrop2.jpg',
                desc: 'Camélido silvestre de fibra finísima que vive sobre los 4.000 metros.'
            },
            {
                nombre: 'Flamenco Chileno',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Phoenicopterus_chilensis_%28foto_toradji_uraoka%29.jpg/1280px-Phoenicopterus_chilensis_%28foto_toradji_uraoka%29.jpg',
                desc: 'Ave rosada que habita lagunas altiplánicas sobre los 3.500 metros.'
            },
            {
                nombre: 'Suri',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rhea_pennata_pennata_%286%29.JPG/960px-Rhea_pennata_pennata_%286%29.JPG',
                desc: 'Ñandú petiso, ave corredora del altiplano andino.'
            }
        ]
    },
    {
        id: 'CL-TA',
        name: 'Tarapacá',
        num: 'I',
        clim: '🏜️ Desértico',
        col: '#BF8C5A',
        desc: 'Pampa del Tamarugal, salitreras y geoglifos gigantes en el desierto.',
        animales: [
            {
                nombre: 'Guanaco',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Guanaco_Patagonico.jpg/1280px-Guanaco_Patagonico.jpg',
                desc: 'Camélido capaz de sobrevivir en el desierto gracias a la camanchaca.'
            },
            {
                nombre: 'Gaviota Garuma',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Gaviota_garuma_%28Leucophaeus_modestus%29._Parque_nacional_Pan_de_Az%C3%BAcar._Regi%C3%B3n_de_Atacama._Chile.jpg/1280px-Gaviota_garuma_%28Leucophaeus_modestus%29._Parque_nacional_Pan_de_Az%C3%BAcar._Regi%C3%B3n_de_Atacama._Chile.jpg',
                desc: 'Gaviota gris única que nidifica en pleno desierto interior.'
            },
            {
                nombre: 'Lobo Marino',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Male_southern_sea_lion.jpg',
                desc: 'Mamífero marino común en el litoral costero e islotes.'
            }
        ]
    },
    {
        id: 'CL-AN',
        name: 'Antofagasta',
        num: 'II',
        clim: '🏜️ Hiperárido',
        col: '#B8834E',
        desc: 'Corazón del Atacama. Cielos más limpios del mundo.',
        animales: [
            {
                nombre: 'Flamenco Andino',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Two_andeanflamingo_june2003_arp.jpg/1280px-Two_andeanflamingo_june2003_arp.jpg',
                desc: 'Ave rosada que nidifica en el Salar de Atacama.'
            },
            {
                nombre: 'Vizcacha',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Vizcacha_de_la_Sierra_%28Lagidium_viscacia%29%2C_Desierto_de_Siloli%2C_Bolivia%2C_2016-02-03%2C_DD_31.JPG/960px-Vizcacha_de_la_Sierra_%28Lagidium_viscacia%29%2C_Desierto_de_Siloli%2C_Bolivia%2C_2016-02-03%2C_DD_31.JPG',
                desc: 'Roedor de largas orejas en los roqueríos cordilleranos.'
            },
            {
                nombre: 'Gato Andino',
                img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Gato_andino.jpg',
                desc: 'Felino esquivo y amenazado de la alta montaña.'
            }
        ]
    },
    {
        id: 'CL-AT',
        name: 'Atacama',
        num: 'III',
        clim: '🏜️ Árido',
        col: '#A97B4B',
        desc: 'Desierto florido. Valles transversales y costa rica en biodiversidad.',
        animales: [
            {
                nombre: 'Chinchilla',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG/250px-Chinchilla_lanigera_%28Wroclaw_zoo%29-2.JPG',
                desc: 'Roedor de pelaje denso en peligro crítico de la precordillera.'
            },
            {
                nombre: 'Zorro Chilla',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Zorrito_Chile.JPG/330px-Zorrito_Chile.JPG',
                desc: 'Cánido pequeño de las llanuras y matorrales áridos.'
            },
            {
                nombre: 'Cóndor',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/960px-AndeanCondorMale.jpg',
                desc: 'Ave carroñera de gran envergadura en la cordillera.'
            }
        ]
    },
    {
        id: 'CL-CO',
        name: 'Coquimbo',
        num: 'IV',
        clim: '🌵 Semiárido',
        col: '#8B7355',
        desc: 'Valle del Elqui, pisco, observatorios y transición climática.',
        animales: [
            {
                nombre: 'Pingüino de Humboldt',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Spheniscus_humboldti_%28Humboldt-Pinguine_-_Humboldt_Penguins%29_-_Weltvogelpark_Walsrode_2013-01.jpg/250px-Spheniscus_humboldti_%28Humboldt-Pinguine_-_Humboldt_Penguins%29_-_Weltvogelpark_Walsrode_2013-01.jpg',
                desc: 'Ave marina de la Reserva Nacional Pingüino de Humboldt.'
            },
            {
                nombre: 'Chungungo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Lfelina.jpg/250px-Lfelina.jpg',
                desc: 'La nutria marina más pequeña del mundo.'
            },
            {
                nombre: 'Pelícano',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/330px-Pelikan_Walvis_Bay.jpg',
                desc: 'Ave marina de gran pico presente en la costa.'
            }
        ]
    },
    {
        id: 'CL-VS',
        name: 'Valparaíso',
        num: 'V',
        clim: '🍇 Mediterráneo',
        col: '#7A7A42',
        desc: 'Puerto patrimonio UNESCO, cerros coloridos.',
        animales: [
            {
                nombre: 'Degú',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Octodon_Degus_fr.jpg/250px-Octodon_Degus_fr.jpg',
                desc: 'Roedor diurno y sociable del matorral esclerófilo.'
            },
            {
                nombre: 'Lobo Marino',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Male_southern_sea_lion.jpg/250px-Male_southern_sea_lion.jpg',
                desc: 'Mamífero marino frecuente en los muelles de Valparaíso.'
            },
            {
                nombre: 'Pelícano',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelikan_Walvis_Bay.jpg/330px-Pelikan_Walvis_Bay.jpg',
                desc: 'Ave marina de gran pico presente en los puertos.'
            }
        ]
    },
    {
        id: 'CL-RM',
        name: 'Metropolitana de Santiago',
        num: 'RM',
        clim: '🍇 Mediterráneo',
        col: '#6B8E23',
        desc: 'Capital, 7 millones de habitantes.',
        animales: [
            {
                nombre: 'Zorro Culpeo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Culpeo_MC.jpg/250px-Culpeo_MC.jpg',
                desc: 'El cánido nativo más grande de Chile central.'
            },
            {
                nombre: 'Águila',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Parque_Nacional_do_Catimbau_Almir_das_Neves_Araujo_%2811%29_%28cropped%29.jpg/250px-Parque_Nacional_do_Catimbau_Almir_das_Neves_Araujo_%2811%29_%28cropped%29.jpg',
                desc: 'Rapaz que sobrevuela los cerros de la precordillera.'
            },
            {
                nombre: 'Tarántula',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Grammostola_rosea_adult_weiblich.jpg/250px-Grammostola_rosea_adult_weiblich.jpg',
                desc: 'Araña pollito, tarántula nativa de los cerros.'
            }
        ]
    },
    {
        id: 'CL-LI',
        name: "O'Higgins",
        num: 'VI',
        clim: '🌾 Mediterráneo',
        col: '#5E8B30',
        desc: 'Corazón agrícola. Viñedos de Colchagua.',
        animales: [
            {
                nombre: 'Loro Tricahue',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Cyanoliseus_patagonus_-Psittacara_patagonica_Patagonian_Parrakeet-Maccaw_-by_Edward_Lear_1812-1888.jpg/250px-Cyanoliseus_patagonus_-Psittacara_patagonica_Patagonian_Parrakeet-Maccaw_-by_Edward_Lear_1812-1888.jpg',
                desc: 'El loro más grande de Chile, habita en colonias.'
            },
            {
                nombre: 'Puma',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Puma_concolor_puma_2.JPG/250px-Puma_concolor_puma_2.JPG',
                desc: 'El mayor felino de Chile, señor de la cordillera.'
            },
            {
                nombre: 'Lagartija',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Liolaemus_Tenuis.jpg/250px-Liolaemus_Tenuis.jpg',
                desc: 'Reptil endémico de colores verdes y azules intensos.'
            }
        ]
    },
    {
        id: 'CL-ML',
        name: 'Maule',
        num: 'VII',
        clim: '🍇 Templado',
        col: '#4F8735',
        desc: 'Gran región vitivinícola y tradición huasa.',
        animales: [
            {
                nombre: 'Quique',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Galictis.jpg/250px-Galictis.jpg',
                desc: 'Carnívoro alargado emparentado con hurones.'
            },
            {
                nombre: 'Lechuza',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tyto_alba_close_up.jpg/250px-Tyto_alba_close_up.jpg',
                desc: 'Rapaz nocturna presente en campos y graneros.'
            },
            {
                nombre: 'Coipo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Myocastor_coypus_-_ragondin.jpg/250px-Myocastor_coypus_-_ragondin.jpg',
                desc: 'Roedor semiacuático de los ríos y humedales.'
            }
        ]
    },
    {
        id: 'CL-NU',
        name: 'Ñuble',
        num: 'XVI',
        clim: '🌲 Templado',
        col: '#488040',
        desc: 'Región más joven. Termas de Chillán.',
        animales: [
            {
                nombre: 'Carpintero Negro',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg/250px-Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg',
                desc: 'Ave imponente de cabeza roja en bosques nativos.'
            },
            {
                nombre: 'Gato Colocolo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Lydekker_-_Colocolo.JPG',
                desc: 'Felino nativo pequeño, difícil de avistar.'
            },
            {
                nombre: 'Cóndor',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg/250px-Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg',
                desc: 'Majestuoso carroñero de las cumbres andinas.'
            }
        ]
    },
    {
        id: 'CL-BI',
        name: 'Biobío',
        num: 'VIII',
        clim: '🌲 Templado',
        col: '#3D7A45',
        desc: 'Zona industrial y forestal. Río Biobío.',
        animales: [
            {
                nombre: 'Rana',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Calyptocephalella_gayi_foto.jpg/250px-Calyptocephalella_gayi_foto.jpg',
                desc: 'Anfibios nativos habitan los bosques húmedos del sur.'
            },
            {
                nombre: 'Loro Choroy',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Enicognathus_leptorhynchus_en_Chilo%C3%A9.JPG/250px-Enicognathus_leptorhynchus_en_Chilo%C3%A9.JPG',
                desc: 'Loro endémico que vuela en bandadas ruidosas.'
            },
            {
                nombre: 'Zorrillo',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chingue_%28Conepatus_chinga%29_Inao_V%C3%A1squez_001.jpg/250px-Chingue_%28Conepatus_chinga%29_Inao_V%C3%A1squez_001.jpg',
                desc: 'Chingue nativo con glándulas de olor defensivo.'
            }
        ]
    },
    {
        id: 'CL-AR',
        name: 'La Araucanía',
        num: 'IX',
        clim: '🌲 Templado lluvioso',
        col: '#2E7548',
        desc: 'Tierra Mapuche. Volcanes y araucarias.',
        animales: [
            {
                nombre: 'Guiña',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Leopardus_guigna.jpeg/250px-Leopardus_guigna.jpeg',
                desc: 'El felino más pequeño de América, gran trepador.'
            },
            {
                nombre: 'Carpintero Negro',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg/250px-Magellanic_Woodpecker_Male_%28Campephilus_magellanicus%29.jpg',
                desc: 'Ave imponente de cabeza roja en bosques de araucarias.'
            },
            {
                nombre: 'Bandurria',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Theristicus_melanopis_1_Frank_Vassen.jpg/250px-Theristicus_melanopis_1_Frank_Vassen.jpg',
                desc: 'Ave de pico curvo en praderas y humedales.'
            }
        ]
    },
    {
        id: 'CL-LR',
        name: 'Los Ríos',
        num: 'XIV',
        clim: '🌧️ Lluvioso',
        col: '#267050',
        desc: 'Selva valdiviana, bosque templado milenario.',
        animales: [
            {
                nombre: 'Monito del Monte',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Monito_del_Monte_ps6.jpg/250px-Monito_del_Monte_ps6.jpg',
                desc: 'Marsupial "fósil viviente" de la selva valdiviana.'
            },
            {
                nombre: 'Nutria',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lontra_provocax.jpg/250px-Lontra_provocax.jpg',
                desc: 'Huillín, nutria de agua dulce en ríos nativos.'
            },
            {
                nombre: 'Martín Pescador',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/250px-Common_Kingfisher_Alcedo_atthis.jpg',
                desc: 'Ave colorida que pesca en ríos y esteros.'
            }
        ]
    },
    {
        id: 'CL-LL',
        name: 'Los Lagos',
        num: 'X',
        clim: '🌧️ Marítimo',
        col: '#1E6B55',
        desc: 'Chiloé, volcán Osorno, Carretera Austral.',
        animales: [
            {
                nombre: 'Pudú',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pudu_puda_01.jpg/250px-Pudu_puda_01.jpg',
                desc: 'El ciervo más pequeño del mundo, vive en bosques densos.'
            },
            {
                nombre: 'Zorro de Darwin',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Pseudalopex_fulvipes-primer_plano.jpg/250px-Pseudalopex_fulvipes-primer_plano.jpg',
                desc: 'Uno de los cánidos más amenazados del planeta.'
            },
            {
                nombre: 'Cisne Cuello Negro',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cygnus_melancoryphus_-Puerto_Natales%2C_Patagonia%2C_Chile-8.jpg/250px-Cygnus_melancoryphus_-Puerto_Natales%2C_Patagonia%2C_Chile-8.jpg',
                desc: 'La mayor ave acuática del país.'
            }
        ]
    },
    {
        id: 'CL-AI',
        name: 'Aysén',
        num: 'XI',
        clim: '🧊 Subpolar',
        col: '#2B7D80',
        desc: 'Patagonia salvaje. Campos de hielo y fiordos.',
        animales: [
            {
                nombre: 'Huemul',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Huemul_de_la_Reserva_Nacional_Cerro_Castillo.jpg/250px-Huemul_de_la_Reserva_Nacional_Cerro_Castillo.jpg',
                desc: 'Ciervo del escudo nacional chileno, en peligro.'
            },
            {
                nombre: 'Cóndor',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AndeanCondorMale.jpg/250px-AndeanCondorMale.jpg',
                desc: 'El ave voladora más grande del hemisferio occidental.'
            },
            {
                nombre: 'Martín Pescador',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/250px-Common_Kingfisher_Alcedo_atthis.jpg',
                desc: 'Se lanza en picada por peces en ríos patagónicos.'
            }
        ]
    },
    {
        id: 'CL-MA',
        name: 'Magallanes',
        num: 'XII',
        clim: '🧊 Polar',
        col: '#5A9EB5',
        desc: 'Torres del Paine y territorio antártico.',
        animales: [
            {
                nombre: 'Pingüino Rey',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Manchot_royal_-_King_Penguin.jpg/250px-Manchot_royal_-_King_Penguin.jpg',
                desc: 'Segundo pingüino más grande, colonia en Tierra del Fuego.'
            },
            {
                nombre: 'Puma',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Puma_concolor_puma_2.JPG/250px-Puma_concolor_puma_2.JPG',
                desc: 'Rey de Torres del Paine, avistado frecuentemente.'
            },
            {
                nombre: 'Elefante Marino',
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/See_elefanten_edit.jpg/250px-See_elefanten_edit.jpg',
                desc: 'Gigantesco mamífero marino del extremo sur.'
            }
        ]
    }
];

const COLORS = {
    'CL-AP': '#C4956A',
    'CL-TA': '#BF8C5A',
    'CL-AN': '#B8834E',
    'CL-AT': '#A97B4B',
    'CL-CO': '#8B7355',
    'CL-VS': '#7A7A42',
    'CL-RM': '#6B8E23',
    'CL-LI': '#5E8B30',
    'CL-ML': '#4F8735',
    'CL-NU': '#488040',
    'CL-BI': '#3D7A45',
    'CL-AR': '#2E7548',
    'CL-LR': '#267050',
    'CL-LL': '#1E6B55',
    'CL-AI': '#2B7D80',
    'CL-MA': '#5A9EB5'
};