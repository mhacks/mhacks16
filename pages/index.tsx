import styles from '@/styles/pages/Index.module.scss'
import Faq from '@/components/Faq'
import Schedule from '@/components/Schedule'
import Sponsors from '@/components/Sponsors'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Stats from '@/components/Stats'

export default function Index() {
  return (
    <div className={styles.container}>
      <Landing />

      <About />

      <Stats />

      <Sponsors />

      <Schedule />

      <Faq />
    </div>
  )
}
