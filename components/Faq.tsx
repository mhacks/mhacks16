import Image from 'next/image'
import styles from '../styles/components/Faq.module.scss'
import { Fragment, useState } from 'react'

export default function Faq() {
  return (
    <div id='faq' className={styles.faq}>
      <div className={styles.content}>
        <h2>FAQ</h2>
        <Question
          question='Is there an age limit at MHacks 16?'
          answer='Yes, unfortunately we cannot have participants under the age of 18.'
        />
        <Question
          question='How do I register?'
          answer='You can register by applying! Admissions will be reviewed on a rolling basis.'
        />
        <Question
          question='What experience level is needed?'
          answer='We are welcoming of all experience levels and backgrounds.'
        />
        <Question
          question='Do I have to be in-person?'
          answer='Yes, MHacks 16 is a fully in-person event. Hackers must be present throughout the hackathon to participate.'
        />
        <Question
          question='Do I need to have an idea or team?'
          answer='Absolutely not! Part of the fun of a hackathon is coming up with an idea and meeting an awesome team HERE! We will facilitate this process with our team formation event.'
        />
        <Question
          question='How much does it cost?'
          answer='MHacks is FREE. MHacks 16 is completely free to attend. In fact, you will go home with some new swag, lessons, and amazing memories!'
        />
        <Question
          question='How many people are on a team?'
          answer='Up to 4 people can be on a single team.'
        />
      </div>
    </div>
  )
}

function Question({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <h3 className={styles.question} onClick={() => setOpen(!open)}>
        {question}
        <span className={styles.arrow + (open ? ` ${styles.open}` : '')}>
          <Image src='/img/arrow.svg' alt='arrow' width={30} height={15} />
        </span>
      </h3>
      {open && <div className={styles.answer}>{answer}</div>}
    </Fragment>
  )
}
