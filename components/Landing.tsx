import Image from 'next/image';
import styles from '../styles/components/Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.fixedBanner}>
        <Image
          src='/img/mlh_banner.svg'
          alt='MLH Banner'
          width={200}
          height={100}
        />
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <a href='#'>
            <Image src='/img/logo_m.svg' alt='logo' width={80} height={40} />
          </a>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#history'>History</a>
          </li>
          <li>
            <a href='#sponsors'>Sponsors</a>
          </li>
          <li>
            <a href='#schedule'>Schedule</a>
          </li>
          <li>
            <a href='#faq'>FAQ</a>
          </li>
        </ul>
      </nav>
      <div className={styles.terminal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/img/logo.svg' alt='logo.svg' />

        <div className={styles.hype}>
          The most hype hackathon in the world is BACK.
          <br />
          <br />
          <p className={styles.big}>
            <span>{'[location :   '}</span>
            <b>Ann Arbor, MI</b>
            <span>{']'}</span>
            <br />
            <span>{'[date     : '}</span>
            <b>Nov 18-19, 2023</b>
            <span>{']'}</span>
          </p>
          <p className={styles.small}>
            <span>location: </span>
            <b>Ann Arbor, MI</b>
            <br />
            <span>date: </span>
            <b>Nov 18-19, 2023</b>
          </p>
        </div>

        <div className={styles.apply}>
          <a
            href='https://live.mhacks.org'
            rel='noopener noreferrer'
          >
            live.mhacks.org
          </a>
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
      <div className={styles.becomeContainer}>
        <a
          href='mailto:sponsorship@mhacks.org'
          style={{ color: '#FFFFFF', textDecoration: 'underline' }}
        >
          Become a Sponsor
        </a>
        <a
          href='https://tally.so/r/woRl6b'
          target="_blank"
          style={{ color: '#FFFFFF', textDecoration: 'underline' }}
        >
          Become a Mentor
        </a>
        <a
          href='https://tally.so/r/3xDYoE'
          target="_blank"
          style={{ color: '#FFFFFF', textDecoration: 'underline' }}
        >
          Become a Volunteer
        </a>
      </div>
    </div>
  );
}
