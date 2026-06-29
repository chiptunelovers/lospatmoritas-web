const translations = {
  es: {
    'nav.game':        'Juego',
    'nav.music':       'Música',
    'nav.shows':       'Shows',
    'nav.contact':     'Contacto',

    'hero.subtitle':   'Juego original para NES · Cartucho físico',
    'hero.cta':        'Ver el juego',

    'game.title':      'Api The Cat',
    'game.desc1':      'Api The Cat es un juego de plataformas original para Nintendo Entertainment System (NES), publicado en cartucho físico por Los Pat Moritas. Seguís a Api por una ciudad nocturna llena de niveles inspirados en sonidos urbanos — desde pasillos de arcade hasta junglas suburbanas.',
    'game.desc2':      'Cartucho fabricado a mano · Compatible con NES y Famicom · Incluye 8 temas originales',
    'game.buy':        'Comprar en itch.io',
    'game.cartridge':  'El cartucho',
    'game.screenshots':'Capturas de pantalla',

    'music.title':     'Música',
    'music.desc':      'Cumbia chiptune hecha con hardware vintage — Game Boys, sintetizadores de 8 bits y ritmos latinoamericanos.',

    'shows.title':     'Shows',
    'shows.empty':     'Próximas fechas por confirmar.',

    'contact.title':   'Contacto',
    'contact.desc':    'Para shows, prensa o preguntas sobre el juego:',

    'footer.copy':     '© 2026 Los Pat Moritas',
  },
  en: {
    'nav.game':        'Game',
    'nav.music':       'Music',
    'nav.shows':       'Shows',
    'nav.contact':     'Contact',

    'hero.subtitle':   'Original NES game · Physical cartridge',
    'hero.cta':        'See the game',

    'game.title':      'Api The Cat',
    'game.desc1':      'Api The Cat is an original platformer for the Nintendo Entertainment System (NES), released on physical cartridge by Los Pat Moritas. You follow Api through a nocturnal city full of levels inspired by urban sounds — from arcade hallways to suburban jungles.',
    'game.desc2':      'Handmade cartridge · Compatible with NES and Famicom · Includes 8 original tracks',
    'game.buy':        'Buy on itch.io',
    'game.cartridge':  'The cartridge',
    'game.screenshots':'Screenshots',

    'music.title':     'Music',
    'music.desc':      'Chiptune cumbia made with vintage hardware — Game Boys, 8-bit synthesizers and Latin American rhythms.',

    'shows.title':     'Shows',
    'shows.empty':     'Upcoming dates to be confirmed.',

    'contact.title':   'Contact',
    'contact.desc':    'For shows, press or questions about the game:',

    'footer.copy':     '© 2026 Los Pat Moritas',
  }
};

function getLang() {
  return localStorage.getItem('lpm-lang') ||
    (navigator.language && navigator.language.startsWith('es') ? 'es' : 'en');
}

function setLang(lang) {
  localStorage.setItem('lpm-lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLang(lang);

  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = getLang();
      setLang(current === 'es' ? 'en' : 'es');
    });
  }
});
