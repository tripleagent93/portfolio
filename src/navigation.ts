import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/#about' },
    { text: 'Experience', href: '/#resume' },
    { text: 'Case Studies', href: '/#portfolio' },
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
    {
      ariaLabel: 'Figma',
      icon: 'tabler:brand-figma',
      href: 'https://www.figma.com/design/8C149Ck2shVdm5d5HKkt7c/CreditWise?node-id=141-24&t=F3qBTpq6pE3ukny1-1',
    },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/tripleagent93' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/max-otk/' },
  ],
  footNote: `
    &copy; ${year} Max Otk. All rights reserved.
  `,
};
