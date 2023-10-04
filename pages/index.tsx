import { useState, useEffect } from 'react';
import styles from '@/styles/pages/Index.module.scss'
import Image from 'next/image'

export default function Index() {
  useEffect(() => {
    if (window.location.hash) {
        window.scrollTo(0, 0);
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
        }
  }, []);

  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const handleToggle = (questionId: number) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(questionId);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <nav className={styles.navbar}>
          <div className={styles.navLogo}>
            <a href="#">Logo</a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </nav>
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
            {/* <p>Due Oct 30</p> */}          
          </div>           
        </div>
        <div className={styles.becomeContainer}>
          <a 
            href="mailto:sponsorship@mhacks.org" 
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
          >
            Become a Sponsor
          </a>
          <a 
            href="mailto:mentorship@mhacks.org" 
            style={{ color: '#FFFFFF', textDecoration: 'underline' }}
          >
            Become a Mentor
          </a>
        </div>
      </div>

      <div id="about" className={styles.hackathon}>
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

      <div id="history" className={styles.stats}>
        <video src='/mhacks4.mov' autoPlay loop muted />

        <h2>The Most Hype Hackathon</h2>

        <p>
          Over the last 10 years, MHacks defined what a great hackathon could
          be. MHacks 16 is a reboot of the world’s most legendary hackathon.
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

      <div id="sponsors" className={styles.sponsors}>
        <div className={styles.logoflex}>
          <div className={styles.mlogo}>
            <Image src='/img/m.svg' alt='m.svg' width='120' height='120' />
            <div className={styles.sixteen}>
              <Image src='/img/16.svg' alt='16.svg' width='40' height='40' />
            </div>
          </div>
        </div>

        <h2>Sponsors</h2>        
        <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Coming Soon...</h2>
        <a
            className={styles.becomeContainer}
            href="mailto:sponsorship@mhacks.org" 
            style={{ color: '#897de6', textDecoration: 'underline'}}
          >
            Become a Sponsor
          </a>
      </div>

      <div id="schedule" className={styles.schedule}>
        <div className={styles.background} />
        <div className={styles.block}>
          <h2>Schedule</h2>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 18, 9am </h3>
            <h3 style={{color: '#606060'}}>Checkin</h3>
          </div>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 18, 10am</h3>
            <h3 style={{color: '#606060'}}>Opening Ceremony</h3>
          </div>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 18, 11am</h3>
            <h3 style={{color: '#606060'}}>Team Formation</h3>
          </div>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 18, 12pm</h3>
            <h3 style={{color: '#606060'}}>Hacking Begins</h3>
          </div>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 19, 12pm</h3>
            <h3 style={{color: '#606060'}}>Hacking Ends</h3>
          </div>
          <div className={styles.scheduleItem}>
            <h3 className={styles.time}>Nov 19, 3pm </h3>
            <h3 style={{color: '#606060'}}>Closing Ceremony</h3>
          </div>
        </div>
      </div>

      <div id="faq" className={styles.faq}>
        <div className={styles.content}>
          <h2>FAQ</h2>
          <h3 className={styles.question} onClick={() => handleToggle(1)}>
            Is there an age limit at MHacks 16?
            <span className={styles.arrow + (activeQuestion === 1 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 1 && <div className={styles.answer}>Yes, unfortunatley we cannot have participants under the age of 18.</div>}

          <h3 className={styles.question} onClick={() => handleToggle(2)}>
            How do I register?
            <span className={styles.arrow + (activeQuestion === 2 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 2 && <div className={styles.answer}>You can register by applying! Admissions will be reviewed on a rolling basis.</div>}

          <h3 className={styles.question} onClick={() => handleToggle(3)}>
            What experience level is needed?
            <span className={styles.arrow + (activeQuestion === 3 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 3 && <div className={styles.answer}>We are welcoming of all experience levels and backgrounds.</div>}   

          <h3 className={styles.question} onClick={() => handleToggle(4)}>
            Do I have to be in-person?
            <span className={styles.arrow + (activeQuestion === 4 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 4 && <div className={styles.answer}>Yes, MHacks 16 is a fully in-person event. Hackers must be present throughout the hackathon to participate.</div>}      

          <h3 className={styles.question} onClick={() => handleToggle(5)}>
            Do I need to have an idea or team?
            <span className={styles.arrow + (activeQuestion === 5 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 5 && <div className={styles.answer}>Absolutely not! Part of the fun of a hackathon is coming up with an idea and meeting an awesome team HERE! We will facilitate this process with our team formation event.</div>}    
          
          <h3 className={styles.question} onClick={() => handleToggle(6)}>
            How much does it cost?
            <span className={styles.arrow + (activeQuestion === 6 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 6 && <div className={styles.answer}>MHacks is FREE. MHacks 16 is completely free to attend. In fact, you will go home with some new swag, lessons, and amazing memories! </div>}      
          
          <h3 className={styles.question} onClick={() => handleToggle(7)}>
            How many people are on a team?
            <span className={styles.arrow + (activeQuestion === 7 ? ` ${styles.open}` : '')}>╲╱</span>
          </h3>
          {activeQuestion === 7 && <div className={styles.answer}>Up to 4 people can be on a single team.</div>}      

        </div>
      </div>
    </div>
  )
}
