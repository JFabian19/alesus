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
    id: "sandwich",
    nombre: "Sandwich",
    items: [
      {
        nombre: "Pollo",
        descripcion: "Sandwich clásico de pollo deshilachado.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Queso",
        descripcion: "Sandwich con tajadas de queso fresco.",
        precio: "S/. 3.50",
        imagen: ""
      },
      {
        nombre: "Jamonada",
        descripcion: "Sandwich clásico con jamonada.",
        precio: "S/. 3.50",
        imagen: ""
      },
      {
        nombre: "Hot Dog",
        descripcion: "Sandwich con hot dog en rodajas.",
        precio: "S/. 3.50",
        imagen: ""
      },
      {
        nombre: "Huevo",
        descripcion: "Sandwich con huevo frito.",
        precio: "S/. 3.50",
        imagen: ""
      },
      {
        nombre: "Palta",
        descripcion: "Sandwich fresco con palta en rodajas.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Chorizo",
        descripcion: "Sandwich contundente con chorizo frito.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Cecina",
        descripcion: "Sandwich con auténtica cecina regional.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón",
        descripcion: "Sandwich tradicional con chicharrón de cerdo.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Mixto",
        descripcion: "Sandwich clásico mixto caliente de jamonada y queso.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Triple",
        descripcion: "Sandwich triple tradicional en pan de molde.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Chorizo Revuelto",
        descripcion: "Sandwich de chorizo frito revuelto con huevo.",
        precio: "S/. 7.00",
        imagen: ""
      }
    ]
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    items: [
      {
        nombre: "Simple",
        descripcion: "Hamburguesa clásica de carne con pan, lechuga y tomate.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Royal",
        descripcion: "Hamburguesa con huevo frito.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Cheese",
        descripcion: "Hamburguesa con deliciosa capa de queso derretido.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Cheese Royal",
        descripcion: "Hamburguesa con queso derretido y huevo frito.",
        precio: "S/. 7.00",
        imagen: ""
      }
    ]
  },
  {
    id: "jugos",
    nombre: "Jugos",
    items: [
      {
        nombre: "Surtido",
        descripcion: "Jugo surtido clásico de la casa.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Papaya",
        descripcion: "Jugo natural de papaya fresca.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Piña",
        descripcion: "Jugo natural y refrescante de piña.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Maracuyá",
        descripcion: "Jugo natural de maracuyá.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Naranja",
        descripcion: "Jugo natural de naranja recién exprimida.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Fresa",
        descripcion: "Jugo natural de fresas frescas.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Taperibá",
        descripcion: "Jugo exótico regional de taperibá.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Camu Camu",
        descripcion: "Jugo regional rico en vitamina C a base de camu camu.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Uva",
        descripcion: "Jugo natural dulce de uva.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Guanábana",
        descripcion: "Jugo cremoso y natural de guanábana.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Melón",
        descripcion: "Jugo natural y refrescante de melón.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Cocona",
        descripcion: "Jugo regional cítrico y refrescante de cocona.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Mango",
        descripcion: "Jugo natural de pulpa de mango.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Aguaje",
        descripcion: "Jugo exótico amazónico de aguaje.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Arándano",
        descripcion: "Jugo natural antioxidante de arándanos.",
        precio: "S/. 7.00",
        imagen: ""
      }
    ]
  },
  {
    id: "milkshakes-batidos",
    nombre: "Milkshakes - Batidos",
    items: [
      {
        nombre: "Fresa con Leche",
        descripcion: "Batido cremoso de fresa y leche.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Lúcuma con Leche",
        descripcion: "Batido espeso y dulce de lúcuma con leche.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Arándano con Leche",
        descripcion: "Batido cremoso de arándanos con leche.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Plátano con Leche",
        descripcion: "Batido clásico y nutritivo de plátano con leche.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Piña con Leche",
        descripcion: "Batido refrescante de piña con leche.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Uva con Leche",
        descripcion: "Batido especial de uva dulce con leche.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Guanábana con Leche",
        descripcion: "Batido muy cremoso de pulpa de guanábana y leche.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Mango con Leche",
        descripcion: "Batido dulce y tropical de mango con leche.",
        precio: "S/. 9.00",
        imagen: ""
      }
    ]
  },
  {
    id: "antojitos",
    nombre: "Antojitos",
    items: [
      {
        nombre: "Tamales, Humitas, Cutacho",
        descripcion: "Porción de opciones tradicionales a elección.",
        precio: "S/. 3.00",
        imagen: ""
      },
      {
        nombre: "Empanadas",
        descripcion: "Empanadas horneadas rellenas.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Papa Rellena",
        descripcion: "Clásica papa rellena doradita.",
        precio: "S/. 3.00",
        imagen: ""
      },
      {
        nombre: "Papa a la Huancaína",
        descripcion: "Papas bañadas en tradicional salsa de ají amarillo y queso.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Causa Rellena",
        descripcion: "Causa de papa amarilla rellena, suave y fresca.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Ocopa",
        descripcion: "Papas bañadas en salsa tradicional de huacatay y maní.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Juanes",
        descripcion: "Platillo insignia de la selva a base de arroz y gallina envuelto en hoja de bijao.",
        precio: "S/. 3.00",
        imagen: ""
      },
      {
        nombre: "Pizza",
        descripcion: "Porción de pizza.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Maduro con Huevo",
        descripcion: "Plátano maduro frito acompañado de huevo.",
        precio: "S/. 5.00",
        imagen: ""
      }
    ]
  },
  {
    id: "bebidas-calientes",
    nombre: "Bebidas Calientes",
    items: [
      {
        nombre: "Café",
        descripcion: "Taza de café pasado caliente.",
        precio: "S/. 3.00",
        imagen: ""
      },
      {
        nombre: "Leche",
        descripcion: "Taza de leche caliente.",
        precio: "S/. 3.50",
        imagen: ""
      },
      {
        nombre: "Café con Leche",
        descripcion: "Café pasado con leche caliente.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Milo con Leche",
        descripcion: "Bebida achocolatada caliente con leche.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Avena con Quinua",
        descripcion: "Bebida andina caliente y muy nutritiva.",
        precio: "S/. 3.00",
        imagen: ""
      },
      {
        nombre: "Infusiones",
        descripcion: "Té, anís o manzanilla caliente.",
        precio: "S/. 3.00",
        imagen: ""
      }
    ]
  },
  {
    id: "caldos",
    nombre: "Caldos",
    items: [
      {
        nombre: "Gallina",
        descripcion: "Sustancioso caldo de gallina regional con fideos y huevo.",
        precio: "S/. 16.00",
        imagen: ""
      },
      {
        nombre: "Pata",
        descripcion: "Caldo concentrado tradicional de pata.",
        precio: "S/. 16.00",
        imagen: ""
      },
      {
        nombre: "Inchicapi de Gallina",
        descripcion: "Sopa amazónica espesa a base de maní y gallina regional.",
        precio: "S/. 16.00",
        imagen: ""
      }
    ]
  },
  {
    id: "jugos-super-especiales",
    nombre: "Jugos Super Especiales (3 Frutas Diferentes)",
    items: [
      {
        nombre: "Plenitud Total",
        descripcion: "Combinación de Papaya, Uva y Naranja.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Manzanito Coqueto",
        descripcion: "Combinación de Plátano Manzano, Maracuyá y Piña.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Brillo Solar",
        descripcion: "Combinación tropical de Mango, Papaya y Naranja.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Carmín Tentador",
        descripcion: "Combinación de Fresa, Maracuyá y Papaya.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Corazón Sano",
        descripcion: "Combinación refrescante de Guanábana, Melón y Limón.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Copito de Nieve",
        descripcion: "Combinación de Guanábana, Melón y Piña.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Palmera Tropical",
        descripcion: "Combinación de Melón, Uva y Piña.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Jugo Tentación",
        descripcion: "Exótica combinación de Mango, Piña y Taperibá.",
        precio: "S/. 9.00",
        imagen: ""
      }
    ]
  },
  {
    id: "extractos",
    nombre: "Extractos",
    items: [
      {
        nombre: "Verde",
        descripcion: "Extracto verde detox purificante.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Zanahoria",
        descripcion: "Extracto puro de zanahoria fresca.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Beterraga",
        descripcion: "Extracto energizante de beterraga.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Mixto",
        descripcion: "Combinación de vegetales a elección.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Ensalada de Frutas",
        descripcion: "Plato completo de frutas frescas de estación picadas.",
        precio: "S/. 9.00",
        imagen: ""
      }
    ]
  },
  {
    id: "platos",
    nombre: "Platos",
    items: [
      {
        nombre: "Chaufa Simple",
        descripcion: "Arroz chaufa base salteado al wok.",
        precio: "S/. 5.00",
        imagen: ""
      },
      {
        nombre: "Chaufa con Huevo",
        descripcion: "Arroz chaufa clásico con trozos de tortilla de huevo.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Chaufa con Pollo",
        descripcion: "Arroz chaufa con trozos de pollo salteados al wok.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Chaufa con Cecina",
        descripcion: "Arroz chaufa regional con sabrosa cecina amazónica.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Chaufa con Chorizo",
        descripcion: "Arroz chaufa con chorizo frito.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Chaufa Regional Mixto",
        descripcion: "Arroz chaufa contundente con mezcla de carnes regionales.",
        precio: "S/. 13.00",
        imagen: ""
      },
      {
        nombre: "Arroz a la Cubana",
        descripcion: "Arroz blanco servido con huevo montado y plátano frito.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Chicharrón",
        descripcion: "Plato contundente de chicharrón de cerdo.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Tilapia Frita",
        descripcion: "Pescado tilapia entera frita crocante.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Pechuga de Pollo",
        descripcion: "Filete de pechuga de pollo cocida a la plancha.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Milanesa",
        descripcion: "Filete de carne o pollo empanizado y frito.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Lomo Saltado",
        descripcion: "Trozos de carne salteados con cebolla, tomate y papas fritas.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Tortilla de Verduras",
        descripcion: "Plato ligero de huevos batidos y verduras frescas.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Saltado de Pollo",
        descripcion: "Trozos de pollo salteados al estilo criollo con papas fritas.",
        precio: "S/. 9.00",
        imagen: ""
      }
    ]
  },
  {
    id: "menu-11-00",
    nombre: "Menú (S/ 11.00)",
    items: [
      {
        nombre: "Chicharrón",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Chuleta",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Milanesa",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Filete de Pechuga",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Chaufa Regional",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Cecina - Chorizo",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Tilapia Frita",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Jurel Frito",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Tortilla de Verduras",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Arroz a la Cubana",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Saltadito de Pollo",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Lomo Saltado",
        descripcion: "Opción de Menú.",
        precio: "S/. 11.00",
        imagen: ""
      }
    ]
  },
  {
    id: "jugos-especiales",
    nombre: "Jugos Especiales",
    items: [
      {
        nombre: "Surtido Huevo",
        descripcion: "Jugo surtido licuado con huevo.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Surtido Leche",
        descripcion: "Jugo surtido licuado con leche.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Surtido / Huevo / Leche",
        descripcion: "Jugo surtido súper nutritivo con huevo y leche.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Naranja / Huevo",
        descripcion: "Jugo de naranja licuado con huevo.",
        precio: "S/. 7.00",
        imagen: ""
      },
      {
        nombre: "Naranja / Huevo / Malta",
        descripcion: "Combinación energizante de naranja, huevo y malta.",
        precio: "S/. 9.00",
        imagen: ""
      },
      {
        nombre: "Papaya / Leche",
        descripcion: "Jugo de papaya batido con leche.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Papaya / Piña",
        descripcion: "Jugo refrescante de papaya y piña.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Papaya / Melón",
        descripcion: "Jugo natural combinado de papaya y melón.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Papaya / Piña / Naranja",
        descripcion: "Trío frutal refrescante a base de papaya, piña y naranja.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Papaya / Naranja",
        descripcion: "Jugo clásico combinado de papaya y naranja.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Naranja / Piña",
        descripcion: "Mix cítrico refrescante de naranja y piña.",
        precio: "S/. 8.00",
        imagen: ""
      },
      {
        nombre: "Super Power",
        descripcion: "Jugo especial energizante de la casa.",
        precio: "S/. 11.00",
        imagen: ""
      },
      {
        nombre: "Maltina",
        descripcion: "Bebida energética tradicional a base de malta.",
        precio: "S/. 11.00",
        imagen: ""
      }
    ]
  },
  {
    id: "ponches",
    nombre: "Ponches",
    items: [
      {
        nombre: "Solo",
        descripcion: "Ponche tradicional caliente.",
        precio: "S/. 4.00",
        imagen: ""
      },
      {
        nombre: "Con Café",
        descripcion: "Ponche tradicional batido con esencia de café.",
        precio: "S/. 5.00",
        imagen: ""
      },
      {
        nombre: "Con Malta",
        descripcion: "Ponche tradicional batido con bebida de malta.",
        precio: "S/. 6.00",
        imagen: ""
      },
      {
        nombre: "Con Naranja",
        descripcion: "Ponche con toques cítricos de naranja.",
        precio: "S/. 6.00",
        imagen: ""
      }
    ]
  },
  {
    id: "refrescos",
    nombre: "Refrescos",
    items: [
      {
        nombre: "Chicha Morada o Cebada",
        descripcion: "Jarra de refresco tradicional frío.",
        precio: "S/. 4.00",
        imagen: ""
      }
    ]
  }
];
