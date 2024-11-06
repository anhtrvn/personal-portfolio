import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLaptopCode,
  faCat,
  faDumbbell,
  faCarSide,
  faGamepad,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

export const education = [
  {
    title: 'Capstone Project @ Halliburton',
    description: "Jan - May '24",
    image: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    title: 'Computer Science, B.S. @ University of Houston',
    description: "Aug '20 - May '24",
    image: <FontAwesomeIcon icon={faGraduationCap} />,
  },
];

export const about = [
  {
    title: 'cat mom of two',
    description: 'yuumi & momo',
    image: [
      <FontAwesomeIcon icon={faCat} />,
      <FontAwesomeIcon icon={faCat} flip='horizontal' />,
    ],
  },
  {
    title: 'powerbuilding',
    description: 'fueled by caffeine, protein, and heavy lifts',
    image: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    title: 'cars & motobikes',
    description: 'adrenaline chaser on wheels',
    image: <FontAwesomeIcon icon={faCarSide} />,
  },
  {
    title: 'gaming',
    description: 'currently making spaghetti in Undertale',
    image: <FontAwesomeIcon icon={faGamepad} />,
  },
  {
    title: 'art',
    description: 'design and attention to detail',
    image: <FontAwesomeIcon icon={faPalette} />,
  },
];
