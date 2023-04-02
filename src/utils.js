import styles from './styles/NavBar/NavBar.module.scss'

const links = [
  { label: 'Home', to: '#/' },
  { label: 'About Us', to: '#about' },
  { label: 'Projects', to: '#projects' },
  { label: 'Services', to: '#services' },
  { label: 'Contact Us', to: '#contact', className: styles.lastchild },
]

export { links }
