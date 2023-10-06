import styles from '../styles/components/Stats.module.scss'

export default function Stats() {
  return (
    <div id='history' className={styles.stats}>
      <video src='/mhacks4.mov' autoPlay loop muted />

      <h2>The Most Hype Hackathon</h2>

      <p>
        Over the last 10 years, MHacks defined what a great hackathon could be.
        MHacks 16 is a reboot of the world’s most legendary hackathon.
      </p>

      <div className={styles.numbers}>
        <div>
          <h3>13,000+</h3>
          <p>Attendees</p>
        </div>
        <div>
          <h3>15</h3>
          <p>Hackathons</p>
        </div>
        <div>
          <h3>$350,000+</h3>
          <p>in Prizes</p>
        </div>
      </div>
    </div>
  )
}
