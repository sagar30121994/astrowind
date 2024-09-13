import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('./'),
    },
    {
      text: 'Case Studies',
      links: [
        {
          text: 'Giftex',
          href: getPermalink('/#features'),
        },
        {
          text: 'Shopper App',
          href: getPermalink('/services'),
        },
        {
          text: 'Pharmadate',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Genericplus Pharmacy',
          href: getPermalink('/about'),
        },
      
      ],
    },
   
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Web Development', href: '#' },
        { text: 'Mobile Development', href: '#' },
        { text: 'UI/UX Design', href: '#' },
        { text: 'Digital Marketing', href: '#' },
        { text: 'IoT', href: '#' },
      
      ],
    },
   
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Blog', href: '#' },
        { text: 'Contact', href: '#' },
        { text:'\n'}
      ],
    },

    {
      title: 'Register Address',
      links: [
        { text: 'AppSchedio Corp, S.No.-31/4/31/5, Plot No-12/13/2, Karale Mala, Nepti Road, Kedgaon, Ahmednagar, Maharashtra, 414001', href: '#' },
      ],
    },

  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],

};
