import React, { useState, useMemo, useEffect } from 'react';
import { ShoppingBag, Plus, Minus, ChevronRight, X, Trash2, Utensils, Facebook, MapPin, Loader2, Gift, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchSheetData, submitSheetData, SheetDish, SheetCategory, SHEET_ID } from './services/googleSheets';
import { DEFAULT_MENU_DATA } from './data/menuData';

// ==========================================
// 📋 CONFIGURACIÓN DE LA PLANTILLA DEL MENÚ
// ==========================================
const RESTAURANTE_NAME = "Alesus Rest - Cevicheria";
const RESTAURANTE_SLOGAN = "Comida criolla y marina con un toque gourmet y mucho corazón";
const WHATSAPP_NUMBER = "51944482063"; // Reemplaza con tu número de WhatsApp con código de país (ej: 51 para Perú)
const FACEBOOK_URL = "";
const MAPS_URL = "https://www.google.com/maps/place/ALESUS/@-11.9890532,-77.0139224,14.07z/data=!4m6!3m5!1s0x9105c50046b458bb:0x9667530c92b272cc!8m2!3d-11.9984878!4d-77.0089329!16s%2Fg%2F11y4_lmyty!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D";
const LOGO_FOOTER_PATH = ""; // Reemplaza con la ruta de tu logo en public/ (ej: /logo.png)
const BANNER_PATH = ""; // Reemplaza con la ruta de tu banner en public/ (ej: /banner.png)
const MARQUEE_TEXT = "🌊 LA FRESCURA DEL MAR EN CADA PLATO • 🇵🇪 TRADICIÓN CRIOLLA Y TOQUE GOURMET • ¡VIVE LA EXPERIENCIA ALESUS! 🍤🍷 • ";
// ==========================================

// Mapa de imágenes locales por defecto para platos conocidos
const LOCAL_IMAGES: Record<string, string> = {
  "CAUSA DE PULPO AL OLIVO": "/causa_pulpo_olivo.png",
  "CAUSA DE LANGOSTINOS": "/causa_langostinos.png",
  "CAUSA ACEVICHADA": "/causa_acevichada.png",
  "CEVICHE DE PESCADO": "/ceviche_pescado.png",
  "CEVICHE ALESUS": "/ceviche_alesus.png",
  "CEVICHE DE CONCHAS NEGRAS": "/ceviche_conchas_negras.png",
  "Al natural": "/al_natural.png",
  "Al ají amarillo": "/al_aji_amarillo.png",
  "Al rocoto": "/al_rocoto.png",
  "Bicolor": "/bicolor.png",
  "Tres sabores": "/tres_sabores.png",
  "JALEA MIXTA": "/jalea_mixta.jpg",
  "Jalea Mixta": "/jalea_mixta.jpg",
  "CHICHARRON DE PESCADO": "/chicharron_pescado.jpg",
  "Chicharrón de Pescado": "/chicharron_pescado.jpg",
  "Chicharrón de Calamar": "/chicharron_calamar.png",
  "Chicharrón de Calamar (Porción)": "/chicharron_calamar.png",
  "Chicharrón de Pulpo": "/chicharron_pulpo.png",
  "Chicharrón de Pulpo (Porción)": "/chicharron_pulpo.png",
  "DÚO ORIENTAL": "/duo_oriental.png",
  "DÚO CAUSERO": "/duo_casero.png",
  "DÚO CLÁSICO": "/duo_clasico.png",
  "TRÍO POTENTE": "/trio_potente.jpg",
  "TRÍO CLÁSICO": "/trio_clasico.png",
  "TRÍO CHAUFERO": "/trio_chaufero.png",
  "Trío Marino": "/trio_marino.jpg",
  "Trío Alesus": "/trio_alesus.jpg",
  "Trío Caliente": "/trio_caliente.png",
  "Trío Huachano": "/trio_huachano.png",
  "Trío Norteño": "/trio_norteno.png",
  "Chicharrón Mixto": "/chicharron_mixto.png",
  "Chicharrón Mixto (Porción)": "/chicharron_mixto.png",
  "Combinado de Pescado": "/combinado_pescado.png",
  "Combinado Mixto": "/combinado_mixto.png",
  "Combinado Especial": "/combinado_especial.png",
  "Jalea de Pescado": "/jalea_pescado.png",
  "Jalea de Pescado (Porción)": "/jalea_pescado.png",
  "Arroz con mariscos + ceviche": "/arroz_mariscos_ceviche.png",
  "Chaufa de pescado + ceviche": "/chaufa_pescado_ceviche.png",
  "Chaufa de mariscos + ceviche": "/chaufa_mariscos_ceviche.png",
  "Arroz con mariscos + chicharrón": "/arroz_mariscos_chicharron.png",
  "Chaufa de mariscos + chicharrón": "/chaufa_mariscos_chicharron.png",
  "Chicharrón de pescado (Niños)": "/chicharron_pescado_ninos.png",
  "Chicharrón de pollo (Niños)": "/chicharron_pollo.png",
  "Milanesa de pollo (Niños)": "/milanesa_pollo.png",
  "Salchipapa (Niños)": "/salchipapa.png",
  "Tallarines en salsa alfredo (Niños)": "/tallarines_alfredo.png",
  "Chicharrón de pescado": "/chicharron_pescado_ninos.png",
  "chicharrón de pescado": "/chicharron_pescado_ninos.png",
  "Chicharrón de pollo": "/chicharron_pollo.png",
  "chicharrón de pollo": "/chicharron_pollo.png",
  "Milanesa de pollo": "/milanesa_pollo.png",
  "milanesa de pollo": "/milanesa_pollo.png",
  "Salchipapa": "/salchipapa.png",
  "salchipapa": "/salchipapa.png",
  "Tallarines en salsa alfredo": "/tallarines_alfredo.png",
  "tallarines en salsa alfredo": "/tallarines_alfredo.png",
  "Tallarines en salsa Alfredo": "/tallarines_alfredo.png",
  "Santiago Queirolo": "/santiago_queirolo.png",
  "santiago queirolo": "/santiago_queirolo.png",
  "Tabernero": "/tabernero.png",
  "tabernero": "/tabernero.png",
  "Tacama": "/tacama.png",
  "tacama": "/tacama.png",
  "Casillero del Diablo": "/casillero_del_diablo.png",
  "casillero del diablo": "/casillero_del_diablo.png",
  "Navarro Correas": "/navarro_correas.png",
  "navarro correas": "/navarro_correas.png",
  "Pilsen": "/pilsen.png",
  "pilsen": "/pilsen.png",
  "Cristal": "/cristal.png",
  "cristal": "/cristal.png",
  "Cusqueña": "/cusquena.png",
  "cusqueña": "/cusquena.png",
  "Corona": "/corona.png",
  "corona": "/corona.png",
  "Stella Artois": "/stella_artois.png",
  "stella artois": "/stella_artois.png",
  "Heineken": "/heineken.png",
  "heineken": "/heineken.png",
  "Café Pasado": "/cafe_pasado.png",
  "café pasado": "/cafe_pasado.png",
  "Infusiones": "/infusiones.png",
  "infusiones": "/infusiones.png",
  "Tortilla de Mariscos": "/tortilla_mariscos.png",
  "tortilla de mariscos": "/tortilla_mariscos.png",
  "Tortilla de Langostinos": "/tortilla_langostinos.png",
  "tortilla de langostinos": "/tortilla_langostinos.png",
  "Tortilla de Verduras": "/tortilla_verduras.png",
  "tortilla de verduras": "/tortilla_verduras.png",
  "Porción de Arroz": "/porcion_arroz.png",
  "porción de arroz": "/porcion_arroz.png",
  "porcion de arroz": "/porcion_arroz.png",
  "Porción de Yuca": "/porcion_yuca.png",
  "porción de yuca": "/porcion_yuca.png",
  "porcion de yuca": "/porcion_yuca.png",
  "Porción de Camote": "/porcion_camote.png",
  "porción de camote": "/porcion_camote.png",
  "porcion de camote": "/porcion_camote.png",
  "Porción de Papas Fritas": "/porcion_papas.png",
  "porción de papas fritas": "/porcion_papas.png",
  "porcion de papas fritas": "/porcion_papas.png",
  "Porción de Chifles": "/porcion_chifles.png",
  "porción de chifles": "/porcion_chifles.png",
  "porcion de chifles": "/porcion_chifles.png",
  "Porción de Cancha": "/porcion_cancha.png",
  "porción de cancha": "/porcion_cancha.png",
  "porcion de cancha": "/porcion_cancha.png",
  "Gaseosa Gordita": "/gaseosa_gordita.png",
  "gaseosa gordita": "/gaseosa_gordita.png",
  "Inka Cola / Coca Cola / Sprite / Fanta 500ml": "/gaseosa_500ml.png",
  "inka cola / coca cola / sprite / fanta 500ml": "/gaseosa_500ml.png",
  "Gaseosa Personal": "/gaseosa_personal.png",
  "gaseosa personal": "/gaseosa_personal.png",
  "Agua Mineral": "/agua_mineral.png",
  "agua mineral": "/agua_mineral.png",
  "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (1/2 Jarra)": "/refrescos_media_jarra.png",
  "limonada / chicha morada / maracuyá / chicha de jora (1/2 jarra)": "/refrescos_media_jarra.png",
  "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (Jarra)": "/refrescos_jarra.png",
  "limonada / chicha morada / maracuyá / chicha de jora (jarra)": "/refrescos_jarra.png",
  "Limonada / Chicha Morada / Maracuyá / Chicha de Jora (Vaso)": "/refrescos_vaso.png",
  "limonada / chicha morada / maracuyá / chicha de jora (vaso)": "/refrescos_vaso.png",
  "SUSTANCIA DE CARNE": "/sustancia_carne.png",
  "SOPA DE DIETA": "/sopa_dieta.png",
  "CHUPE DE CANGREJO": "/chupe_cangrejo.png",
  "PARIHUELA DE CABRILLA": "/parihuela_cabrilla.png",
  "CHUPE DE LANGOSTINO": "/chupe_langostino.png",
  "TRUCHA FRITA CON PAPA DORADA": "/trucha_frita.png",
  "ARROZ CON PATO": "/arroz_pato.png",
  "CABRITO A LA NORTEÑA CON YUCAS Y FRIJOLES": "/cabrito_nortena.png",
  "TACU TACU A LO MACHO": "/tacu_tacu.png",
  "FETUCCINI A LA HUANCAINA CON LOMO SALTADO": "/fetuccini_huancaina.png",
  "FETUCCINI EN SALSA DE MARISCOS": "/fetuccini_mariscos.png",
  "TALLARINES VERDES CON PECHUGA A LA PLANCHA": "/tallarines_verdes.png",
  "LOMO SALTADO": "/lomo_saltado.jpg",
  "BISTEC A LO POBRE": "/bistec_pobre.png",
  "PECHUGA A LA PLANCHA CON PAPAS NATIVAS": "/pechuga_plancha.png",
  "TALLARÍN SALTADO DE CARNE": "/tallarin_saltado_carne.png",
  "TALLARIN SALTADO DE POLLO": "/tallarin_saltado_pollo.jpg",
  "Chilcano Clásico": "/chilcano_clasico.png",
  "Chilcano de Maracuyá": "/chilcano_maracuya.png",
  "Pisco Sour": "/pisco_sour.png",
  "Maracuyá Sour": "/maracuya_sour.png",
  "Algarrobina": "/algarrobina.png",
  "Piña Colada": "/pina_colada.png",
  "Machu Picchu": "/machu_picchu.png",
  "Cuba Libre": "/cuba_libre.png",
  "Mojito": "/mojito.png"
};

interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

interface CartItem {
  nombre: string;
  precio: string;
  cantidad: number;
}

export default function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('efectivo');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Checkout Form States
  const [clientName, setClientName] = useState<string>('');
  const [clientAddress, setClientAddress] = useState<string>('');
  const [googleMapsUrl, setGoogleMapsUrl] = useState<string>('');
  const [isGettingLocation, setIsGettingLocation] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // States for Birthday Form
  const [showBirthdayForm, setShowBirthdayForm] = useState(false);
  const [isSubmittingBirthday, setIsSubmittingBirthday] = useState(false);
  const [birthdaySuccess, setBirthdaySuccess] = useState(false);
  const [birthdayData, setBirthdayData] = useState({
    nombre: '',
    telefono: '',
    fechaNacimiento: '',
    distrito: '',
    correo: ''
  });

  // States for Review Form
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);
  const [reviewData, setReviewData] = useState({
    estrellasMozo: 0,
    estrellasComida: 0,
    comentario: ''
  });

  // State for Customizable Drinks/Infusions Modal
  const [customOptionsModal, setCustomOptionsModal] = useState<{
    isOpen: boolean;
    dish: Dish | null;
    options: string[];
    title: string;
  }>({
    isOpen: false,
    dish: null,
    options: [],
    title: ''
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        if (!SHEET_ID) {
          setCategories(DEFAULT_MENU_DATA);
          if (DEFAULT_MENU_DATA.length > 0) {
            setActiveCategory(DEFAULT_MENU_DATA[0].id);
          }
          return;
        }

        const [cats, dishes] = await Promise.all([
          fetchSheetData<SheetCategory>('categorías'),
          fetchSheetData<SheetDish>('platos')
        ]);

        if (cats.length === 0 && dishes.length === 0) {
          setCategories(DEFAULT_MENU_DATA);
          if (DEFAULT_MENU_DATA.length > 0) {
            setActiveCategory(DEFAULT_MENU_DATA[0].id);
          }
          return;
        }

        const formattedCategories: Category[] = cats
          .map(c => {
            const catName = (c as any).categorías || (c as any).Categorías || (c as any).categoría || (c as any).Categoría || (c as any).nombre || (c as any).Nombre || '';
            if (!catName) return null;
            return {
              id: catName.toLowerCase().replace(/\s+/g, '-'),
              nombre: catName,
              items: dishes
                .filter(d => {
                  const dCat = d.categoría || (d as any).Categoría || (d as any).categorías || (d as any).Categorías || (d as any).categoria || (d as any).Categoria || '';
                  return dCat === catName;
                })
                .map(d => {
                  const name = d['nombre del plato'] || (d as any)['Nombre del plato'] || (d as any).nombre || (d as any).Nombre || '';
                  const desc = d.descripción || (d as any).Descripción || (d as any).descripcion || (d as any).Descripcion || '';
                  const price = d.precio || (d as any).Precio || '';
                  
                  // Buscar la imagen local por defecto si no viene de la hoja de cálculo
                  const defaultDish = DEFAULT_MENU_DATA
                    .flatMap(cat => cat.items)
                    .find(item => item.nombre.toLowerCase().trim() === name.toLowerCase().trim());
                  const defaultImg = defaultDish?.imagen || '';
                  
                  const sheetImg = d['URL de imagen'] || (d as any)['url de imagen'] || (d as any)['URL de Imagen'] || (d as any)['imagen URL'] || (d as any)['Imagen URL'] || '';
                  
                  return {
                    nombre: name,
                    descripcion: desc,
                    precio: price,
                    imagen: LOCAL_IMAGES[name] || 
                            LOCAL_IMAGES[name.trim()] || 
                            LOCAL_IMAGES[name.toLowerCase().trim()] || 
                            sheetImg || 
                            defaultImg || 
                            null
                  };
                })
            };
          })
          .filter(Boolean) as Category[];

        setCategories(formattedCategories);
        if (formattedCategories.length > 0) {
          setActiveCategory(formattedCategories[0].id);
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setCategories(DEFAULT_MENU_DATA);
        if (DEFAULT_MENU_DATA.length > 0) {
          setActiveCategory(DEFAULT_MENU_DATA[0].id);
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const cartCount = useMemo(() => cart.reduce((acc, item) => acc + item.cantidad, 0), [cart]);

  const addToCart = (dish: Dish, forceOption?: string) => {
    const dishNameLower = dish.nombre.toLowerCase().trim();

    // 1. Interceptar Infusiones
    if (dishNameLower === "infusiones" && !forceOption) {
      setCustomOptionsModal({
        isOpen: true,
        dish,
        options: ["Té", "Anís", "Manzanilla"],
        title: "Selecciona el sabor de tu Infusión"
      });
      return;
    }

    // 2. Interceptar gaseosa de 500ml
    if (dishNameLower === "inka cola / coca cola / sprite / fanta 500ml" && !forceOption) {
      setCustomOptionsModal({
        isOpen: true,
        dish,
        options: ["Inka Kola", "Coca Cola", "Sprite", "Fanta"],
        title: "Selecciona el sabor de tu gaseosa de 500ml"
      });
      return;
    }

    // 3. Interceptar gaseosa personal
    if (dishNameLower === "gaseosa personal" && !forceOption) {
      setCustomOptionsModal({
        isOpen: true,
        dish,
        options: ["Inka Kola", "Coca Cola", "Sprite", "Fanta"],
        title: "Selecciona el sabor de tu gaseosa personal"
      });
      return;
    }

    // 4. Interceptar refrescos naturales por vaso, jarra o media jarra
    const isJarra1 = dishNameLower === "limonada / chicha morada / maracuyá / chicha de jora (jarra)";
    const isJarra2 = dishNameLower === "limonada / chicha morada / maracuyá / chicha de jora (1/2 jarra)";
    const isJarra3 = dishNameLower === "limonada / chicha morada / maracuyá / chicha de jora (vaso)";
    if ((isJarra1 || isJarra2 || isJarra3) && !forceOption) {
      let suffix = " (Vaso)";
      if (isJarra1) suffix = " (Jarra)";
      if (isJarra2) suffix = " (1/2 Jarra)";

      setCustomOptionsModal({
        isOpen: true,
        dish,
        options: ["Limonada", "Chicha Morada", "Maracuyá", "Chicha de Jora"],
        title: `Selecciona el sabor de tu bebida${suffix}`
      });
      return;
    }

    // Nombre definitivo del item del carrito
    const cartItemName = forceOption ? `${dish.nombre} - ${forceOption}` : dish.nombre;

    setCart(prev => {
      const existing = prev.find(i => i.nombre === cartItemName && i.precio === dish.precio);
      if (existing) {
        return prev.map(i =>
          (i.nombre === cartItemName && i.precio === dish.precio)
            ? { ...i, cantidad: i.cantidad + 1 }
            : i
        );
      }
      return [...prev, { nombre: cartItemName, precio: dish.precio, cantidad: 1 }];
    });
  };

  const updateQuantity = (nombre: string, precio: string, delta: number) => {
    setCart(prev =>
      prev
        .map(i => {
          if (i.nombre === nombre && i.precio === precio) {
            const newQty = i.cantidad + delta;
            return newQty > 0 ? { ...i, cantidad: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => {
      const cleanPrice = item.precio.replace(/^[^\d]*/, '');
      const num = parseFloat(cleanPrice) || 0;
      return acc + num * item.cantidad;
    }, 0);
  };

  const calculateTapperCost = () => {
    return cartCount * 1;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTapperCost();
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Tu navegador no soporta geolocalización.");
      return;
    }

    setIsGettingLocation(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
        setGoogleMapsUrl(mapsUrl);
        setIsGettingLocation(false);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        setIsGettingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Permiso denegado. Permite el acceso a tu ubicación precisa.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Ubicación no disponible.");
            break;
          case error.TIMEOUT:
            setLocationError("Tiempo de espera agotado.");
            break;
          default:
            setLocationError("Error al obtener la ubicación.");
            break;
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const sendToWhatsApp = () => {
    if (!clientName.trim()) {
      alert("Por favor, ingresa tu nombre completo.");
      return;
    }
    if (!clientAddress.trim()) {
      alert("Por favor, ingresa tu dirección de entrega.");
      return;
    }

    const subtotal = calculateSubtotal();
    const tapperCost = calculateTapperCost();
    const total = calculateTotal();

    let message = `*Hola ${RESTAURANTE_NAME}, deseo realizar un pedido:*\n\n`;
    message += `*Cliente:* ${clientName.trim()}\n`;
    message += `*Dirección:* ${clientAddress.trim()}\n`;
    if (googleMapsUrl) {
      message += `*Ubicación GPS:* ${googleMapsUrl}\n`;
    }
    message += `\n*Detalle del pedido:*\n`;
    cart.forEach(item => {
      message += `• ${item.cantidad} x ${item.nombre} (${item.precio})\n`;
    });
    
    let paymentLabel = 'Efectivo';
    if (paymentMethod === 'tarjeta') paymentLabel = 'Tarjeta Débito/Crédito';
    if (paymentMethod === 'yape_plin') paymentLabel = 'Yape / Plin';

    message += `\n*Método de Pago:* ${paymentLabel}\n`;
    message += `\n*Subtotal platos:* S/.${subtotal.toFixed(2)}`;
    message += `\n*Envases (tappers):* S/.${tapperCost.toFixed(2)}`;
    message += `\n*TOTAL A PAGAR: S/.${total.toFixed(2)}*`;

    setShowCheckoutModal(false);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    const el = document.getElementById(`cat-${catId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBirthdaySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingBirthday(true);
    const success = await submitSheetData('fidelización', {
      timestamp: new Date().toLocaleString('es-PE'),
      nombre: birthdayData.nombre,
      teléfono: birthdayData.telefono,
      'fecha de nacimiento': birthdayData.fechaNacimiento,
      distrito: birthdayData.distrito,
      correo: birthdayData.correo || 'No indicado'
    });
    
    setIsSubmittingBirthday(false);
    if (success) {
      setBirthdaySuccess(true);
      setTimeout(() => {
        setShowBirthdayForm(false);
        setBirthdaySuccess(false);
        setBirthdayData({ nombre: '', telefono: '', fechaNacimiento: '', distrito: '', correo: '' });
      }, 3000);
    } else {
      alert("Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.");
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewData.estrellasMozo === 0 || reviewData.estrellasComida === 0) {
      alert("Por favor califica ambas opciones con estrellas.");
      return;
    }

    setIsSubmittingReview(true);
    const success = await submitSheetData('reseñas', {
      timestamp: new Date().toLocaleString('es-PE'),
      'estrellas mozo': reviewData.estrellasMozo,
      'estrellas comida': reviewData.estrellasComida,
      comentario: reviewData.comentario || 'Sin comentarios'
    });
    
    setIsSubmittingReview(false);
    if (success) {
      setReviewSuccess(true);
      setTimeout(() => {
        setShowReviewForm(false);
        setReviewSuccess(false);
        setReviewData({ estrellasMozo: 0, estrellasComida: 0, comentario: '' });
      }, 3000);
    } else {
      alert("Hubo un error al enviar tu reseña. Por favor, inténtalo de nuevo.");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
        <p className="font-slogan text-primary font-bold tracking-widest uppercase text-xs">Cargando delicias...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden flex flex-col font-sans">
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-50 px-5 py-3 flex justify-between items-center border-b border-gray-100">
        <div className="flex flex-col items-start">
          <img src="/logo_alesus.png" alt="Alesus Rest - Cevicheria" className="h-16 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-2">
          {FACEBOOK_URL && (
            <motion.a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary cursor-pointer"
            >
              <Facebook size={22} />
            </motion.a>
          )}
          {MAPS_URL && (
            <motion.a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary cursor-pointer"
            >
              <MapPin size={22} />
            </motion.a>
          )}
          <motion.a
            href="https://wa.me/c/51944482063"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center text-primary cursor-pointer"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              <path d="M16.5 13.92v1.5a1 1 0 0 1-1.09 1 9.89 9.89 0 0 1-4.31-1.53 9.75 9.75 0 0 1-3-3 9.89 9.89 0 0 1-1.53-4.33 1 1 0 0 1 1-1.06h1.5a1 1 0 0 1 1 .86c.15.7.35 1.39.59 2.05a1 1 0 0 1-.22 1.05l-.64.64a8 8 0 0 0 3 3l.64-.64a1 1 0 0 1 1.05-.22c.66.24 1.35.44 2.05.59a1 1 0 0 1 .86 1z" />
            </svg>
          </motion.a>
          <motion.div
            onClick={() => cartCount > 0 && setShowSummary(true)}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center relative cursor-pointer"
          >
            <ShoppingBag size={22} className="text-primary" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 bg-secondary text-white rounded-full text-[10px] font-bold flex items-center justify-center px-1">
                {cartCount}
              </span>
            )}
          </motion.div>
        </div>
      </header>

      <div className="w-full bg-primary py-2 overflow-hidden flex items-center">
        <div className="animate-marquee flex gap-6 text-white font-slogan font-bold text-[11px] tracking-widest uppercase whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i}>{MARQUEE_TEXT}</span>
          ))}
        </div>
      </div>

      <div className="px-5 pt-4">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: ["0px 0px 0px 0px rgba(245,158,11,0.6)", "0px 0px 20px 8px rgba(245,158,11,0)", "0px 0px 0px 0px rgba(245,158,11,0)"] 
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() => setShowBirthdayForm(true)}
          className="w-full bg-gradient-to-r from-yellow-500 via-secondary to-amber-500 text-white py-3 px-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-[10px] sm:text-[11px] uppercase tracking-wide border border-yellow-400 relative overflow-hidden group text-center"
        >
          <div className="absolute inset-0 shimmer opacity-30 mix-blend-overlay"></div>
          <Gift size={18} className="animate-bounce shrink-0" />
          <span>¡Celebra tus momentos especiales con nosotros! 🥂 <span className="text-yellow-100 font-black underline">Registra tu cumpleaños aquí</span> y recibe un Chilcano Clásico de cortesía para brindar. 🎁</span>
        </motion.button>
      </div>

      <div className="px-5 pt-4 pb-3">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl aspect-[2/1] bg-gradient-to-br from-primary/10 to-secondary/15 border border-primary/20">
          <img src="/banner_alesus.jpg" alt="Alesus Rest - Cevicheria Banner" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="px-5 py-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[11px] font-category font-semibold whitespace-nowrap transition-all duration-200 border
                ${activeCategory === cat.id
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                  : 'bg-white text-dark border-gray-200 hover:border-primary/40 hover:text-primary'
                }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto pb-32 px-5">
        {categories.map(cat => (
          <section key={cat.id} id={`cat-${cat.id}`} className="mb-10 scroll-mt-28">
            <div className="mb-5 pt-2">
              <div className="flex items-center gap-2 mb-1">
                <Utensils className="text-primary wave-icon" size={22} />
                <h3 className="font-category font-semibold text-primary text-[26px] leading-none tracking-wide category-underline">
                  {cat.nombre}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cat.items.map((dish, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedDish(dish)}
                  className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="bg-primary/5 aspect-square flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                    {dish.imagen ? (
                      <img 
                        src={dish.imagen} 
                        alt={dish.nombre} 
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-1.5 p-4">
                        <Utensils className="text-primary/20" size={24} />
                        <span className="font-dish font-bold text-[9px] text-primary/40 uppercase tracking-widest text-center">
                          Alesus Rest
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="font-dish font-bold text-dark text-[13px] leading-tight mb-1">
                      {dish.nombre}
                    </h4>
                    {dish.descripcion && (
                      <p className="text-[10px] text-gray-400 leading-tight mb-2 line-clamp-3">
                        {dish.descripcion}
                      </p>
                    )}
                    <div className="flex-1"></div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-dish font-bold text-primary text-[16px] whitespace-nowrap">
                        {dish.precio}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(dish);
                        }}
                        className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary transition-colors duration-200 shrink-0"
                      >
                        <Plus size={16} strokeWidth={3} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-8 mb-4 border border-gray-100 bg-gray-50 rounded-3xl p-5 text-center shadow-sm">
          <h3 className="font-title text-primary text-[22px] leading-tight mb-2">¿Cómo estuvo todo?</h3>
          <p className="text-[11px] text-gray-500 mb-4 px-4">Ayúdanos a mejorar calificando tu experiencia con nosotros</p>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReviewForm(true)}
            className="bg-primary text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-md shadow-primary/20 flex items-center justify-center gap-2 mx-auto w-full"
          >
            <Star size={18} className="fill-white" />
            Reseña nuestra comida
          </motion.button>
        </section>

        <section className="mt-2 mb-4 overflow-hidden border border-gray-100 bg-white rounded-3xl p-2 shadow-sm">
          <div className="rounded-2xl overflow-hidden h-[250px] relative w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29690.45323806844!2d-77.01392238135257!3d-11.989053213295936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c50046b458bb%3A0x9667530c92b272cc!2sALESUS!5e0!3m2!1ses!2spe!4v1783551070288!5m2!1ses!2spe" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </section>

        <footer className="mt-8 pt-8 pb-10 border-t border-gray-200 flex flex-col items-center justify-center">
          <p className="font-title text-2xl text-primary mb-4">{RESTAURANTE_NAME}</p>
          <div className="w-32 h-32 mb-6 rounded-2xl flex items-center justify-center p-2">
            <img src="/logo_alesus.png" alt="Alesus Logo" loading="lazy" className="w-full h-full object-contain" />
          </div>
          <p className="text-[11px] text-gray-400 font-medium">© 2026 Todos los derechos reservados.</p>
        </footer>

        <div className="bg-dark py-6 flex flex-col items-center justify-center">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1 opacity-50 text-white/50">Digital Menu Experience</p>
          <motion.a 
            href="https://tymasolutions.lat/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-bold text-sm tracking-tight group cursor-pointer"
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white group-hover:text-[#00BFFF] transition-colors duration-200">Hecho por Tyma</span>
            <span className="text-[#00BFFF] group-hover:text-white transition-colors duration-200">Solutions</span>
          </motion.a>
        </div>
      </main>

      <AnimatePresence>
        {cartCount > 0 && !showSummary && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 w-full max-w-md p-5 z-40"
          >
            <div className="glass rounded-[2rem] p-4 flex items-center justify-between border border-white/50 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="shimmer absolute inset-0 opacity-20"></div>
                  <ShoppingBag size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tu Pedido</p>
                  <p className="font-bold text-dark text-lg">{cartCount} Artículos</p>
                </div>
              </div>
              <button
                onClick={() => setShowSummary(true)}
                className="bg-primary text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg shadow-primary/30 font-bold text-sm"
              >
                Ver Pedido
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSummary && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end justify-center p-4 lg:p-0"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-md rounded-t-[3rem] p-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-title text-2xl text-primary">Mi Pedido</h2>
                <button
                  onClick={() => setShowSummary(false)}
                  className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>
              <div className="space-y-3 mb-8">
                {cart.map(item => (
                  <div
                    key={`${item.nombre}-${item.precio}`}
                    className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-dish font-semibold text-dark text-sm truncate">{item.nombre}</h4>
                      <p className="font-dish text-xs text-primary font-bold">{item.precio}</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-gray-100">
                      <button onClick={() => updateQuantity(item.nombre, item.precio, -1)} className="text-gray-400">
                        <Minus size={16} />
                      </button>
                      <span className="font-dish font-bold text-sm w-4 text-center">{item.cantidad}</span>
                      <button onClick={() => updateQuantity(item.nombre, item.precio, 1)} className="text-primary">
                        <Plus size={16} />
                      </button>
                    </div>
                    <button
                      onClick={() => updateQuantity(item.nombre, item.precio, -item.cantidad)}
                      className="text-red-300 ml-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Subtotal platos:</span>
                  <span>S/.{calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Envases (tappers):</span>
                  <span>S/.{calculateTapperCost().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                  <h3 className="font-dish text-base font-bold text-dark">Total a pagar</h3>
                  <h3 className="font-dish text-lg font-bold text-primary">S/.{calculateTotal().toFixed(2)}</h3>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowSummary(false);
                  setShowCheckoutModal(true);
                }}
                className="w-full bg-primary text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform font-bold cursor-pointer"
              >
                Continuar con el Pedido
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCheckoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end justify-center p-4 lg:p-0"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-md rounded-t-[3rem] p-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-title text-2xl text-primary">Datos de Entrega</h2>
                <button
                  onClick={() => setShowCheckoutModal(false)}
                  className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <X size={20} className="text-gray-400" />
                </button>
              </div>

              <div className="space-y-4 text-left">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 block mb-1">Nombre Completo</label>
                  <input 
                    required 
                    type="text" 
                    value={clientName} 
                    onChange={e => setClientName(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                    placeholder="Ej. Juan Pérez" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase ml-1 block mb-1">Dirección de Entrega</label>
                  <input 
                    required 
                    type="text" 
                    value={clientAddress} 
                    onChange={e => setClientAddress(e.target.value)} 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                    placeholder="Ej. Av. Larco 123, Dpto 402" 
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleGetLocation}
                    disabled={isGettingLocation}
                    className="w-full bg-primary/10 text-primary py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-xs hover:bg-primary/15 transition-colors disabled:opacity-70 cursor-pointer"
                  >
                    {isGettingLocation ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Obteniendo ubicación precisa...</span>
                      </>
                    ) : (
                      <>
                        <MapPin size={16} />
                        <span>Obtener ubicación por GPS</span>
                      </>
                    )}
                  </button>

                  <div className="mt-2 bg-amber-50 border border-amber-100 rounded-xl p-3 text-[11px] text-amber-800 leading-relaxed">
                    💡 <strong>Importante:</strong> Al hacer clic en el botón, el navegador te solicitará acceso a tu ubicación. Por favor, asegúrate de seleccionar la opción de <strong>"Ubicación Precisa"</strong> (y no ubicación aproximada o general) para que podamos llevar tu pedido a la dirección correcta.
                  </div>

                  {googleMapsUrl && (
                    <p className="text-[10px] text-green-600 font-semibold mt-2 text-center flex items-center justify-center gap-1">
                      ✅ Ubicación precisa GPS obtenida exitosamente.
                    </p>
                  )}
                  {locationError && (
                    <p className="text-[10px] text-red-500 font-semibold mt-2 text-center">
                      ❌ {locationError}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t border-dashed border-gray-200 pt-6 mt-6 mb-6">
                <h4 className="font-dish text-sm font-bold text-dark mb-3 text-left">Método de pago:</h4>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('efectivo')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      paymentMethod === 'efectivo'
                        ? 'border-primary bg-primary/5 text-primary shadow-sm font-extrabold'
                        : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">💵</span>
                    <span>Efectivo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('yape_plin')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      paymentMethod === 'yape_plin'
                        ? 'border-primary bg-primary/5 text-primary shadow-sm font-extrabold'
                        : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">📱</span>
                    <span>Yape/Plin</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('tarjeta')}
                    className={`py-2.5 px-1 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      paymentMethod === 'tarjeta'
                        ? 'border-primary bg-primary/5 text-primary shadow-sm font-extrabold'
                        : 'border-gray-200 bg-white text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">💳</span>
                    <span>Tarjeta</span>
                  </button>
                </div>

                {paymentMethod === 'yape_plin' && (
                  <div className="bg-purple-50 border border-purple-100 p-4 rounded-2xl mb-4 text-left">
                    <p className="text-xs text-purple-700 font-semibold mb-2">
                      Realiza tu Yape o Plin al número:
                    </p>
                    <div className="flex items-center justify-between bg-white border border-purple-200 rounded-xl px-4 py-2.5 mb-3">
                      <span className="font-bold text-base text-purple-950">944482063</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText("944482063");
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="bg-primary text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? "¡Copiado! ✓" : "Copiar"}
                      </button>
                    </div>
                    <p className="text-[10px] text-purple-500 font-medium">
                      Puedes hacer tu Yape o Plin a este número haciendo clic para copiar.
                    </p>
                  </div>
                )}

                <div className="space-y-1.5 border-t border-gray-100 pt-4 mb-4">
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Subtotal platos:</span>
                    <span>S/.{calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Envases (tappers):</span>
                    <span>S/.{calculateTapperCost().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200">
                    <h3 className="font-dish text-base font-bold text-dark">Total a pagar</h3>
                    <h3 className="font-dish text-lg font-bold text-primary">S/.{calculateTotal().toFixed(2)}</h3>
                  </div>
                </div>
              </div>

              <button
                onClick={sendToWhatsApp}
                className="w-full bg-[#25D366] text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-green-100 hover:scale-[1.02] transition-transform font-bold cursor-pointer"
              >
                Enviar Pedido a WhatsApp
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Plato ampliado"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBirthdayForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowBirthdayForm(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"
              >
                <X size={18} className="text-gray-400" />
              </button>

              <div className="flex flex-col items-center text-center mb-5 mt-2">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-3">
                  <Gift size={24} className="text-secondary" />
                </div>
                <h2 className="font-title text-2xl text-dark leading-none mb-2">¡Tu Cumpleaños!</h2>
                <p className="text-xs text-gray-500">Déjanos tus datos para enviarte una sorpresa en tu día especial.</p>
              </div>

              {birthdaySuccess ? (
                <div className="bg-green-50 text-green-600 p-4 rounded-2xl text-center text-sm font-bold border border-green-100">
                  ¡Gracias! Tus datos han sido guardados.
                </div>
              ) : (
                <form onSubmit={handleBirthdaySubmit} className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Nombre Completo</label>
                    <input required type="text" value={birthdayData.nombre} onChange={e => setBirthdayData({...birthdayData, nombre: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Teléfono</label>
                    <input required type="tel" minLength={9} maxLength={11} pattern="[0-9]*" value={birthdayData.telefono} onChange={e => {
                      const val = e.target.value.replace(/\D/g, '');
                      setBirthdayData({...birthdayData, telefono: val});
                    }} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Ej. 987654321" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Fecha de Nacimiento</label>
                    <input required type="date" value={birthdayData.fechaNacimiento} onChange={e => setBirthdayData({...birthdayData, fechaNacimiento: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary/50 transition-colors text-gray-700" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Distrito</label>
                    <input required type="text" value={birthdayData.distrito} onChange={e => setBirthdayData({...birthdayData, distrito: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary/50 transition-colors" placeholder="Ej. Miraflores" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Correo Electrónico (Opcional)</label>
                    <input type="email" value={birthdayData.correo} onChange={e => setBirthdayData({...birthdayData, correo: e.target.value})} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-secondary/50 transition-colors" placeholder="correo@ejemplo.com" />
                  </div>
                  
                  <button disabled={isSubmittingBirthday} type="submit" className="w-full bg-secondary text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-secondary/20 mt-2 disabled:opacity-70 flex justify-center items-center">
                    {isSubmittingBirthday ? <Loader2 size={18} className="animate-spin" /> : "Guardar mis datos"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowReviewForm(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"
              >
                <X size={18} className="text-gray-400" />
              </button>

              <div className="flex flex-col items-center text-center mb-5 mt-2">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3">
                  <Star size={24} className="text-primary fill-primary" />
                </div>
                <h2 className="font-title text-2xl text-dark leading-none mb-2">¡Calificanos!</h2>
                <p className="text-xs text-gray-500">Tu opinión es muy importante para nosotros.</p>
              </div>

              {reviewSuccess ? (
                <div className="bg-green-50 text-green-600 p-4 rounded-2xl text-center text-sm font-bold border border-green-100">
                  ¡Gracias por tu reseña! Nos ayuda a mejorar.
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-5">
                  
                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <p className="text-xs font-bold text-gray-500 mb-2">Atención del Mozo</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <button 
                          key={star} type="button" 
                          onClick={() => setReviewData({...reviewData, estrellasMozo: star})}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star size={28} className={reviewData.estrellasMozo >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex flex-col items-center">
                    <p className="text-xs font-bold text-gray-500 mb-2">Calidad de la Comida</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <button 
                          key={star} type="button" 
                          onClick={() => setReviewData({...reviewData, estrellasComida: star})}
                          className="p-1 transition-transform hover:scale-110"
                        >
                          <Star size={28} className={reviewData.estrellasComida >= star ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Comentario (Opcional)</label>
                    <textarea 
                      rows={3} 
                      value={reviewData.comentario} 
                      onChange={e => setReviewData({...reviewData, comentario: e.target.value})} 
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none mt-1" 
                      placeholder="Cuéntanos más sobre tu experiencia..." 
                    />
                  </div>
                  
                  <button disabled={isSubmittingReview} type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-primary/20 mt-2 disabled:opacity-70 flex justify-center items-center">
                    {isSubmittingReview ? <Loader2 size={18} className="animate-spin" /> : "Enviar Reseña"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md z-10 hover:bg-white transition-colors"
              >
                <X size={18} className="text-gray-700" />
              </button>

              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-primary/5 flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                {selectedDish.imagen ? (
                  <img
                    src={selectedDish.imagen}
                    alt={selectedDish.nombre}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Utensils size={48} className="text-primary/20 animate-pulse" />
                    <span className="font-dish font-bold text-[10px] text-primary/40 uppercase tracking-widest">
                      Alesus Gourmet
                    </span>
                  </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col overflow-y-auto">
                <h3 className="font-dish font-bold text-dark text-xl leading-tight mb-2">
                  {selectedDish.nombre}
                </h3>
                
                <span className="inline-block font-dish font-bold text-primary text-[20px] mb-4">
                  {selectedDish.precio}
                </span>

                {selectedDish.descripcion && (
                  <div className="mb-6">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Descripción</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {selectedDish.descripcion}
                    </p>
                  </div>
                )}

                {/* Add to Order Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    addToCart(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-primary/20 font-bold text-sm hover:bg-primary/95 transition-colors"
                >
                  <Plus size={16} strokeWidth={3} />
                  <span>Agregar al Pedido • {selectedDish.precio}</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {customOptionsModal.isOpen && customOptionsModal.dish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl relative flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setCustomOptionsModal({ isOpen: false, dish: null, options: [], title: "" })}
                className="absolute top-4 right-4 w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"
              >
                <X size={18} className="text-gray-400" />
              </button>

              <div className="flex flex-col items-center text-center mb-6 mt-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 text-primary">
                  <Utensils size={24} />
                </div>
                <h3 className="font-dish font-bold text-lg text-dark leading-tight px-4">
                  {customOptionsModal.title}
                </h3>
                <p className="text-[11px] text-gray-400 mt-1">
                  Elige una opción para añadir al pedido:
                </p>
              </div>

              <div className="flex flex-col gap-2.5 mb-2 overflow-y-auto pr-1 max-h-[40vh]">
                {customOptionsModal.options.map((option) => (
                  <motion.button
                    key={option}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (customOptionsModal.dish) {
                        addToCart(customOptionsModal.dish, option);
                      }
                      setCustomOptionsModal({ isOpen: false, dish: null, options: [], title: "" });
                    }}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3.5 px-5 text-left text-sm font-bold text-dark hover:bg-primary/5 hover:border-primary/20 transition-all flex items-center justify-between"
                  >
                    <span>{option}</span>
                    <Plus size={16} className="text-primary" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
