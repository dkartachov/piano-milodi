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
    'Piano lessons in L’Île-Perrot with Maria. Personalized lessons, music reading, RCM curriculum and twice-yearly recitals.',

  home: {
    heroEyebrow: 'Piano lessons in L’Île-Perrot',
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
        // `label` must appear word for word in `text`: that part of the sentence becomes the link.
        link: { label: 'Musamuse Music School', url: 'https://www.musamuse.com/' },
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
  nav: { home: 'Accueil', about: 'À propos', contact: 'Contact', events: 'Évènements' },
  brandTagline: 'Do, Ré, Milodi',
  subtitle: 'Cours privés de piano',
  switchTo: { label: 'English', short: 'EN' },
  siteDescription:
    'Cours de piano à L’Île-Perrot avec Maria. Cours personnalisés, lecture musicale, programme RCM et récitals deux fois par année.',

  home: {
    heroEyebrow: 'Cours de piano à L’Île-Perrot',
    heroTitle: 'Apprenez le piano avec plaisir, à votre rythme.',
    heroText:
      'Des cours personnalisés pour les débutants, les jeunes élèves et les adultes, avec un accent sur la lecture musicale et une pratique agréable.',
    heroCta: 'Réserver un cours d’essai gratuit',
    heroCtaSecondary: 'Voir les tarifs',

    trialTitle: 'Cours d’essai gratuit',
    trialHowTitle: 'Prendre rendez-vous pour un cours d’essai',
    trialHowText:
      'Veuillez me contacter et nous fixerons un rendez-vous à un temps convenable pour vous.',
    trialLength: 'Le cours d’essai gratuit a une durée de 30 minutes.',
    bringTitle: 'Que dois-je apporter?',
    bringBeginner:
      'Si vous êtes débutant, vous n’apportez rien. J’aurai tout ce dont vous aurez besoin pour le cours, sans frais.',
    bringReturning:
      'Si vous jouez déjà du piano, veuillez apporter le matériel que vous avez utilisé récemment pour apprendre.',
    duringTitle: 'Que fait-on pendant un cours d’essai?',
    duringText:
      'Il y a toujours beaucoup de questions! Je vous questionnerai sur vos connaissances de la musique et sur vos objectifs pour pouvoir personnaliser ma méthode d’enseignement à vos besoins. C’est aussi le moment parfait pour me poser toutes vos questions! Si vous êtes un débutant, vous apprendrez votre première pièce! Si vous avez de l’expérience, nous continuerons là où vous avez arrêté, ou nous commencerons quelque chose de nouveau. Tout dépend de vos préférences!',

    pricingTitle: 'Tarifs',
    plans: [
      { duration: '30 minutes', price: '25$', note: 'Parfait pour les débutants et les étudiants de jeune âge.' },
      { duration: '45 minutes', price: '35$', note: 'Idéal pour les élèves de niveau intermédiaire et adultes débutants' },
      { duration: '60 minutes', price: '45$', note: 'Pour les étudiants de niveau intermédiaire ou avancé' },
    ],

    whyTitle: 'Pourquoi choisir Piano Milodi?',
    reasons: [
      {
        title: 'Cours de piano personnalisés',
        text: 'J’adapte ma méthode d’enseignement pour chaque étudiant afin de mieux réussir à atteidre vos buts tout en gardant les cours et les pratiques amusants.',
      },
      {
        title: 'Apprentissages incontournables',
        text: 'Tous les étudiants de Piano Milodi apprendront à lire les notes, ainsi que la théorie musicale adaptée à leur niveau. Ceci leur permettra de devenir des musiciens accomplis. Selon moi, la capacité de bien lire la musique est essentielle, puisqu’elle permet à l’étudiant de devenir plus indépendant et lui permet de mieux pratiquer entre les cours.',
      },
      {
        title: 'Programme RCM',
        text: 'Je peux enseigner en suivant le curriculum du Royal Conservatory of Music of Toronto (RCM), qui vous permet de passer des examens et de recevoir un diplôme pour chaque niveau. Il est aussi bien sûr possible d’apprendre avec ce programme sans passer les examens. Tout dépend de votre préférence.',
      },
      {
        title: 'Concerts annuels',
        text: 'Nous organisons 2 concerts chaque année en collaboration avec l’école de musique Musamuse, en Juin et en Décembre. Tous les étudiants qui désirent participer sont les bienvenus.',
        link: { label: 'l’école de musique Musamuse', url: 'https://www.musamuse.com/' },
      },
    ],
    ctaTitle: 'Prêt à commencer ?',
    ctaText: 'Envoyez-moi un message et nous trouverons un moment pour votre cours d’essai gratuit.',
    ctaButton: 'Me contacter',
  },

  about: {
    eyebrow: 'À propos',
    title: 'Votre prof',
    introTitle: 'Salut! Moi, c’est Maria!',
    intro:
      'J’enseigne le piano depuis 2014. J’adore partager mon amour de la musique et voir les progrès de mes élèves chaque semaine.',
    hobbies:
      'Certains de mes passe-temps sont: jouer de la musique (évidemment), la lecture, les jeux vidéo et passer du temps avec mon chien.',
    storyTitle: 'Mon histoire',
    story: [
      'Tout a commencé avec le rêve de ma grand-mère d’entendre de la musique dans sa maison. Elle a inscrit ma mère à des cours de piano et, quelques années plus tard, mon oncle à des cours de guitare. Le prof de guitare de mon oncle est devenu mon père. Donc, j’ai grandi entourée par la musique.',
      'Quand j’étais petite, je m’assoyais sous le piano pendant que ma mère pratiquait et je rêvais du jour où je jouerais du piano aussi bien qu’elle. Elle a commencé à m’apprendre à jouer du piano à l’âge de 6 ans et je n’ai jamais arrêté. J’ai suivi le même cheminement de carrière qu’elle et j’ai commencé à enseigner dès que j’étais prête, à des élèves de tous âges.',
    ],
    ctaTitle: 'Envie d’apprendre avec moi ?',
    ctaButton: 'Réserver un cours d’essai gratuit',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Contact',
    text: 'Pour toute question, pour un cours d’essai ou pour reporter un cours',
    hoursTitle: 'Heures de cours',
    hours: [
      { day: 'Lundi', time: '9h00 - 21h00' },
      { day: 'Mardi', time: '19h00 - 21h00' },
      { day: 'Mercredi', time: 'Fermé' },
      { day: 'Jeudi', time: '9h00 - 21h00' },
      { day: 'Vendredi', time: '9h00 - 21h00' },
      { day: 'Samedi', time: 'Fermé*' },
      { day: 'Dimanche', time: '9h00 - 13h00' },
    ],
    hoursNote: '*Disponibilités à partir de Septembre',
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
      submit: 'Envoyer',
      sending: 'Envoi en cours…',
      success: 'Merci de nous avoir contacté!',
      error: 'Une erreur est survenue. Veuillez réessayer, ou communiquez directement avec moi par téléphone ou par courriel.',
    },
  },

  events: {
    title: 'Évènements',
    upcoming: 'À venir',
    past: 'Évènements passés',
    empty: 'Aucun évènement à venir pour le moment. Revenez bientôt!',
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
