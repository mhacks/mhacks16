import Image from 'next/image'
import styles from '../styles/components/Landing.module.scss'

// redirect defined in next.config.js

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.terminal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/logo_m.svg' alt='logo.svg' className={styles.logo} />

        <h3>Interested in sponsoring, or just have a question?</h3>
        <a href='mailto:hackathon@umich.edu' className={styles.hype}>
          Contact Us
        </a>
        <p>Having trouble with the link?</p>
        <p>
          Paste our email in:{' '}
          <a href='mailto:hackathon@umich.edu'>hackathon@umich.edu</a>
        </p>
      </div>
    </div>
  )
}
