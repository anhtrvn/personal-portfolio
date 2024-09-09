import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faLaptopCode,
  faCat,
  faDumbbell,
  faCarSide,
  faMotorcycle,
  faGamepad,
  faVestPatches,
} from '@fortawesome/free-solid-svg-icons';

export const education = [
  {
    title: 'Capstone @ Halliburton',
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
    description: 'they coded this site actually',
    image: [
      <FontAwesomeIcon icon={faCat} />,
      <FontAwesomeIcon icon={faCat} flip='horizontal' />,
    ],
  },
  {
    title: 'powerbuilding enjoyer',
    description: 'caffeine and protein only diet',
    image: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    title: 'car & motorcycle enthusiast',
    description: 'four or two wheels?',
    image: [
      <FontAwesomeIcon icon={faCarSide} />,
      <FontAwesomeIcon icon={faMotorcycle} />,
    ],
  },
  {
    title: 'gamer',
    description: 'currently making spaghetti in Undertale',
    image: <FontAwesomeIcon icon={faGamepad} />,
  },
  {
    title: 'art & fashion fan',
    description: 'professional attires only',
    image: <FontAwesomeIcon icon={faVestPatches} />,
  },
];
