import Image from 'next/image'
import styles from '../styles/components/Sponsors.module.scss'

export default function Sponsors() {
  return (
    <div id='sponsors' className={styles.sponsors}>
      <div className={styles.logoflex}>
        <div className={styles.mlogo}>
          <Image src='/img/m.svg' alt='m.svg' width='120' height='120' />
          <div className={styles.sixteen}>
            <Image src='/img/16.svg' alt='16.svg' width='40' height='40' />
          </div>
        </div>
      </div>

      <h2>Sponsors</h2>
      <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>
        Coming Soon...
      </h2>
      <a
        className={styles.becomeContainer}
        href='mailto:sponsorship@mhacks.org'
        style={{
          color: '#897de6',
          textDecoration: 'underline',
          fontFamily: 'nm-bold',
        }}
      >
        Become a Sponsor
      </a>
    </div>
  )
}
