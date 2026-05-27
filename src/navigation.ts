import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Experience', href: '#resume' },
    { text: 'Case Studies', href: '#portfolio' },
    { text: 'Github', href: 'https://github.com/tripleagent93', target: '_blank' },
  ],
};

const year = new Date().getFullYear();

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/max-otk/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/tripleagent93' },
  ],
  footNote: `
    &copy; ${year} Max Otk. All rights reserved.
  `,
};
