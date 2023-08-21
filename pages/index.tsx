import styles from '@/styles/pages/Index.module.scss'
import Image from 'next/image'

export default function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.titleImage}>
          <Image src='/img/title.svg' alt='title.svg' layout='fill' />
        </div>

        <p>
          Michigan’s premier hackathon is{' '}
          <span className={styles.alt}>
            back in person. November 18-19, 2023.
          </span>{' '}
          Applications open soon.
        </p>

        <a
          href='https://tally.so/r/n996BE'
          target='_blank'
          rel='noopener noreferrer'
        >
          Notify me when apps open &rarr;
        </a>

        <p>
          If you’re interested in becoming a sponsor, please reach out at{' '}
          <a href='mailto:sponsorship@mhacks.org'>sponsorship@mhacks.org</a>.
        </p>
      </div>

      <a
        className={styles.footerText}
        href='https://v1michigan.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        presented-by-v1@michigan ~ % ▓
      </a>

      <Image
        src='/img/lines.svg'
        alt='lines.svg'
        layout='fill'
        objectFit='cover'
        className={styles.linesImage}
      />
    </div>
  )
}
