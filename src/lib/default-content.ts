import type { SiteContent } from "./content-types";

export const DEFAULT_SITE_CONTENT: SiteContent = {
  site: {
    name: "Clinique Kerthan",
    tagline: "We Care · depuis 2004",
    motto: ["Accueil", "Confort", "Compétence"],
    phone: "+237 699 41 61 53",
    phoneSecondary: "+237 688 02 08 26",
    phoneHref: "tel:+237699416153",
    phoneSecondaryHref: "tel:+237688020826",
    address: "1ère rue Nangah N°303, face lycée bilingue de Bonaberi",
    addressShort: "1ère rue Nangah, Bonaberi — Douala",
    website: "www.kerthan.org",
    websiteHref: "https://www.kerthan.org",
    hours: "Lun – Sam · 07h30 – 19h00 · Urgences 24h/24",
  },
  navLinks: [
    { id: "accueil", label: "Accueil" },
    { id: "histoire", label: "Notre histoire" },
    { id: "services", label: "Services" },
    { id: "interne", label: "Médecine interne" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    title: "Votre santé, soignée avec ",
    titleHighlight: "compassion",
    lead: "Depuis 2004, la Clinique Kerthan offre des soins médicaux de qualité dans un environnement chaleureux et humain — avec professionnalisme, rigueur et humanité.",
    ctaPrimary: "Prendre rendez-vous",
    ctaPrimaryHref: "#contact",
    ctaSecondary: "Nos services",
    ctaSecondaryHref: "#services",
  },
  heroSlides: [
    {
      id: "anniversary",
      type: "logo",
      logoImage: "/assets/logo-20-years.png",
      logoAlt: "Clinique Kerthan — 20 ans de soins prodigués avec compassion",
      signature: "20 years of compassionate care",
    },
    {
      id: "certified",
      type: "feature",
      icon: "shield-check",
      tone: "green",
      title: "Soins certifiés",
      description: "aux standards en vigueur",
    },
    {
      id: "emergency",
      type: "feature",
      icon: "clock",
      tone: "gold",
      title: "Urgences 24/7",
      description: "toujours à votre écoute",
    },
  ],
  stats: [
    { id: "experience", value: "20", suffix: "ans", label: "d'expérience à Douala" },
    { id: "services", value: "0", label: "services médicaux", tone: "gold", autoServices: true },
    { id: "emergency", value: "24/7", label: "service d'urgences", tone: "red" },
    { id: "human", value: "100%", label: "approche humaine" },
  ],
  servicesSection: {
    eyebrow: "Nos services",
    title: "Un plateau technique complet",
    description:
      "De la médecine générale au laboratoire d'analyses, tous vos soins réunis en un seul lieu.",
  },
  services: [
    {
      id: "general",
      slug: "medecine-generale",
      icon: "stethoscope",
      tone: "green",
      title: "Médecine générale & spécialités",
      description: "Consultations, diagnostics et suivi médical pour toute la famille.",
      image: "",
      body: "Notre équipe de médecins généralistes et spécialistes accueille patients de tous âges pour des consultations complètes, un diagnostic précis et un suivi personnalisé.\n\nNous prenons le temps d'écouter, d'expliquer et d'orienter vers les soins adaptés — chirurgie, imagerie, laboratoire ou spécialistes partenaires — au sein de la clinique ou en réseau.\n\nLes rendez-vous sont accessibles du lundi au samedi. En cas d'urgence, notre service reste disponible 24h/24.",
    },
    {
      id: "internal",
      slug: "medecine-interne",
      icon: "heart-pulse",
      tone: "red",
      title: "Médecine interne",
      description:
        "Prévention et traitement des maladies chroniques et des cas complexes de l'adulte.",
      image: "",
      body: "La médecine interne est la spécialité de référence pour l'adulte : maladies chroniques, pathologies multiples, suivi global et coordination des soins.\n\nNos internistes accompagnent les patients atteints de diabète, hypertension, maladies rhumatismales, infections chroniques et autres affections complexes, avec une approche rigoureuse et humaine.\n\nIls travaillent en lien étroit avec le laboratoire, l'imagerie et les autres spécialités de la clinique pour une prise en charge cohérente.",
    },
    {
      id: "smile",
      slug: "smile-inter-entreprises",
      icon: "briefcase-medical",
      tone: "gold",
      title: "SMILE — Inter-entreprises",
      description:
        "Service Médical Inter-entreprise de Liaison et d'Expertise pour les entreprises.",
      image: "",
      body: "SMILE (Service Médical Inter-entreprise de Liaison et d'Expertise) propose aux entreprises un accompagnement médical sur mesure : visites médicales, prévention des risques professionnels, suivi de l'aptitude au poste et conseil en santé au travail.\n\nNos équipes interviennent sur site ou à la clinique selon vos besoins, en conformité avec la réglementation camerounaise en vigueur.\n\nContactez-nous pour établir une convention adaptée à la taille et au secteur d'activité de votre structure.",
    },
    {
      id: "cmth",
      slug: "cmth-voyage",
      icon: "plane",
      tone: "green",
      title: "CMTH — Voyage & migration",
      description: "Centre for Migration and Travel Health : bilans et vaccins du voyageur.",
      image: "",
      body: "Le CMTH (Centre for Migration and Travel Health) prépare les voyageurs et les migrants à leur départ ou à leur installation : bilan de santé, vaccins obligatoires et recommandés, conseils préventifs selon la destination.\n\nNous délivrons les certificats internationaux de vaccination et réalisons les examens requis pour les démarches consulaires ou professionnelles.\n\nPrenez rendez-vous suffisamment à l'avance avant votre départ pour compléter les schémas vaccinaux si nécessaire.",
    },
    {
      id: "imaging",
      slug: "imagerie-medicale",
      icon: "scan",
      tone: "gold",
      title: "Imagerie médicale",
      description: "Examens d'imagerie pour un diagnostic précis et rapide.",
      image: "",
      body: "Notre plateau technique d'imagerie permet la réalisation d'examens radiologiques et d'échographies pour un diagnostic fiable, avec des résultats transmis rapidement à votre médecin traitant ou spécialiste.\n\nLes examens sont prescrits par un professionnel de santé et réalisés dans le respect des protocoles de sécurité et de qualité.\n\nL'imagerie est intégrée au parcours de soins de la clinique pour limiter les délais et faciliter la coordination médicale.",
    },
    {
      id: "lab",
      slug: "laboratoire",
      icon: "microscope",
      tone: "red",
      title: "Laboratoire d'analyses",
      description: "Analyses biologiques fiables, réalisées dans nos propres locaux.",
      image: "",
      body: "Le laboratoire de la Clinique Kerthan réalise un large panel d'analyses biologiques : hématologie, biochimie, sérologie, parasitologie et examens spécialisés, dans nos propres locaux pour maîtriser les délais et la qualité.\n\nLes prélèvements sont effectués sur place ; les résultats sont communiqués à votre médecin pour interprétation et suivi.\n\nUn laboratoire intégré à la clinique, c'est la garantie d'une chaîne de soins fluide et sécurisée.",
    },
  ],
  historySection: {
    eyebrow: "Notre histoire",
    title: "D'un cabinet médical à une clinique moderne",
    description:
      "Créée en mars 2004 sous la forme de Cabinet Médical, la Clinique Kerthan n'a cessé d'évoluer pour devenir aujourd'hui un établissement moderne doté d'un plateau technique complet, dans le district de santé de Bonassama.",
    photoImage: "",
    photoCaption: "Façade de la Clinique Kerthan — Bonaberi",
    sinceLabel: "Depuis",
    sinceValue: "Mars 2004",
  },
  historyPoints: [
    { id: "hp1", text: "Écoute attentive du patient" },
    { id: "hp2", text: "Explication claire des diagnostics" },
    { id: "hp3", text: "Prise en charge personnalisée" },
    { id: "hp4", text: "Coordination des soins spécialisés" },
    { id: "hp5", text: "Maîtrise des coûts en environnement à ressources limitées" },
  ],
  internalMedicineSection: {
    eyebrow: "Spécialité phare",
    title: "La médecine interne",
    description:
      "La combinaison de la science et de l'art de soigner. L'interniste, formé pendant au moins 3 années supplémentaires, accompagne l'adulte tout au long de son parcours de santé.",
    quote: "« Science & art de soigner »",
  },
  internalMedItems: [
    {
      id: "im1",
      icon: "activity",
      title: "Maladies chroniques",
      description: "Diabète, hypertension, VIH/SIDA, maladies rhumatismales.",
    },
    {
      id: "im2",
      icon: "layers",
      title: "Cas complexes",
      description: "Prise en charge quand plusieurs maladies coexistent.",
    },
    {
      id: "im3",
      icon: "route",
      title: "Coordination des soins",
      description: "Orientation vers la chirurgie ou les autres spécialistes.",
    },
    {
      id: "im4",
      icon: "graduation-cap",
      title: "Prévention & éducation",
      description: "Comprendre sa santé et se maintenir en bon état.",
    },
  ],
  contactSection: {
    eyebrow: "Prendre rendez-vous",
    title: "Nous sommes à votre écoute",
    description:
      "Remplissez le formulaire ou contactez-nous directement. Les urgences restent prioritaires sur les rendez-vous programmés.",
    successTitle: "Demande envoyée",
    successMessage:
      "Merci ! Notre équipe vous rappellera très vite pour confirmer votre rendez-vous.",
    hoursBadge: "Ouvert aujourd'hui",
  },
  appointmentServices: [
    { id: "as1", label: "Médecine générale" },
    { id: "as2", label: "Médecine interne" },
    { id: "as3", label: "Imagerie médicale" },
    { id: "as4", label: "Laboratoire d'analyses" },
    { id: "as5", label: "SMILE — inter-entreprises" },
    { id: "as6", label: "CMTH — santé du voyageur" },
  ],
  emergencySection: {
    label: "Urgences disponibles 24h/24",
    ctaLabel: "Prendre rendez-vous",
    ctaHref: "#contact",
  },
  footer: {
    taglineScript: "We Care",
    mission:
      "Établissement de santé privé · Douala IV, Bonassama. Vingt ans de soins prodigués avec compassion.",
    sinceBar: "Depuis mars 2004",
    signoff: "We Care!",
    social: [
      { platform: "facebook", href: "#", ariaLabel: "Facebook", icon: "facebook" },
      { platform: "tiktok", href: "#", ariaLabel: "TikTok", icon: "music-2" },
      { platform: "website", href: "https://www.kerthan.org", ariaLabel: "Site web", icon: "globe" },
    ],
  },
  seo: {
    title: "Clinique Kerthan — Soins médicaux à Douala",
    description:
      "Clinique privée à Bonaberi, Douala. Médecine générale, interne, imagerie, laboratoire — 20 ans de soins prodigués avec compassion.",
    ogImage: "/assets/logo-seal.png",
  },
  legal: {
    title: "Mentions légales",
    body: `<h2>1. Éditeur du site</h2>
<p>Le présent site <strong>www.kerthan.org</strong> est édité par :</p>
<p><strong>Clinique Kerthan</strong><br>1ère rue Nangah N°303, face lycée bilingue de Bonaberi<br>Bonaberi — Douala, Cameroun<br>Téléphone : <a href="tel:+237699416153">+237 699 41 61 53</a> / <a href="tel:+237688020826">+237 688 02 08 26</a><br>E-mail : <a href="mailto:webmaster@kerthan.org">webmaster@kerthan.org</a></p>

<h2>2. Directeur de la publication</h2>
<p>Le directeur de la publication est le représentant légal de la Clinique Kerthan.</p>

<h2>3. Conception et réalisation du site</h2>
<p>Le site internet a été conçu et développé par :</p>
<p><strong>Yarabyte SARL</strong><br><a href="https://www.yarabyte.com" target="_blank" rel="noopener noreferrer">www.yarabyte.com</a></p>

<h2>4. Hébergement</h2>
<p>Le site est hébergé par :</p>
<p><strong>Vercel Inc.</strong><br>440 N Barranca Ave #4133<br>Covina, CA 91723, États-Unis<br><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>

<h2>5. Propriété intellectuelle</h2>
<p>L'ensemble des éléments composant le site (textes, graphismes, logos, images, structure, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable de la Clinique Kerthan est interdite.</p>

<h2>6. Données personnelles</h2>
<p>Les informations collectées via le formulaire de contact (nom, e-mail, téléphone, message, etc.) sont utilisées uniquement pour répondre à vos demandes de rendez-vous ou d'information. Elles ne sont ni vendues ni cédées à des tiers.</p>
<p>Conformément à la réglementation en vigueur, vous pouvez exercer vos droits d'accès, de rectification et de suppression en écrivant à <a href="mailto:webmaster@kerthan.org">webmaster@kerthan.org</a>.</p>

<h2>7. Cookies</h2>
<p>Le site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire n'est déposé sans votre consentement.</p>

<h2>8. Limitation de responsabilité</h2>
<p>La Clinique Kerthan s'efforce d'assurer l'exactitude des informations publiées. Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou indisponibilité temporaire du service.</p>
<p>Les informations médicales présentes sur ce site ont une valeur informative : elles ne remplacent en aucun cas une consultation auprès d'un professionnel de santé.</p>

<h2>9. Liens hypertextes</h2>
<p>Le site peut contenir des liens vers des sites tiers. La Clinique Kerthan n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>

<h2>10. Droit applicable</h2>
<p>Les présentes mentions légales sont soumises au droit camerounais. En cas de litige, les tribunaux compétents de Douala seront seuls compétents, sous réserve des dispositions légales impératives.</p>

<p><em>Dernière mise à jour : janvier 2026</em></p>`,
  },
  maintenance: { enabled: false },
  blogSection: {
    eyebrow: "Actualités",
    title: "Blog & conseils santé",
    description:
      "Articles et informations de la clinique pour mieux comprendre votre santé et nos services.",
  },
  blogPosts: [
    {
      id: "blog-welcome",
      slug: "bienvenue-clinique-kerthan",
      title: "Bienvenue à la Clinique Kerthan",
      excerpt:
        "Depuis 2004, nous accueillons les familles de Bonaberi avec professionnalisme et compassion.",
      image: "/assets/blog/blog-bienvenue.jpg",
      publishedAt: "2026-01-10",
      body: "<p>La Clinique Kerthan est un établissement de santé privé situé à Bonaberi, Douala. Notre équipe pluridisciplinaire vous accompagne au quotidien : consultations, médecine interne, imagerie, laboratoire et urgences.</p><p>Nous plaçons l'humain au centre de chaque prise en charge — écoute, explication claire et suivi personnalisé.</p>",
      published: true,
    },
    {
      id: "blog-prevention",
      slug: "prevention-bilan-sante",
      title: "Prévention : pourquoi faire un bilan de santé ?",
      excerpt:
        "Un dépistage régulier permet de détecter tôt les facteurs de risque et d'adapter votre suivi médical.",
      image: "/assets/blog/blog-prevention.jpg",
      publishedAt: "2026-01-20",
      body: "<p>Le bilan de santé n'est pas réservé aux personnes malades. Il permet d'évaluer votre état général, de contrôler la tension, le diabète, le cholestérol et d'autres indicateurs importants.</p><p>Nos médecins vous conseillent sur la fréquence adaptée à votre âge et à vos antécédents. Prenez rendez-vous pour un premier échange.</p>",
      published: true,
    },
    {
      id: "blog-urgences",
      slug: "urgences-soins-24h",
      title: "Urgences : un service disponible 24h/24",
      excerpt:
        "En cas d'urgence médicale, notre équipe est mobilisée à toute heure pour vous prendre en charge rapidement.",
      image: "/assets/blog/blog-urgences.jpg",
      publishedAt: "2026-02-01",
      body: "<p>La Clinique Kerthan assure une permanence des soins 24 heures sur 24, 7 jours sur 7. En situation urgente, contactez-nous immédiatement ou présentez-vous à l'accueil.</p><p>Notre plateau technique et notre équipe médicale permettent une prise en charge rapide, en lien avec la médecine interne, le laboratoire et l'imagerie sur place.</p>",
      published: true,
    },
  ],
  teamMembers: [],
};
