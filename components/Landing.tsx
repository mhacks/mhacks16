import Image from 'next/image';
import styles from '../styles/components/Landing.module.scss';

// In your component's render method or functional component body
document.body.classList.add(styles.noScroll);

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.terminal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/logo_m.svg' alt='logo.svg' className={styles.logo}/>

        <div className={styles.hype}>
          Coming soon.
        </div>

        {/* <div className={styles.apply}>
          <a
            href='https://tally.so/r/mKx51K'
            target='_blank'
            rel='noopener noreferrer'
          >
            Apply Now
          </a>
          <p>Due Oct 30</p>
        </div> */}
      </div>
    </div>
  );
}
