import Image from 'next/image'
import styles from '../styles/components/Landing.module.scss'

// Remove This For Real MHacks
import { useEffect } from 'react'

export default function Landing() {
  useEffect(() => {
    window.location.href = 'https://tally.so/r/w2eB7j'
  }, [])

  return <div className={styles.terminal}>Redirecting...</div>
}

/**
<div className={styles.terminal}>
        <img src='/img/logo_m.svg' alt='logo.svg' className={styles.logo} />

        <h3>Interested in sponsoring, or just have a question?</h3>
        <a href="mailto:hackathon@umich.edu" className={styles.hype}>Contact Us</a>
        <p>Having trouble with the link?</p>
        <p>Paste our email in: <a href="mailto:hackathon@umich.edu">hackathon@umich.edu</a></p>
      </div>
      
*/
