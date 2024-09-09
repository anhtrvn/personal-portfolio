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
    description: 'cat mom of two',
    image: [
      <FontAwesomeIcon icon={faCat} />,
      <FontAwesomeIcon icon={faCat} flip='horizontal' />,
    ],
  },
  {
    title: 'powerbuilding enjoyer',
    description: 'powerbuilding enjoyer',
    image: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    title: 'car & motorcycle enthusiast',
    description: '',
    image: [
      <FontAwesomeIcon icon={faCarSide} />,
      <FontAwesomeIcon icon={faMotorcycle} />,
    ],
  },
  {
    title: 'gamer',
    description: 'gamer',
    image: <FontAwesomeIcon icon={faGamepad} />,
  },
  {
    title: 'Capstone @ Halliburton',
    description: 'art & fashion fan',
    image: <FontAwesomeIcon icon={faVestPatches} />,
  },
];
