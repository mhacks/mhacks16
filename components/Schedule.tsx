import styles from '../styles/components/Schedule.module.scss'

export default function Schedule() {
  return (
    <div id='schedule' className={styles.schedule}>
      <div className={styles.background} />
      <div className={styles.block}>
        <h2>Schedule</h2>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 9am </h3>
          <h3 style={{ color: '#606060' }}>Checkin</h3>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 10am</h3>
          <h3 style={{ color: '#606060' }}>Opening Ceremony</h3>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 11am</h3>
          <h3 style={{ color: '#606060' }}>Team Formation</h3>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 18, 12pm</h3>
          <h3 style={{ color: '#606060' }}>Hacking Begins</h3>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 19, 12pm</h3>
          <h3 style={{ color: '#606060' }}>Hacking Ends</h3>
        </div>
        <div className={styles.scheduleItem}>
          <h3 className={styles.time}>Nov 19, 3pm </h3>
          <h3 style={{ color: '#606060' }}>Closing Ceremony</h3>
        </div>
      </div>
    </div>
  )
}
