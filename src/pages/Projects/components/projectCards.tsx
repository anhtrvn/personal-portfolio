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

export const projectCards = [
  {
    title: 'ETL Pipeline Manager',
    date: "Spring '24",
    description: [
      '@ Halliburton',
      'Developed an ETL Data Pipeline Manager web app for managing ETL jobs efficiently.',
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
    image:
      'https://starecat.com/content/wp-content/uploads/cat-why-is-this-empty-food-bowl-with-food-in-it.jpg',
  },
  {
    title: 'Fuel Quoting App',
    date: "Fall '23",
    description: [
      'A fullstack website enabling users to register accounts, request fuel quotes based on gallons, and access previous quote requests and personal information.',
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
    image:
      'https://starecat.com/content/wp-content/uploads/cat-why-is-this-empty-food-bowl-with-food-in-it.jpg',
  },
  {
    title: 'Action Side-Scrolling Game',
    date: "Fall '21",
    description: ['A 3D fantasy game with action side-scrolling mechanics.'],
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
    image:
      'https://starecat.com/content/wp-content/uploads/cat-why-is-this-empty-food-bowl-with-food-in-it.jpg',
  },
  {
    title: 'Computer Science Tutor',
    date: "Sep '22 - Dec '23",
    description: [
      '@ UH ConocoPhillips CS Learning Center',
      'Provided individualized tutoring sessions for Computer Science intro courses.',
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
    image:
      'https://starecat.com/content/wp-content/uploads/cat-why-is-this-empty-food-bowl-with-food-in-it.jpg',
  },
];
