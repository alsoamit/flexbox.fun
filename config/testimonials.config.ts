import { TESTIMONIAL_CLIENT_LOGOS } from './cms.config';

interface ITestimonial {
  id: number;
  statement: string;
  author: string;
  company: string;
  avatar: string;
}

export const TESTIMONIANLS: ITestimonial[] = [
  {
    id: 1,
    statement:
      'The team responded well to our suggestions as the project matured, and we are happy with how the visualization turned out!It’s been a cool project and excited to see our visions unfold in ways I didn’t think was possible.',
    author: 'Gitte Mejlhede',
    company: 'LM Wind Power',
    avatar: TESTIMONIAL_CLIENT_LOGOS['Gitte'],
  },
  {
    id: 2,
    statement:
      'Well crafted immersive digital experience by Exhibit 360 where they delivered an innovative top class creative platform. This initiative has set very high benchmarks for us.',
    author: 'Amit Tiwari',
    company: 'WAGO India',
    avatar: TESTIMONIAL_CLIENT_LOGOS['Amit Tiwari'],
  },
  {
    id: 3,
    statement:
      'The project output was very good, and we were quite impressed with Exhibit 360. They exceeded expectations with their creativity, conceptualisation, and render realisation skills, which were really good.',
    author: 'Veronika Kamenicka',
    company: 'Innio',
    avatar: TESTIMONIAL_CLIENT_LOGOS['Veronika'],
  },
];
