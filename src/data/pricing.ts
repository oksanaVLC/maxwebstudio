export const pricing = {
  es: {
    title: "Precios claros",
    lead: "Pago único por el desarrollo y plan de mantenimiento opcional desde 45 €/mes.",
    mostPicked: "El más elegido",
    plans: [
      { name: "Starter", price: "1.452 €", note: "IVA incluido · pago único", desc: "Web de una página", featured: false, cta: "Elegir Starter", feats: ["Diseño a medida de una página", "Formulario de contacto y mapa", "SEO básico y analítica"] },
      { name: "Business", price: "2.420 €", note: "IVA incluido · pago único", desc: "Hasta 6 páginas", featured: true, cta: "Elegir Business", feats: ["Todo lo de Starter", "Apoyo con los textos", "Sección de blog o noticias", "3 meses de mantenimiento incluidos"] },
      { name: "Shop", price: "4.840 €", note: "IVA incluido · pago único", desc: "Comercio electrónico", featured: false, cta: "Elegir Shop", feats: ["Todo lo de Business", "Hasta 60 productos", "Pagos y envíos configurados"] },
    ],
  },
  en: {
    title: "Plain pricing",
    lead: "One-off build, optional care plan from €45/month.",
    mostPicked: "Most picked",
    plans: [
      { name: "Starter", price: "€1,452", note: "VAT included · one-time", desc: "One-page site", featured: false, cta: "Choose Starter", feats: ["Custom one-page design", "Contact form + map", "Basic SEO & analytics"] },
      { name: "Business", price: "€2,420", note: "VAT included · one-time", desc: "Up to 6 pages", featured: true, cta: "Choose Business", feats: ["Everything in Starter", "Copywriting support", "Blog / news section", "3 months of care included"] },
      { name: "Shop", price: "€4,840", note: "VAT included · one-time", desc: "E-commerce", featured: false, cta: "Choose Shop", feats: ["Everything in Business", "Up to 60 products", "Payments & shipping setup"] },
    ],
  },
  ru: {
    title: "Понятные цены",
    lead: "Разовая оплата разработки, поддержка по желанию от 45 €/месяц.",
    mostPicked: "Выбирают чаще",
    plans: [
      { name: "Starter", price: "1 452 €", note: "НДС включён · разовый платёж", desc: "Одностраничный сайт", featured: false, cta: "Выбрать Starter", feats: ["Индивидуальный дизайн одной страницы", "Форма связи и карта", "Базовое SEO и аналитика"] },
      { name: "Business", price: "2 420 €", note: "НДС включён · разовый платёж", desc: "До 6 страниц", featured: true, cta: "Выбрать Business", feats: ["Всё из Starter", "Помощь с текстами", "Блог или раздел новостей", "3 месяца поддержки включены"] },
      { name: "Shop", price: "4 840 €", note: "НДС включён · разовый платёж", desc: "Интернет-торговля", featured: false, cta: "Выбрать Shop", feats: ["Всё из Business", "До 60 товаров", "Настройка оплаты и доставки"] },
    ],
  },
} as const;
