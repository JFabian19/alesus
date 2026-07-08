export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "entradas",
    nombre: "Entradas",
    items: [
      {
        nombre: "CAUSA DE PULPO AL OLIVO",
        descripcion: "Preparada a base de papa amarilla, ají amarillo, limón, aceite vegetal y pulpo.",
        precio: "S/ 30.00",
        imagen: "/causa_pulpo_olivo.png"
      },
      {
        nombre: "CAUSA DE LANGOSTINOS",
        descripcion: "Preparados con deliciosos langostinos flameados, masa de papa amarilla sazonada con crema de ají amarillo y limón.",
        precio: "S/ 35.00",
        imagen: "/causa_langostinos.png"
      },
      {
        nombre: "CAUSA ACEVICHADA",
        descripcion: "Fina selección de papas, bañados en salsa cevichera.",
        precio: "S/ 35.00",
        imagen: "/causa_acevichada.png"
      }
    ]
  },
  {
    id: "cevichazos",
    nombre: "Cevichazos",
    items: [
      {
        nombre: "CEVICHE DE PESCADO",
        descripcion: "Pescado del día, acompañado de camote glaseado y choclo.",
        precio: "S/ 35.00",
        imagen: "/ceviche_pescado.png"
      },
      {
        nombre: "CEVICHE ALESUS",
        descripcion: "Preparado con pescado fresco, espinaca, cilantro, nuestra base especial, ají limo, choclo y camote glaseado.",
        precio: "S/ 38.00",
        imagen: "/ceviche_alesus.png"
      },
      {
        nombre: "CEVICHE DE CONCHAS NEGRAS",
        descripcion: "Exquisitas conchas negras, con nuestra preparación de base especial, acompañada de camote glaseado y choclo.",
        precio: "S/ 40.00",
        imagen: "/ceviche_conchas_negras.png"
      }
    ]
  },
  {
    id: "tiraditos",
    nombre: "Tiraditos",
    items: [
      {
        nombre: "Al natural",
        descripcion: "Láminas de pescado bañadas en suave crema de limón.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Al ají amarillo",
        descripcion: "Láminas de pescado bañadas en suave crema de ají amarillo.",
        precio: "S/ 38.00"
      },
      {
        nombre: "Al rocoto",
        descripcion: "Láminas de pescado bañadas en suave crema de rocoto.",
        precio: "S/ 38.00"
      },
      {
        nombre: "Bicolor",
        descripcion: "Láminas de pescado bañadas en crema de ají amarillo y rocoto.",
        precio: "S/ 38.00"
      },
      {
        nombre: "Tres sabores",
        descripcion: "Láminas de pescado bañadas en crema de ají amarillo, rocoto y crema de olivo.",
        precio: "S/ 40.00"
      }
    ]
  },

  {
    id: "chicharrones-y-jaleas",
    nombre: "Chicharrones y Jaleas",
    items: [
      {
        nombre: "Chicharrón de Pescado",
        descripcion: "Crujientes trozos de pescado, yucas fritas y salsa criolla.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Chicharrón de Calamar",
        descripcion: "Aros de calamar crujientes, yucas fritas y salsa criolla.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Chicharrón de Pulpo",
        descripcion: "Trozos de pulpo crujientes, yucas fritas y salsa criolla.",
        precio: "S/ 45.00"
      },
      {
        nombre: "Chicharrón Mixto",
        descripcion: "Crujientes trozos de pescado y mariscos, yucas fritas y salsa criolla.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Jalea Mixta",
        descripcion: "Pescado y mariscos crocantes, yucas fritas, chifles y salsa criolla.",
        precio: "S/ 45.00"
      },
      {
        nombre: "Jalea de Pescado",
        descripcion: "Pescado crocante, yucas fritas, chifles y salsa criolla.",
        precio: "S/ 40.00"
      }
    ]
  },

  {
    id: "trios-marinos",
    nombre: "Tríos Marinos",
    items: [
      {
        nombre: "TRÍO POTENTE",
        descripcion: "Leche de tigre + Arroz con mariscos + Chicharrón de pescado.",
        precio: "S/ 40.00",
        imagen: "/trio_potente.jpg"
      },
      {
        nombre: "TRÍO CLÁSICO",
        descripcion: "Ceviche + Arroz con mariscos + Chicharrón de pescado.",
        precio: "S/ 40.00",
        imagen: "/trio_clasico.png"
      },
      {
        nombre: "TRÍO CHAUFERO",
        descripcion: "Ceviche + Chaufa de mariscos + Chicharrón de pescado.",
        precio: "S/ 43.00",
        imagen: "/trio_chaufero.png"
      },
      {
        nombre: "Trío Marino",
        descripcion: "Ceviche de pescado + chicharrón de pescado + arroz con mariscos.",
        precio: "S/ 48.00"
      },
      {
        nombre: "Trío Alesus",
        descripcion: "Ceviche mixto + chicharrón de calamar + chaufa de mariscos.",
        precio: "S/ 50.00"
      },
      {
        nombre: "Trío Caliente",
        descripcion: "Arroz con mariscos, chicharrón mixto y picante de mariscos.",
        precio: "S/ 48.00"
      },
      {
        nombre: "Trío Huachano",
        descripcion: "Ceviche de pescado + arroz con pato + huancaína.",
        precio: "S/ 45.00"
      },
      {
        nombre: "Trío Norteño",
        descripcion: "Ceviche de pescado + seco de cabrito + frijoles.",
        precio: "S/ 45.00"
      }
    ]
  },
  {
    id: "combinados",
    nombre: "Combinados",
    items: [
      {
        nombre: "Combinado de Pescado",
        descripcion: "Ceviche de pescado + chicharrón de pescado.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Combinado Mixto",
        descripcion: "Ceviche mixto + chicharrón mixto.",
        precio: "S/ 38.00"
      },
      {
        nombre: "Combinado Especial",
        descripcion: "Ceviche de pescado + chicharrón de calamar.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Arroz con mariscos + ceviche",
        descripcion: "Dúo perfecto de arroz con mariscos y ceviche fresco.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Chaufa de pescado + ceviche",
        descripcion: "Fusión oriental de chaufa de pescado con ceviche fresco.",
        precio: "S/ 38.00"
      },
      {
        nombre: "Chaufa de mariscos + ceviche",
        descripcion: "Clásico chaufa de mariscos acompañado de ceviche.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Arroz con mariscos + chicharrón",
        descripcion: "Combinación caliente y crocante de arroz con mariscos y chicharrón.",
        precio: "S/ 40.00"
      },
      {
        nombre: "Chaufa de mariscos + chicharrón",
        descripcion: "Chaufa de mariscos acompañado de crocante chicharrón.",
        precio: "S/ 40.00"
      }
    ]
  },
  {
    id: "menu-de-ninos",
    nombre: "Menú de Niños",
    items: [
      {
        nombre: "Chicharrón de pescado",
        descripcion: "Acompañado de papas fritas.",
        precio: "S/ 20.00"
      },
      {
        nombre: "Chicharrón de pollo",
        descripcion: "Acompañado de papas fritas.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Milanesa de pollo",
        descripcion: "Acompañado de papas fritas.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Salchipapa",
        descripcion: "Clásica salchipapa para niños.",
        precio: "S/ 15.00"
      },
      {
        nombre: "Tallarines en salsa Alfredo",
        descripcion: "Pasta cremosa y suave, ideal para los pequeños.",
        precio: "S/ 20.00"
      }
    ]
  },
  {
    id: "tortillas",
    nombre: "Tortillas",
    items: [
      {
        nombre: "Tortilla de Mariscos",
        descripcion: "Jugosa tortilla de mariscos de temporada.",
        precio: "S/ 30.00"
      },
      {
        nombre: "Tortilla de Langostinos",
        descripcion: "Jugosa tortilla a base de langostinos frescos.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Tortilla de Verduras",
        descripcion: "Jugosa tortilla a base de verduras frescas.",
        precio: "S/ 20.00"
      }
    ]
  },
  {
    id: "sopas-criollas",
    nombre: "Sopas Criollas",
    items: [
      {
        nombre: "SUSTANCIA DE CARNE",
        descripcion: "Deliciosa sopa con papas nativas y concentrado de carne fina.",
        precio: "S/ 25.00",
        imagen: "/sustancia_carne.png"
      },
      {
        nombre: "SOPA DE DIETA",
        descripcion: "Deliciosos concentrado de carne picada o pollo, papas nativas y cabello de ángel.",
        precio: "S/ 20.00",
        imagen: "/sopa_dieta.png"
      }
    ]
  },
  {
    id: "sopas-marinas",
    nombre: "Sopas Marinas",
    items: [
      {
        nombre: "CHUPE DE CANGREJO",
        descripcion: "Preparado con cangrejos fresco, apio, poro, huacatay, cebolla, ajo, tomate y pasta de ají.",
        precio: "S/ 40.00",
        imagen: "/chupe_cangrejo.png"
      },
      {
        nombre: "PARIHUELA DE CABRILLA",
        descripcion: "Sopa preparada con una deliciosa Cabrilla fresca acompañado con yucas.",
        precio: "S/ 35.00",
        imagen: "/parihuela_cabrilla.png"
      },
      {
        nombre: "CHUPE DE LANGOSTINO",
        descripcion: "Sopa espesa y picante que lleva camarones, papa amarilla y aderezo especial de la casa.",
        precio: "S/ 40.00",
        imagen: "/chupe_langostino.png"
      }
    ]
  },
  {
    id: "platos-criollos",
    nombre: "Platos Criollos",
    items: [
      {
        nombre: "TRUCHA FRITA CON PAPA DORADA",
        descripcion: "Deliciosa truch frita con papas doradas, arroz y salsa criolla.",
        precio: "S/ 25.00",
        imagen: "/trucha_frita.png"
      },
      {
        nombre: "ARROZ CON PATO",
        descripcion: "Delicioso arroz en salsa de Pato, macerado con chicha de jora, zapallo loche y aderezo criollo.",
        precio: "S/ 35.00",
        imagen: "/arroz_pato.png"
      },
      {
        nombre: "CABRITO A LA NORTEÑA CON YUCAS Y FRIJOLES",
        descripcion: "Delicioso guiso concentrado de cabrito con yucas o fréjoles, acompañado con arroz y su ensalada criolla.",
        precio: "S/ 35.00",
        imagen: "/cabrito_nortena.png"
      }
    ]
  },
  {
    id: "especialidad-del-chef",
    nombre: "Especialidad del Chef",
    items: [
      {
        nombre: "TACU TACU A LO MACHO",
        descripcion: "Frejol y arroz salteado, bañado en salsa de mariscos al vino blanco y punto de ají amarillo.",
        precio: "S/ 40.00",
        imagen: "/tacu_tacu.png"
      }
    ]
  },
  {
    id: "pastas",
    nombre: "Pastas",
    items: [
      {
        nombre: "FETUCCINI A LA HUANCAINA CON LOMO SALTADO",
        descripcion: "Sabroso espagueti al dente servido con una salsa de crema de huancaína y adornado con un exquisito lomo saltado.",
        precio: "S/ 35.00",
        imagen: "/fetuccini_huancaina.png"
      },
      {
        nombre: "FETUCCINI EN SALSA DE MARISCOS",
        descripcion: "Espagueti al dente con salsa de huancaina cubierto con picante de mariscos.",
        precio: "S/ 38.00",
        imagen: "/fetuccini_mariscos.png"
      },
      {
        nombre: "TALLARINES VERDES CON PECHUGA A LA PLANCHA",
        descripcion: "Delicioso espagueti al dente servido con una salsa al puesto, acompañado con pechuga a la plancha bien sazonada.",
        precio: "S/ 35.00",
        imagen: "/tallarines_verdes.png"
      }
    ]
  },
  {
    id: "carnes",
    nombre: "Carnes",
    items: [
      {
        nombre: "LOMO SALTADO",
        descripcion: "Exquisitos trozos de lomo salteado, arroz y papas fritas nativas.",
        precio: "S/ 30.00",
        imagen: "/lomo_saltado.jpg"
      },
      {
        nombre: "BISTEC A LO POBRE",
        descripcion: "Delicioso bistec a lo pobre, papas fritas nativas, arroz, huevo frito y plátano frito. Acompañado con cremas a elegir.",
        precio: "S/ 35.00",
        imagen: "/bistec_pobre.png"
      },
      {
        nombre: "PECHUGA A LA PLANCHA CON PAPAS NATIVAS",
        descripcion: "Deliciosa pechuga a la plancha, papas fritas nativas and arroz. Acompañado con cremas a elegir.",
        precio: "S/ 28.00",
        imagen: "/pechuga_plancha.png"
      }
    ]
  },
  {
    id: "saltados",
    nombre: "Saltados",
    items: [
      {
        nombre: "TALLARÍN SALTADO DE CARNE",
        descripcion: "Delicioso espagueti al dente acompañado con salteado de carne.",
        precio: "S/ 28.00",
        imagen: "/tallarin_saltado_carne.png"
      },
      {
        nombre: "TALLARIN SALTADO DE POLLO",
        descripcion: "Delicioso espagueti al dente acompañado con salteado de pollo.",
        precio: "S/ 28.00",
        imagen: "/tallarin_saltado_pollo.jpg"
      }
    ]
  },
  {
    id: "guarniciones",
    nombre: "Guarniciones",
    items: [
      {
        nombre: "Porción de Arroz",
        descripcion: "Porción de arroz blanco.",
        precio: "S/ 5.00"
      },
      {
        nombre: "Porción de Yuca",
        descripcion: "Porción de yucas fritas o sancochadas.",
        precio: "S/ 6.00"
      },
      {
        nombre: "Porción de Camote",
        descripcion: "Porción de camote glaseado.",
        precio: "S/ 5.00"
      },
      {
        nombre: "Porción de Papas Fritas",
        descripcion: "Porción de papas fritas crocantes.",
        precio: "S/ 8.00"
      },
      {
        nombre: "Porción de Chifles",
        descripcion: "Porción de chifles norteños.",
        precio: "S/ 5.00"
      },
      {
        nombre: "Porción de Cancha",
        descripcion: "Canchita serrana tostada.",
        precio: "S/ 4.00"
      }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    items: [
      {
        nombre: "Inka Cola / Coca Cola / Sprite / Fanta 500ml",
        descripcion: "Gaseosa presentación de medio litro.",
        precio: "S/ 5.00"
      },
      {
        nombre: "Gaseosa Gordita",
        descripcion: "Gaseosa presentación gordita.",
        precio: "S/ 3.50"
      },
      {
        nombre: "Gaseosa Personal",
        descripcion: "Gaseosa presentación personal pequeña.",
        precio: "S/ 2.50"
      },
      {
        nombre: "Agua Mineral",
        descripcion: "Botella de agua mineral de mesa.",
        precio: "S/ 3.00"
      }
    ]
  },
  {
    id: "refrescos-naturales",
    nombre: "Refrescos Naturales",
    items: [
      {
        nombre: "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (Jarra)",
        descripcion: "Jarra entera de refresco natural.",
        precio: "S/ 15.00"
      },
      {
        nombre: "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (1/2 Jarra)",
        descripcion: "Media jarra de refresco natural.",
        precio: "S/ 8.00"
      },
      {
        nombre: "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (Vaso)",
        descripcion: "Vaso personal de refresco natural.",
        precio: "S/ 3.00"
      }
    ]
  },
  {
    id: "bebidas-calientes",
    nombre: "Bebidas Calientes",
    items: [
      {
        nombre: "Infusiones",
        descripcion: "Té, anís, manzanilla.",
        precio: "S/ 3.00"
      },
      {
        nombre: "Café Pasado",
        descripcion: "Taza de café pasado caliente.",
        precio: "S/ 5.00"
      }
    ]
  },
  {
    id: "cervezas",
    nombre: "Cervezas",
    items: [
      {
        nombre: "Pilsen",
        descripcion: "Cerveza tradicional helada.",
        precio: "S/ 8.00"
      },
      {
        nombre: "Cristal",
        descripcion: "Cerveza tradicional helada.",
        precio: "S/ 8.00"
      },
      {
        nombre: "Cusqueña",
        descripcion: "Cerveza premium peruana.",
        precio: "S/ 10.00"
      },
      {
        nombre: "Corona",
        descripcion: "Cerveza importada helada.",
        precio: "S/ 10.00"
      },
      {
        nombre: "Stella Artois",
        descripcion: "Cerveza premium importada.",
        precio: "S/ 10.00"
      },
      {
        nombre: "Heineken",
        descripcion: "Cerveza premium importada.",
        precio: "S/ 10.00"
      }
    ]
  },
  {
    id: "vinos",
    nombre: "Vinos",
    items: [
      {
        nombre: "Santiago Queirolo",
        descripcion: "Botella de vino Santiago Queirolo.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Tabernero",
        descripcion: "Botella de vino Tabernero.",
        precio: "S/ 35.00"
      },
      {
        nombre: "Tacama",
        descripcion: "Botella de vino Tacama.",
        precio: "S/ 45.00"
      },
      {
        nombre: "Casillero del Diablo",
        descripcion: "Botella de vino Casillero del Diablo.",
        precio: "S/ 60.00"
      },
      {
        nombre: "Navarro Correas",
        descripcion: "Botella de vino Navarro Correas.",
        precio: "S/ 50.00"
      }
    ]
  },
  {
    id: "tragos",
    nombre: "Tragos",
    items: [
      {
        nombre: "Pisco Sour",
        descripcion: "Cóctel tradicional a base de pisco.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Maracuyá Sour",
        descripcion: "Exquisita variante de sour con maracuyá.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Chilcano Clásico",
        descripcion: "Refrescante trago de pisco y ginger ale.",
        precio: "S/ 15.00"
      },
      {
        nombre: "Chilcano de Maracuyá",
        descripcion: "Chilcano frutal y tropical con maracuyá.",
        precio: "S/ 15.00"
      },
      {
        nombre: "Algarrobina",
        descripcion: "Cóctel dulce y cremoso a base de algarrobina.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Piña Colada",
        descripcion: "Clásico cóctel tropical de crema de coco y piña.",
        precio: "S/ 18.00"
      },
      {
        nombre: "Machu Picchu",
        descripcion: "Cóctel colorido representativo peruano.",
        precio: "S/ 20.00"
      },
      {
        nombre: "Cuba Libre",
        descripcion: "Clásica combinación de ron y bebida de cola.",
        precio: "S/ 15.00"
      },
      {
        nombre: "Mojito",
        descripcion: "Cóctel muy refrescante a base de ron, limón y hierbabuena.",
        precio: "S/ 18.00"
      }
    ]
  }
];
