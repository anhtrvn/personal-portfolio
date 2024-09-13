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
import { SiMazda } from 'react-icons/si';

export const education = [
  {
    title: 'Capstone Project @ Halliburton',
    description: "Spring '24",
    image: <FontAwesomeIcon icon={faLaptopCode} />,
  },
  {
    title: 'Computer Science @ University of Houston',
    description: "Aug '20 - May '24",
    image: <FontAwesomeIcon icon={faGraduationCap} />,
  },
];

export const hobbies = [
  {
    title: 'cat mom of two',
    description: 'the cats coded this site actually',
    image: [
      <FontAwesomeIcon icon={faCat} />,
      <FontAwesomeIcon icon={faCat} flip='horizontal' />,
    ],
  },
  {
    title: 'powerbuilding',
    description: 'caffeine and protein only diet',
    image: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    title: 'auto',
    description: 'stutututu',
    image: <SiMazda />,
  },
  {
    title: 'game',
    description: 'currently making spaghetti in Undertale',
    image: <FontAwesomeIcon icon={faGamepad} />,
  },
  {
    title: 'art',
    description: 'creativity cannot be crushed',
    image: <FontAwesomeIcon icon={faPalette} />,
  },
];
