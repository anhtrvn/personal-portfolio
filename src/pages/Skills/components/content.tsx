import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faSquareJs,
  faNode,
  faReact,
  faCss3Alt,
  faHtml5,
  faDocker,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import {
  SiCplusplus,
  SiCsharp,
  SiExpress,
  SiMongodb,
  SiMongoosedotws,
  SiVisualstudio,
} from 'react-icons/si';
import { TbSql, TbBrandMysql } from 'react-icons/tb';
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoUnity,
} from 'react-icons/bi';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';

export const languages = [
  {
    icon: <FontAwesomeIcon icon={faPython} />,
    name: 'python',
  },
  {
    icon: <SiCplusplus />,
    name: 'c++',
  },
  {
    icon: <FontAwesomeIcon icon={faSquareJs} />,
    name: 'javascript',
  },
  {
    icon: <BiLogoTypescript />,
    name: 'typescript',
  },
  {
    icon: <SiCsharp />,
    name: 'c#',
  },
  {
    icon: <TbSql />,
    name: 'sql',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3Alt} />,
    name: 'css',
  },
  {
    icon: <FontAwesomeIcon icon={faHtml5} />,
    name: 'html',
  },
];

export const technologies = [
  {
    icon: <FontAwesomeIcon icon={faNode} />,
    name: 'node.js',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} />,
    name: 'react',
  },
  {
    icon: <RiNextjsFill />,
    name: 'next.js',
  },
  {
    icon: <SiExpress />,
    name: 'express.js',
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
];

export const tools = [
  {
    icon: <FontAwesomeIcon icon={faDocker} />,
    name: 'docker',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} />,
    name: 'git',
  },
  {
    icon: <VscVscode />,
    name: 'vscode',
  },
  {
    icon: <SiVisualstudio />,
    name: 'visual studio',
  },
  {
    icon: <BiLogoUnity />,
    name: 'unity',
  },
];
