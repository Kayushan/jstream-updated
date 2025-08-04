// import type { FooterItem, MainNavItem } from "@/types"
//
// import { productCategories } from "@/config/products"
// import { slugify } from "@/lib/utils"

import { Icons } from '@/components/icons';
import { env } from '@/env.mjs';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Jstream',
  author: 'Jstream',
  slogan: 'Stream Your World, Anywhere, Anytime.',
  description:
    'Jstream - Your premium streaming destination. Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  keywords: [
    'Jstream',
    'streaming platform',
    'watch movies',
    'movies online',
    'watch TV',
    'TV online',
    'TV shows online',
    'watch TV shows',
    'stream movies',
    'stream tv',
    'instant streaming',
    'watch online',
    'movies',
    'watch TV online',
    'no download',
    'full length movies',
    'premium streaming',
    'stream anywhere',
  ],
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/images/hero.jpg`,
  links: {
    twitter: `${env.NEXT_PUBLIC_TWITTER}`,
    github: 'https://github.com/your-username/jstream',
    githubAccount: '',
  },
  socialLinks: [
    {
      title: 'Facebook',
      href: `${env.NEXT_PUBLIC_FACEBOOK}`,
      icon: Icons.facebook,
    },
    {
      title: 'Instagram',
      href: `${env.NEXT_PUBLIC_INSTAGRAM}`,
      icon: Icons.instagram,
    },
    {
      title: 'Twitter',
      href: `${env.NEXT_PUBLIC_TWITTER}`,
      icon: Icons.twitter,
    },
    {
      title: 'Youtube',
      href: `${env.NEXT_PUBLIC_YOUTUBE}`,
      icon: Icons.youtube,
    },
  ],
  footerItems: [],
  mainNav: [
    {
      title: 'Home',
      href: '/home',
      // icon: Icons.play,
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      // icon: Icons.tvShow,
    },
    {
      title: 'Movies',
      href: '/movies',
      // icon: Icons.movie,
    },
    {
      title: 'Anime',
      href: '/anime',
      // icon: Icons.list,
    },
    {
      title: 'New & Popular',
      href: '/new-and-popular',
      // icon: Icons.trendingUp,
    },
    {
      title: 'About',
      href: '/about',
      // icon: Icons.info,
    },
  ],
};
