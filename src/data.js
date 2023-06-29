import image1 from './images/tour-1.jpeg';
import image2 from './images/tour-2.jpeg';
import image3 from './images/tour-3.jpeg';
import image4 from './images/tour-4.jpeg';
import image5 from './images/tour-5.jpeg';
import image6 from './images/tour-6.jpeg';

export const pageLink = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', class: 'twitter' },
  { id: 2, href: 'https://www.facebook.com', class: 'facebook' },
  { id: 3, href: 'https://www.twitter.com', class: 'squarespace' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'We provide the service of saving money for your tours',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'With us you will get to hike as much as you like',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Comfort is what we do best in our tours',
  },
];

export const tourDetails = [
  {
    id: 1,
    image: image1,
    tourDate: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'china',
    price: 'from $2100',
    duration: '6 days',
  },
  {
    id: 2,
    image: image2,
    tourDate: 'october 1th, 2020',
    title: 'best of java',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'indonesia',
    price: 'from $1400',
    duration: '11 days',
  },
  {
    id: 3,
    image: image3,
    tourDate: 'september 15th, 2020',
    title: 'explore hong kong',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'hond kong',
    price: 'from $5000',
    duration: '8 days',
  },
  {
    id: 4,
    image: image4,
    tourDate: 'december 5th, 2019',
    title: 'kenya highlights',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'kenya',
    price: 'from $3300',
    duration: '20 days',
  },
  {
    id: 5,
    image: image5,
    tourDate: 'April 27th, 2024',
    title: 'Brazil Adventure',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'Brazil',
    price: 'from $6300',
    duration: '15 days',
  },
  {
    id: 6,
    image: image6,
    tourDate: 'august 26th, 2023',
    title: 'Tour of India',
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: 'India',
    price: 'from $2900',
    duration: '20 days',
  },
];
