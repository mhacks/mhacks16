import Image from 'next/image'
import styles from '../styles/components/Faq.module.scss'
import { useState } from 'react'

export default function Faq() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const handleToggle = (questionId: number) => {
    if (activeQuestion === questionId) {
      setActiveQuestion(null)
    } else {
      setActiveQuestion(questionId)
    }
  }

  return (
    <div id='faq' className={styles.faq}>
      <div className={styles.content}>
        <h2>FAQ</h2>
        <h3 className={styles.question} onClick={() => handleToggle(1)}>
          Is there an age limit at MHacks 16?
          <span
            className={
              styles.arrow + (activeQuestion === 1 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 1 && (
          <div className={styles.answer}>
            Yes, unfortunately we cannot have participants under the age of 18.
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(2)}>
          How do I register?
          <span
            className={
              styles.arrow + (activeQuestion === 2 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 2 && (
          <div className={styles.answer}>
            You can register by applying! Admissions will be reviewed on a
            rolling basis.
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(3)}>
          What experience level is needed?
          <span
            className={
              styles.arrow + (activeQuestion === 3 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 3 && (
          <div className={styles.answer}>
            We are welcoming of all experience levels and backgrounds.
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(4)}>
          Do I have to be in-person?
          <span
            className={
              styles.arrow + (activeQuestion === 4 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 4 && (
          <div className={styles.answer}>
            Yes, MHacks 16 is a fully in-person event. Hackers must be present
            throughout the hackathon to participate.
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(5)}>
          Do I need to have an idea or team?
          <span
            className={
              styles.arrow + (activeQuestion === 5 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 5 && (
          <div className={styles.answer}>
            Absolutely not! Part of the fun of a hackathon is coming up with an
            idea and meeting an awesome team HERE! We will facilitate this
            process with our team formation event.
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(6)}>
          How much does it cost?
          <span
            className={
              styles.arrow + (activeQuestion === 6 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 6 && (
          <div className={styles.answer}>
            MHacks is FREE. MHacks 16 is completely free to attend. In fact, you
            will go home with some new swag, lessons, and amazing memories!{' '}
          </div>
        )}

        <h3 className={styles.question} onClick={() => handleToggle(7)}>
          How many people are on a team?
          <span
            className={
              styles.arrow + (activeQuestion === 7 ? ` ${styles.open}` : '')
            }
          >
            <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
          </span>
        </h3>
        {activeQuestion === 7 && (
          <div className={styles.answer}>
            Up to 4 people can be on a single team.
          </div>
        )}
      </div>
    </div>
  )
}
