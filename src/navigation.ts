import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About Me',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'UCI Rocket Project',
          href: getPermalink('/projects/ucirp'),
        },
        {
          text: 'Orbital Mechanics',
          href: getPermalink('/projects/orbital_mechanics'),
        },
        {
          text: 'FWMAV',
          href: getPermalink('/projects/fwmav'),
        },
        {
          text: 'Other Projects',
          href: getPermalink('/projects/other'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/in/caden-mccarthy', target: '_blank' },
    { ariaLabel: 'Linktree', icon: 'tabler:brand-linktree', href: 'https://linktree.com/cadenmccarthy', target: '_blank' },
  ],
  footNote: `
    <div class="flex flex-col">
      <span class="text-xl font-bold">Caden McCarthy</span>
      <span class="text-sm text-gray-600 dark:text-gray-400 mt-1">Aerospace Engineering Student at UC Irvine</span>
    </div>
  `,
};
