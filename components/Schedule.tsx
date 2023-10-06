import styles from '../styles/components/Schedule.module.scss'

export default function Schedule() {
  return (
    <div id='schedule' className={styles.schedule}>
      <div className={styles.background} />
      <div className={styles.block}>
        <h2>Schedule</h2>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 9am </h3>
          <h4>Check-in</h4>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 10am</h3>
          <h4>Opening Ceremony</h4>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 11am</h3>
          <h4>Team Formation</h4>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 12pm</h3>
          <h4>Hacking Begins</h4>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 19, 12pm</h3>
          <h4>Hacking Ends</h4>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 19, 3pm </h3>
          <h4>Closing Ceremony</h4>
        </div>
      </div>
    </div>
  )
}
