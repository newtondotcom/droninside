const translations = {
  en: {
    header_company_name: 'DronInside',
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    faq: 'FAQ',
    video_description: 'Single-take walkthrough videos that stand out.',
    video_text:
      'We fly small drones indoors creating seamless walkthrough videos for real estate, businesses, hotels, & more.',
    get_started: 'Get Started Today',
    who_we_are: 'Who We Are',
    company_description:
      'DronInside is a video production company based in the Parisian region. We specialize in drone video tours for real estate, businesses, hotels, offices, venues, and much more!',
    years_flying_drones: '5+ Years flying Drones',
    liability_insurance: 'Professional Liability Insurance',
    video_montage: 'Video Montage and Sound FX',
    showreel: 'SHOWREEL',
    footer_company_name: 'DronInside',
    footer_description:
      'Trust our little flying machines to get the best shots for your business 🚁',
    formSubmitted: 'Your message has been successfully sent!',
    responseMessage: 'We will get back to you as soon as possible.',
    contactUs: 'Contact Us',
    fullName: 'Full Name',
    fullNamePlaceholder: 'John Doe',
    email: 'Email',
    emailPlaceholder: 'john.doe@example.com',
    phoneNumber: 'Phone Number',
    phonePlaceholder: '+1234567890',
    project: 'Your Project',
    projectPlaceholder: 'Enter your message here',
    sendButton: 'Send',
    services_duration: 'On site for',
    services_price: 'Starting from',
    services_title: 'We fly drones indoors to create seamless video tours',
    service_subtitle:
      'The premier virtual tour for commercial real estate, businesses, hotels, apartment leasing, & more',
    contact_us: 'Book now',
    faq_title: 'Frequenty Asked Questions',
    made_from: 'Made with ❤️ in Paris 🥐',
    residential: 'Residential',
    local_business: 'Local Business',
    office: 'Office',
    hostel: 'Hostel',
    construction: 'Construction',
    industrial: 'Industrial',
    choose_service: 'Choose a service',
    loading_propellers: 'Screwing propellers',
    loading_battery: 'Plug in the battery',
    loading_camera: 'Turning on the camera',
    loading_takeoff: 'Getting ready for take-off',
  },
  fr: {
    header_company_name: 'DronInside',
    home: 'Accueil',
    services: 'Services',
    portfolio: 'Portfolio',
    faq: 'FAQ',
    video_description: 'Visites virtuelles de drone en intérieur',
    video_text:
      "Nous volons en intérieur avec de petits drones pour créer visite virtuelle en vidéo sans précédent pour l'immobilier, les entreprises, les hôtels, et bien plus encore.",
    get_started: "Commencez aujourd'hui",
    who_we_are: 'Qui sommes-nous',
    company_description:
      "DronInside est une entreprise de production vidéo basée en région parisienne. Nous sommes spécialisés dans les vidéos de visite en drone pour l'immobilier, les entreprises, les hôtels, les bureaux, les lieux, et bien plus encore !",
    years_flying_drones: 'Pilote de drone depuis plus de 5 ans',
    liability_insurance: 'Assurance responsabilité civile professionnelle',
    video_montage: 'Montage vidéo et effets sonores',
    showreel: 'PORTFOLIO',
    footer_company_name: 'DronInside',
    footer_description:
      'Faites confiance à nos petites machines volantes pour obtenir les meilleures prises de vue pour votre business 🚁',
    formSubmitted: 'Votre message a bien été envoyé !',
    responseMessage: 'Nous vous répondrons dans les plus brefs délais.',
    contactUs: 'Contactez-nous',
    fullName: 'Nom & Prénom',
    fullNamePlaceholder: 'Michel Dupont',
    email: 'Email',
    emailPlaceholder: 'michel.dupont@exemple.com',
    phoneNumber: 'Téléphone',
    phonePlaceholder: '+33644444444',
    project: 'Votre projet',
    projectPlaceholder: 'Mon message',
    sendButton: 'Envoyer',
    services_duration: 'Durée prestation',
    services_price: 'À partir de',
    services_title:
      'Nous volons en intérieur avec des petits drones pour créer des visites virtuelles sans précédent',
    service_subtitle:
      "La visite virtuelle par excellence pour l'immobilier commercial, les entreprises, les hôtels, la location d'appartements, et bien plus encore",
    contact_us: 'Réserver maintenant',
    faq_title: 'Questions Fréquemment Posées',
    made_from: 'Fait avec ❤️ à Paris 🥐',
    residential: 'Immobilier',
    local_business: 'Petits commerces',
    office: 'Entreprises',
    hostel: 'Hôtels',
    construction: 'Sites de construction',
    industrial: 'Industries',
    choose_service: 'Choisissez un service',
    loading_propellers: 'On visse les hélices',
    loading_battery: 'On branche la batterie',
    loading_camera: 'On allume la caméra',
    loading_takeoff: 'Et on se prépare au décollage',
  },
};

export default function translate(key: string) {
  let locale;
  if (navigator.language === undefined) {
    locale = 'en';
  } else {
    locale = navigator.language.split('-')[0] || 'en';
  }
  return translations[locale][key.toLowerCase()] || key;
}
