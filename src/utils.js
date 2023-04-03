import styles from './styles/NavBar/NavBar.module.scss'
import iconcup from './assets/browser/icons/iconcup.svg'
import icondocument from './assets/browser/icons/icondocument.svg'
import iconshakehands from './assets/browser/icons/iconshakehands.svg'
import iconmap from './assets/browser/icons/iconmap.svg'
import stylesref from './styles/References/References.module.css'
import stylesfooter from './styles/Footer/Footer.module.scss'
import facebook from './assets/browser/icons/vectorfb.svg'
import instagram from './assets/browser/icons/vectorinsta.svg'
import twitter from './assets/browser/icons/vectortwitter.svg'

export const nameRegex = /^[A-Za-z]{2,}$/
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

export const address = [
  {
    name: 'ADDRESS:',
    value: '6391 Elgin St. Celina, Delaware 10299',
    className: stylesfooter.values,
  },
  {
    name: 'PHONE:',
    value: '+84 1102 2703',
    className: stylesfooter.values,
  },
  {
    name: 'EMAIL:',
    value: 'hello@thebox.com',
    className: stylesfooter.values,
  },
]

export const socialIcons = [
  {
    src: facebook,
    alt: 'facebook',
    className: stylesfooter.socialIcon,
  },
  {
    src: instagram,
    alt: 'instagram',
    className: stylesfooter.socialIcon,
  },
  {
    src: twitter,
    alt: 'twitter',
    className: stylesfooter.socialIcon,
  },
]

const links = [
  { label: 'Home', to: '#/' },
  { label: 'About Us', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Services', to: '#services' },
  { label: 'Contact Us', to: '#contact', className: styles.lastchild },
]

export { links }

export const servicesData = [
  {
    imgSrc: require('./assets/browser/icons/vectorservices1.svg').default,
    title: 'Construction',
  },
  {
    imgSrc: require('./assets/browser/icons/vectorservices2.svg').default,
    title: 'Renovation',
  },
  {
    imgSrc: require('./assets/browser/icons/vectorservices3.svg').default,
    title: 'Consultation',
  },
  {
    imgSrc: require('./assets/browser/icons/vectorservices4.svg').default,
    title: 'Repair Services',
  },
  {
    imgSrc: require('./assets/browser/icons/vectorservices5.svg').default,
    title: 'Architecture',
  },
  {
    imgSrc: require('./assets/browser/icons/vectorservices6.svg').default,
    title: 'Services',
  },
]

export const referencesData = [
  {
    id: '1',
    content: '123',
    content2: 'Projects Completed',
    className: stylesref.refbox1,
  },
  {
    id: '2',
    content: '30',
    content2: 'Years in Business',
    className: stylesref.refbox2,
  },
  {
    id: '3',
    content: '84',
    content2: 'Happy Clients',
    className: stylesref.refbox3,
  },
  {
    id: '4',
    content: '37',
    content2: 'Awards Win',
    className: stylesref.refbox4,
  },
]

export const iconData = [
  {
    id: '1',
    content: iconcup,
    content2: 'iconcup',
    className: stylesref.iconcup,
  },
  {
    id: '2',
    content: icondocument,
    content2: 'icondocument',
    className: stylesref.icondocument,
  },
  {
    id: '3',
    content: iconshakehands,
    content2: 'iconshakehands',
    className: stylesref.iconshakehands,
  },
  {
    id: '4',
    content: iconmap,
    content2: 'iconmap',
    className: stylesref.iconmap,
  },
]
