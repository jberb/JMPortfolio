
import Img1 from '../../assets/Projects/barber.png';
import Img2 from '../../assets/Projects/calcu.png';
import Img3 from '../../assets/Projects/login.png';

const proData = [
    {
        id: 1,
        title: 'Barber Landing Page',
        description: 'A Simple React Website Design for a Barbershop.',
        imageUrl: Img1,
        links: [
          { url: 'https://github.com/jberb/Barbers', label: 'Github' },
          { url: 'https://barbers-beta.vercel.app/', label: 'Demo' },
        ],
       
      },
      {
        id: 2,
        title: 'Calculator',
        description: 'A Web App Vite react project of a Calculator',
        imageUrl: Img2,
        links: [
          { url: 'https://github.com/jberb/vite-calculator', label: 'Github' },
          { url: 'https://vite-calculator-flame.vercel.app/', label: 'Demo' },
        ],
      },
      {
        id: 2,
        title: 'Animated Login',
        description: 'Animated Login design using HTML,CSS,JavaScript',
        imageUrl: Img3,
        links: [
          { url: 'https://github.com/jberb/animateLogin', label: 'Github' },
          { url: 'https://animate-login.vercel.app/', label: 'Demo' },
        ],
      },
]
export default proData;
