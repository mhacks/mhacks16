import styles from '@/styles/pages/Index.module.scss'
import Image from 'next/image'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <div className={styles.terminal}>
          <div className={styles.logoImage}>
            <Image src='/img/logo.svg' alt='logo.svg' layout='fill' />
          </div>

          <div className={styles.hype}>
            The most hype hackathon in the world is BACK.
            <br />
            <br />
            <p>
              <span>{'[location :   '}</span>
              <b>Ann Arbor, MI</b>
              <span>{']'}</span>
              <br />
              <span>{'[date     : '}</span>
              <b>Nov 18-19, 2023</b>
              <span>{']'}</span>
            </p>
          </div>

          <div className={styles.apply}>
            <a
              href='https://tally.so/r/mKx51K'
              target='_blank'
              rel='noopener noreferrer'
            >
              Apply Now
            </a>
            <p>Due Oct 30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
