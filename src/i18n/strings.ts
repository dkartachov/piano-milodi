// All visible text lives here, in English and French.
// To change wording, edit the matching key in both `en` and `fr`.

export type Lang = 'en' | 'fr';
export const languages: Lang[] = ['en', 'fr'];
export const defaultLang: Lang = 'en';

// Page slugs per language. Used for the links and the EN / FR switcher.
export const routes = {
  home: { en: '/', fr: '/fr/' },
  about: { en: '/about', fr: '/fr/a-propos' },
  contact: { en: '/contact', fr: '/fr/contact' },
  events: { en: '/events', fr: '/fr/evenements' },
} as const;

export type PageKey = keyof typeof routes;

export function localePath(lang: Lang, page: PageKey): string {
  return routes[page][lang];
}

const en = {
  htmlLang: 'en',
  nav: { home: 'Home', about: 'About', contact: 'Contact', events: 'Events' },
  brandTagline: 'Do, Ré, Milodi',
  subtitle: 'Private Piano Lessons',
  switchTo: { label: 'Français', short: 'FR' },
  siteDescription:
    'Piano lessons in Pointe-Claire with Maria. Personalized lessons, music reading, RCM curriculum and twice-yearly recitals.',

  home: {
    heroEyebrow: 'Piano lessons in Pointe-Claire',
    heroTitle: 'Learn piano with joy, at your own pace.',
    heroText:
      'Personalized lessons for beginners, young students and adults, with a strong focus on reading music and making practice fun.',
    heroCta: 'Book a free trial lesson',
    heroCtaSecondary: 'See pricing',

    trialTitle: 'Free Trial Lesson',
    trialHowTitle: 'How to book your free trial lesson',
    trialHowText: 'Simply contact me and we can schedule your lesson at a time that’s convenient for you.',
    trialLength: 'The free trial lesson lasts 30 minutes.',
    bringTitle: 'Do I need to bring anything?',
    bringBeginner:
      'If you’re a beginner, everything you need for your trial lesson will be provided by me for free.',
    bringReturning:
      'If you previously played piano, bring the latest books or sheet music you used.',
    duringTitle: 'What do we do during a trial lesson?',
    duringText:
      'There are usually a lot of questions! I will ask you about your knowledge and your goals so I can adjust my teaching style to your needs. It’s also a great time to ask me all your questions! If you are a beginner, you will learn your first piece! If you already play, we will continue where you left off or start something new. It’s up to you!',

    pricingTitle: 'Pricing',
    plans: [
      { duration: '30 minutes', price: '25$', note: 'Perfect for beginners and young students' },
      { duration: '45 minutes', price: '35$', note: 'Ideal for intermediate students and adult beginners' },
      { duration: '60 minutes', price: '45$', note: 'For intermediate to advanced students' },
    ],

    whyTitle: 'Why Choose Piano Milodi?',
    reasons: [
      {
        title: 'Personalized piano lessons',
        text: 'I have a personalized approach for every student to better achieve their goals while keeping lessons and practicing fun.',
      },
      {
        title: 'Mandatory learning',
        text: 'All Piano Milodi students will learn to read notes and will learn music theory that matches their level, so that they can become accomplished musicians. In my opinion, being able to read music well is extremely important, since it allows a learner to become more independent and practice better at home.',
      },
      {
        title: 'RCM Program',
        text: 'I can teach using the Royal Conservatory of Music of Toronto (RCM) curriculum, which will allow you to pass examinations and get certificates for each level. There is also the option to learn using the program, but not doing the examinations. It all depends on what you want.',
      },
      {
        title: 'Recitals every year',
        text: 'I organize 2 recitals every year in collaboration with Musamuse Music School, in June and in December. All students are welcome to participate.',
      },
    ],
    ctaTitle: 'Ready to start?',
    ctaText: 'Send me a message and we’ll find a time for your free trial lesson.',
    ctaButton: 'Contact me',
  },

  about: {
    eyebrow: 'About',
    title: 'Meet your teacher',
    introTitle: 'Hi, I’m Maria!',
    intro:
      'I’ve been teaching piano since 2014. I love sharing my love for music and seeing my students progress every week.',
    hobbies:
      'Some of my hobbies include playing music (obviously), reading, playing video games and spending time with my dog.',
    storyTitle: 'My Story',
    story: [
      'It all started with my grandmother wanting to have music in her home. She took my mother to a piano teacher and, a few years later, signed my uncle up for guitar classes. The guitar teacher ended up becoming my dad. So, I grew up surrounded by music.',
      'I would sit under the piano while my mom practiced and dreamed about the day I would be able to play like her. She got me started at the age of 6 and I never stopped since. I followed in her footsteps and started teaching as soon as I was ready, teaching students of all ages.',
    ],
    ctaTitle: 'Want to learn with me?',
    ctaButton: 'Book a free trial lesson',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact',
    text: 'For any questions, to book a trial lesson or to reschedule a class.',
    hoursTitle: 'Class Hours',
    hours: [
      { day: 'Monday', time: '9:00 am - 9:00 pm' },
      { day: 'Tuesday', time: '7:00 pm - 9:00 pm' },
      { day: 'Wednesday', time: 'Closed' },
      { day: 'Thursday', time: '9:00 am - 9:00 pm' },
      { day: 'Friday', time: '9:00 am - 9:00 pm' },
      { day: 'Saturday', time: 'Closed*' },
      { day: 'Sunday', time: '9:00 am - 1:00 pm' },
    ],
    hoursNote: '*Availabilities starting in September',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    mapTitle: 'Find us on the map',
    formTitle: 'Send a message',
    form: {
      name: 'Your name',
      email: 'Email',
      phone: 'Phone (optional)',
      message: 'Message',
      messagePlaceholder: 'Tell me about your goals, your experience, or the times that work for you.',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Thank you! Your message was sent. I’ll get back to you soon.',
      error: 'Something went wrong. Please try again, or contact me directly by phone or email.',
    },
  },

  events: {
    title: 'Events',
    upcoming: 'Upcoming',
    past: 'Past events',
    empty: 'No upcoming events right now. Check back soon!',
    concertLabel: 'Concert',
    venueLabel: 'Venue',
  },

  footer: {
    rights: 'All rights reserved.',
    navTitle: 'Explore',
    contactTitle: 'Contact',
  },

  notFound: {
    title: 'Page not found',
    text: 'Sorry, we couldn’t find that page.',
    back: 'Back to home',
  },
};

const fr: typeof en = {
  htmlLang: 'fr',
  nav: { home: 'Accueil', about: 'À propos', contact: 'Contact', events: 'Événements' },
  brandTagline: 'Do, Ré, Milodi',
  subtitle: 'Cours de piano privés',
  switchTo: { label: 'English', short: 'EN' },
  siteDescription:
    'Cours de piano à Pointe-Claire avec Maria. Cours personnalisés, lecture musicale, programme RCM et récitals deux fois par année.',

  home: {
    heroEyebrow: 'Cours de piano à Pointe-Claire',
    heroTitle: 'Apprenez le piano avec plaisir, à votre rythme.',
    heroText:
      'Des cours personnalisés pour les débutants, les jeunes élèves et les adultes, avec un accent sur la lecture musicale et une pratique agréable.',
    heroCta: 'Réserver un cours d’essai gratuit',
    heroCtaSecondary: 'Voir les tarifs',

    trialTitle: 'Cours d’essai gratuit',
    trialHowTitle: 'Comment réserver votre cours d’essai gratuit',
    trialHowText:
      'Communiquez simplement avec moi et nous fixerons un moment qui vous convient.',
    trialLength: 'Le cours d’essai dure 30 minutes.',
    bringTitle: 'Dois-je apporter quelque chose ?',
    bringBeginner:
      'Si vous êtes débutant, je fournirai gratuitement tout le nécessaire pour votre cours d’essai.',
    bringReturning:
      'Si vous avez déjà joué du piano, apportez les derniers livres ou partitions que vous avez utilisés.',
    duringTitle: 'Que fait-on pendant un cours d’essai ?',
    duringText:
      'Il y a généralement beaucoup de questions ! Je vous demanderai vos connaissances et vos objectifs afin d’adapter mon enseignement à vos besoins. C’est aussi le moment idéal pour me poser toutes vos questions ! Si vous êtes débutant, vous apprendrez votre première pièce ! Si vous jouez déjà, nous reprendrons là où vous en étiez ou nous commencerons quelque chose de nouveau. C’est vous qui décidez !',

    pricingTitle: 'Tarifs',
    plans: [
      { duration: '30 minutes', price: '25 $', note: 'Parfait pour les débutants et les jeunes élèves' },
      { duration: '45 minutes', price: '35 $', note: 'Idéal pour les élèves intermédiaires et les adultes débutants' },
      { duration: '60 minutes', price: '45 $', note: 'Pour les élèves intermédiaires à avancés' },
    ],

    whyTitle: 'Pourquoi choisir Piano Milodi ?',
    reasons: [
      {
        title: 'Cours de piano personnalisés',
        text: 'J’adopte une approche personnalisée pour chaque élève afin de mieux atteindre ses objectifs, tout en gardant les cours et la pratique agréables.',
      },
      {
        title: 'Apprentissage de la lecture musicale',
        text: 'Tous les élèves de Piano Milodi apprendront à lire les notes et la théorie musicale adaptée à leur niveau, afin de devenir des musiciens accomplis. À mon avis, savoir bien lire la musique est essentiel : cela permet à l’élève d’être plus autonome et de mieux pratiquer à la maison.',
      },
      {
        title: 'Programme RCM',
        text: 'J’enseigne selon le programme du Royal Conservatory of Music de Toronto (RCM), ce qui vous permet de passer des examens et d’obtenir un certificat pour chaque niveau. Il est aussi possible de suivre le programme sans passer les examens. Tout dépend de ce que vous recherchez.',
      },
      {
        title: 'Récitals chaque année',
        text: 'J’organise 2 récitals par année en collaboration avec l’École de musique Musamuse, en juin et en décembre. Tous les élèves sont les bienvenus pour y participer.',
      },
    ],
    ctaTitle: 'Prêt à commencer ?',
    ctaText: 'Envoyez-moi un message et nous trouverons un moment pour votre cours d’essai gratuit.',
    ctaButton: 'Me contacter',
  },

  about: {
    eyebrow: 'À propos',
    title: 'Faites la connaissance de votre professeure',
    introTitle: 'Bonjour, je suis Maria !',
    intro:
      'J’enseigne le piano depuis 2014. J’aime partager ma passion pour la musique et voir mes élèves progresser chaque semaine.',
    hobbies:
      'Parmi mes passe-temps, il y a bien sûr la musique, la lecture, les jeux vidéo et le temps passé avec mon chien.',
    storyTitle: 'Mon histoire',
    story: [
      'Tout a commencé lorsque ma grand-mère a voulu avoir de la musique à la maison. Elle a inscrit ma mère à des cours de piano et, quelques années plus tard, mon oncle à des cours de guitare. Le professeur de guitare est finalement devenu mon père. J’ai donc grandi entouré de musique.',
      'Je m’asseyais sous le piano pendant que ma mère pratiquait, en rêvant du jour où je pourrais jouer comme elle. Elle m’a initiée à l’âge de 6 ans, et je n’ai jamais arrêté depuis. J’ai suivi ses traces et j’ai commencé à enseigner dès que j’en ai été capable, auprès d’élèves de tous âges.',
    ],
    ctaTitle: 'Envie d’apprendre avec moi ?',
    ctaButton: 'Réserver un cours d’essai gratuit',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact',
    text: 'Pour toute question, pour réserver un cours d’essai ou pour reprogrammer un cours.',
    hoursTitle: 'Heures d’ouverture',
    hours: [
      { day: 'Lundi', time: '9 h 00 - 21 h 00' },
      { day: 'Mardi', time: '19 h 00 - 21 h 00' },
      { day: 'Mercredi', time: 'Fermé' },
      { day: 'Jeudi', time: '9 h 00 - 21 h 00' },
      { day: 'Vendredi', time: '9 h 00 - 21 h 00' },
      { day: 'Samedi', time: 'Fermé*' },
      { day: 'Dimanche', time: '9 h 00 - 13 h 00' },
    ],
    hoursNote: '*Disponibilités à partir de septembre',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    emailLabel: 'Courriel',
    mapTitle: 'Trouvez-nous sur la carte',
    formTitle: 'Envoyer un message',
    form: {
      name: 'Votre nom',
      email: 'Courriel',
      phone: 'Téléphone (facultatif)',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de vos objectifs, de votre expérience ou des moments qui vous conviennent.',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours…',
      success: 'Merci ! Votre message a été envoyé. Je vous répondrai bientôt.',
      error: 'Une erreur est survenue. Veuillez réessayer, ou communiquez directement avec moi par téléphone ou par courriel.',
    },
  },

  events: {
    title: 'Événements',
    upcoming: 'À venir',
    past: 'Événements passés',
    empty: 'Aucun événement à venir pour le moment. Revenez bientôt !',
    concertLabel: 'Concert',
    venueLabel: 'Lieu',
  },

  footer: {
    rights: 'Tous droits réservés.',
    navTitle: 'Explorer',
    contactTitle: 'Contact',
  },

  notFound: {
    title: 'Page introuvable',
    text: 'Désolé, nous n’avons pas trouvé cette page.',
    back: 'Retour à l’accueil',
  },
};

export const t = { en, fr } as const;
export type Strings = typeof en;
