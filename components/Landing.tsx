import Image from 'next/image'
import styles from '../styles/components/Landing.module.scss'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.terminal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/logo_m.svg' alt='logo.svg' className={styles.logo} />

        <div className={styles.hype}>Coming soon...</div>
      </div>
    </div>
  )
}
