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
    id: "calientitos",
    nombre: "Calientitos",
    items: [
      {
        nombre: "JALEA MIXTA",
        descripcion: "Combinación de pescado, mariscos fritos y crocantes acompañados de salsa criolla, choclo y yuca frita.",
        precio: "S/ 40.00",
        imagen: "/jalea_mixta.jpg"
      },
      {
        nombre: "CHICHARRON DE PESCADO",
        descripcion: "Deliciosos cortes de pescados capeados con una mezcla de harina y huevo preparador a fritura profunda.",
        precio: "S/ 35.00",
        imagen: "/chicharron_pescado.jpg"
      }
    ]
  },
  {
    id: "duos-marinos",
    nombre: "Dúos Marinos",
    items: [
      {
        nombre: "DÚO ORIENTAL",
        descripcion: "Ceviche de pescado + Chaufa de mariscos.",
        precio: "S/ 35.00",
        imagen: "/duo_oriental.png"
      },
      {
        nombre: "DÚO CAUSERO",
        descripcion: "Causa de atún + Ceviche de pescado.",
        precio: "S/ 33.00",
        imagen: "/duo_casero.png"
      },
      {
        nombre: "DÚO CLÁSICO",
        descripcion: "Ceviche de pescado + Arroz con mariscos.",
        precio: "S/ 33.00",
        imagen: "/duo_clasico.png"
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
        descripcion: "Deliciosa pechuga a la plancha, papas fritas nativas y arroz. Acompañado con cremas a elegir.",
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
  }
];
