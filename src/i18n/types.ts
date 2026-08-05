export type Language = 'LV' | 'EN' | 'RU';

export type PageKey = 'home' | 'about' | 'products' | 'services' | 'contact';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    services: string;
    contact: string;
    cart: string;
    orderNow: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaProducts: string;
    ctaAbout: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  aboutSection: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    noSugarBadge: string;
    noSugarDesc: string;
    probioticsBadge: string;
    probioticsDesc: string;
    naturalFruitBadge: string;
    naturalFruitDesc: string;
  };
  productsSection: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterImmunity: string;
    filterDigestion: string;
    filterEnergy: string;
    filterRelaxation: string;
    filterDetox: string;
    priceFixed: string;
    addToCart: string;
    addedToCart: string;
    viewDetails: string;
    volume: string;
  };
  servicesSection: {
    title: string;
    subtitle: string;
    service1Title: string;
    service1Desc: string;
    service1Details: string[];
    service2Title: string;
    service2Desc: string;
    service2Details: string[];
    service3Title: string;
    service3Desc: string;
    service3Details: string[];
    inquireBtn: string;
  };
  contactSection: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    sendingBtn: string;
    successMessage: string;
    phoneInfo: string;
    emailInfo: string;
    addressInfo: string;
    hoursInfo: string;
  };
  cartDrawer: {
    title: string;
    emptyText: string;
    total: string;
    checkoutBtn: string;
    deliveryTitle: string;
    omniva: string;
    dpd: string;
    pickup: string;
    addressLabel: string;
    confirmOrder: string;
    orderSuccessTitle: string;
    orderSuccessDesc: string;
    closeBtn: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    legal: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
}
