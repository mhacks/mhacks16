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

      <div className={styles.hackathon}>
        <Image
          src='/img/speaking.png'
          alt='speaking.png'
          width='500'
          height='300'
        />

        <div className={styles.what}>
          <h2>What’s a Hackathon?</h2>
          <br />
          <p>
            Hackathons are a place for like-minded students to create amazing
            projects. Whether you’re a veteran builder or you’ve never been to a
            hackathon before, MHacks has something for you.
          </p>
          <br />
          <p>
            Come to MHacks to <b>learn</b>, come to <b>build</b>, and come to
            create <b>life-long friendships</b>.
          </p>
        </div>
      </div>
    </div>
  )
}
