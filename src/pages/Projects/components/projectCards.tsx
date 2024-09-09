import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import {
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiMongodb,
  SiMongoosedotws,
} from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoUnity,
} from 'react-icons/bi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';

import etl from '../../../assets/images/projects/etl.png';
import fuelquote from '../../../assets/images/projects/fuelquote.png';
import survive from '../../../assets/images/projects/survive.jpg';
import portfolio from '../../../assets/images/projects/portfolio.png';

export const projectCards = [
  {
    title: 'ETL Pipeline Manager',
    date: "Spring '24",
    description: [
      '@ Halliburton',
      'A web application designed to manage, monitor, and schedule ETL jobs efficiently, enabling users to handle and visualize data pipelines with ease.',
    ],
    techs: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: 'react',
      },
      {
        icon: <SiExpress />,
        name: 'express.js',
      },
      {
        icon: <BiLogoTypescript />,
        name: 'typescript',
      },
      {
        icon: <RiTailwindCssFill />,
        name: 'tailwind.css',
      },
      {
        icon: <SiMongodb />,
        name: 'mongodb',
      },
      {
        icon: <SiMongoosedotws />,
        name: 'mongoose',
      },
      {
        icon: <TbBrandMysql />,
        name: 'mysql',
      },
      {
        icon: <BiLogoPostgresql />,
        name: 'postgresql',
      },
    ],
    source: '',
    image: etl,
  },
  {
    title: 'Fuel Quote Portal',
    date: "Fall '23",
    description: [
      'A full-stack website allowing users to create accounts, request fuel quotes based on gallons, and review previous quote requests and account information.',
    ],
    techs: [
      {
        icon: <RiNextjsFill />,
        name: 'next.js',
      },
      {
        icon: <SiExpress />,
        name: 'express.js',
      },
      {
        icon: <BiLogoTypescript />,
        name: 'typescript',
      },
      {
        icon: <RiTailwindCssFill />,
        name: 'tailwind.css',
      },
      {
        icon: <SiMongodb />,
        name: 'mongodb',
      },
    ],
    source: 'https://github.com/anhtrvn/fuel-quote-website',
    image: fuelquote,
  },
  {
    title: 'Survive',
    date: "Fall '21",
    description: [
      'A 3D fantasy action side-scrolling game featuring dynamic environments and engaging combat mechanics, where players fight enemies and progress through multiple levels.',
    ],
    techs: [
      {
        icon: <SiCsharp />,
        name: 'c#',
      },
      {
        icon: <BiLogoUnity />,
        name: 'unity',
      },
    ],
    source: 'http://youtu.be/Q9Z-05qVYfE?si=iqy_ot8zGaKYof7t',
    image: survive,
  },
  {
    title: 'Personal Portfolio',
    date: "Summer '22",
    description: [
      'My personal website built to showcase projects and skills, independently learning and implementing modern web development technologies.',
    ],
    techs: [
      {
        icon: <FontAwesomeIcon icon={faReact} />,
        name: 'react',
      },
      {
        icon: <BiLogoTypescript />,
        name: 'typescript',
      },
      {
        icon: <RiTailwindCssFill />,
        name: 'tailwind.css',
      },
    ],
    source: 'https://github.com/anhtrvn/personal-portfolio',
    image: portfolio,
  },
  {
    title: 'CompSci Tutor',
    date: "Sep '22 - Dec '23",
    description: [
      '@ UofH ConocoPhillips CompSci Learning Center',
      'Individualized tutoring for introductory CompSci courses, focusing on fundamental programming concepts and problem-solving skills.',
    ],
    techs: [
      {
        icon: <FontAwesomeIcon icon={faPython} />,
        name: 'python',
      },
      {
        icon: <SiCplusplus />,
        name: 'c++',
      },
    ],
    source: 'https://www.uh.edu/nsm/computer-science/undergraduate/tutoring/',
    image:
      'https://www.uh.edu/news-events/stories/2024/august/_images/uh-conocophillips-hero.jpg',
  },
];
