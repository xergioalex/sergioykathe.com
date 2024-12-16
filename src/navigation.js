import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Sobre nosotros',
      href: '/about',
    },
  ],
  actions: [{ text: 'Contacto', href: '/contact' }],
};

export const eventsHeaderData = {
  links: [
    {
      text: 'Link 1',
      href: '/link1',
    },
    {
      text: 'Link 2',
      href: '/link2',
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: 'https://chat.whatsapp.com/EzYAadvUWyVBHt3m1FU77U',
      target: '_blank',
    },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/sergioykathe', target: '_blank' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/sergioykathe', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/sergioykathe/',
      target: '_blank',
    },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/@sergioykathe',
      target: '_blank',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/sergio-y-kathe/',
      target: '_blank',
    },
  ],
  footNote: `
    Based on <a href="https://github.com/onwidget/astrowind" target="_blank" rel="noopener noreferrer"><b>AstroWind</b></a> · Made with ♥️  by <a href="https://xergioalex.com" target="_blank" rel="noopener noreferrer"><b>XergioAleX</b></a> Team · All rights reserved.
  `,
  links: [
    {
      title: 'Links',
      links: [
        { text: 'Link1', href: 'https://link1.com/' },
        { text: 'Link2', href: 'https://link2.com/' },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Sobre nosotros', href: getPermalink('/sobre-nosotros') }],
};
