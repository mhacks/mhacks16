import Image from 'next/image'
import styles from '../styles/components/About.module.scss'

export default function About() {
  return (
    <div id='about' className={styles.hackathon}>
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
  )
}
