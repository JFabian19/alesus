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
    id: "trios",
    nombre: "Tríos",
    items: [
      {
        nombre: "Trío Marino",
        descripcion: "Ceviche de pescado + chicharrón de pescado + arroz con mariscos.",
        precio: "S/ 48.00",
        imagen: ""
      },
      {
        nombre: "Trío Alesus",
        descripcion: "Ceviche mixto + chicharrón de calamar + chaufa de mariscos.",
        precio: "S/ 50.00",
        imagen: ""
      },
      {
        nombre: "Trío Caliente",
        descripcion: "Arroz con mariscos, chicharrón mixto y picante de mariscos.",
        precio: "S/ 48.00",
        imagen: ""
      },
      {
        nombre: "Trío Huachano",
        descripcion: "Ceviche de pescado + arroz con pato + huancaína.",
        precio: "S/ 45.00",
        imagen: ""
      },
      {
        nombre: "Trío Norteño",
        descripcion: "Ceviche de pescado + seco de cabrito + frijoles.",
        precio: "S/ 45.00",
        imagen: ""
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
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Al ají amarillo",
        descripcion: "Láminas de pescado bañadas en suave crema de ají amarillo.",
        precio: "S/ 38.00",
        imagen: ""
      },
      {
        nombre: "Al rocoto",
        descripcion: "Láminas de pescado bañadas en suave crema de rocoto.",
        precio: "S/ 38.00",
        imagen: ""
      },
      {
        nombre: "Bicolor",
        descripcion: "Láminas de pescado bañadas en crema de ají amarillo y rocoto.",
        precio: "S/ 38.00",
        imagen: ""
      },
      {
        nombre: "Tres sabores",
        descripcion: "Láminas de pescado bañadas en crema de ají amarillo, rocoto y crema de olivo.",
        precio: "S/ 40.00",
        imagen: ""
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
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Combinado Mixto",
        descripcion: "Ceviche mixto + chicharrón mixto.",
        precio: "S/ 38.00",
        imagen: ""
      },
      {
        nombre: "Combinado Especial",
        descripcion: "Ceviche de pescado + chicharrón de calamar.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Arroz con mariscos + ceviche",
        descripcion: "Dúo perfecto de arroz con mariscos y ceviche fresco.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de pescado + ceviche",
        descripcion: "Fusión oriental de chaufa de pescado con ceviche fresco.",
        precio: "S/ 38.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de mariscos + ceviche",
        descripcion: "Clásico chaufa de mariscos acompañado de ceviche.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Arroz con mariscos + chicharrón",
        descripcion: "Combinación caliente y crocante de arroz con mariscos y chicharrón.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de mariscos + chicharrón",
        descripcion: "Chaufa de mariscos acompañado de crocante chicharrón.",
        precio: "S/ 40.00",
        imagen: ""
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
        precio: "S/ 20.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón de pollo",
        descripcion: "Acompañado de papas fritas.",
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Milanesa de pollo",
        descripcion: "Acompañado de papas fritas.",
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Salchipapa",
        descripcion: "Clásica salchipapa para niños.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Tallarines en salsa Alfredo",
        descripcion: "Pasta cremosa y suave, ideal para los pequeños.",
        precio: "S/ 20.00",
        imagen: ""
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
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón de Calamar",
        descripcion: "Aros de calamar crujientes, yucas fritas y salsa criolla.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón de Pulpo",
        descripcion: "Trozos de pulpo crujientes, yucas fritas y salsa criolla.",
        precio: "S/ 45.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón Mixto",
        descripcion: "Crujientes trozos de pescado y mariscos, yucas fritas y salsa criolla.",
        precio: "S/ 40.00",
        imagen: ""
      },
      {
        nombre: "Jalea Mixta",
        descripcion: "Pescado y mariscos crocantes, yucas fritas, chifles y salsa criolla.",
        precio: "S/ 45.00",
        imagen: ""
      },
      {
        nombre: "Jalea de Pescado",
        descripcion: "Pescado crocante, yucas fritas, chifles y salsa criolla.",
        precio: "S/ 40.00",
        imagen: ""
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
        precio: "S/ 30.00",
        imagen: ""
      },
      {
        nombre: "Tortilla de Langostinos",
        descripcion: "Jugosa tortilla a base de langostinos frescos.",
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Tortilla de Verduras",
        descripcion: "Jugosa tortilla a base de verduras frescas.",
        precio: "S/ 20.00",
        imagen: ""
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
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Porción de Yuca",
        descripcion: "Porción de yucas fritas o sancochadas.",
        precio: "S/ 6.00",
        imagen: ""
      },
      {
        nombre: "Porción de Camote",
        descripcion: "Porción de camote glaseado.",
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Porción de Papas Fritas",
        descripcion: "Porción de papas fritas crocantes.",
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Porción de Chifles",
        descripcion: "Porción de chifles norteños.",
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Porción de Cancha",
        descripcion: "Canchita serrana tostada.",
        precio: "S/ 4.00",
        imagen: ""
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
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Gaseosa Gordita",
        descripcion: "Gaseosa presentación gordita.",
        precio: "S/ 3.50",
        imagen: ""
      },
      {
        nombre: "Gaseosa Personal",
        descripcion: "Gaseosa presentación personal pequeña.",
        precio: "S/ 2.50",
        imagen: ""
      },
      {
        nombre: "Agua Mineral",
        descripcion: "Botella de agua mineral de mesa.",
        precio: "S/ 3.00",
        imagen: ""
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
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (1/2 Jarra)",
        descripcion: "Media jarra de refresco natural.",
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (Vaso)",
        descripcion: "Vaso personal de refresco natural.",
        precio: "S/ 3.00",
        imagen: ""
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
        precio: "S/ 3.00",
        imagen: ""
      },
      {
        nombre: "Café Pasado",
        descripcion: "Taza de café pasado caliente.",
        precio: "S/ 5.00",
        imagen: ""
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
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Cristal",
        descripcion: "Cerveza tradicional helada.",
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Cusqueña",
        descripcion: "Cerveza premium peruana.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Corona",
        descripcion: "Cerveza importada helada.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Stella Artois",
        descripcion: "Cerveza premium importada.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Heineken",
        descripcion: "Cerveza premium importada.",
        precio: "S/ 10.00",
        imagen: ""
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
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Tabernero",
        descripcion: "Botella de vino Tabernero.",
        precio: "S/ 35.00",
        imagen: ""
      },
      {
        nombre: "Tacama",
        descripcion: "Botella de vino Tacama.",
        precio: "S/ 45.00",
        imagen: ""
      },
      {
        nombre: "Casillero del Diablo",
        descripcion: "Botella de vino Casillero del Diablo.",
        precio: "S/ 60.00",
        imagen: ""
      },
      {
        nombre: "Navarro Correas",
        descripcion: "Botella de vino Navarro Correas.",
        precio: "S/ 50.00",
        imagen: ""
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
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Maracuyá Sour",
        descripcion: "Exquisita variante de sour con maracuyá.",
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Chilcano Clásico",
        descripcion: "Refrescante trago de pisco y ginger ale.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Chilcano de Maracuyá",
        descripcion: "Chilcano frutal y tropical con maracuyá.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Algarrobina",
        descripcion: "Cóctel dulce y cremoso a base de algarrobina.",
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Piña Colada",
        descripcion: "Clásico cóctel tropical de crema de coco y piña.",
        precio: "S/ 18.00",
        imagen: ""
      },
      {
        nombre: "Machu Picchu",
        descripcion: "Cóctel colorido representativo peruano.",
        precio: "S/ 20.00",
        imagen: ""
      },
      {
        nombre: "Cuba Libre",
        descripcion: "Clásica combinación de ron y bebida de cola.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Mojito",
        descripcion: "Cóctel muy refrescante a base de ron, limón y hierbabuena.",
        precio: "S/ 18.00",
        imagen: ""
      }
    ]
  }
];
