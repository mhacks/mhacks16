import Image from 'next/image';
import styles from '../styles/components/Sponsors.module.scss';

const maxSponsorLogoHeight = 108;
const sponsorRows = [
  {
    companies: [
      { logo: 'capitalone', url: 'http://www.capitalone.com' },
      { logo: 'caterpillar', url: 'http://www.caterpillar.com' },
      { logo: 'warp', url: 'http://www.warp.dev' },
    ]
  },
  {
    companies: [
      { logo: 'ramp', url: 'http://www.ramp.com' },
      { logo: 'qualcomm', url: 'http://www.qualcomm.com' },
      // { logo: 'ford', url: 'http://www.ford.com' },
      { logo: 'viralitydata', url: 'http://www.viralitydata.com' },
      { logo: 'roboflow', url: 'http://www.roboflow.com' },
      { logo: 'optimize', url: 'http://www.optimizemi.org' },
      { logo: 'engineering', url: 'http://www.engin.umich.edu' },
    ]
  }
];
const specialCompanies = [
  { logo: 'uber', url: 'https://www.uber.com' },
  { logo: 'undergroundprinting', url: 'https://www.undergroundshirts.com' },
  { logo: 'googlecloud', url: 'https://cloud.google.com' },
  { logo: 'rossbusinesstech', url: 'https://michiganross.umich.edu/about/business-tech' },
];

export default function Sponsors() {
  return (
    <div id='sponsors' className={styles.sponsors}>
      <div className={styles.logoflex}>
        <div className={styles.mlogo}>
          <Image src='/img/m.svg' alt='m.svg' width='120' height='120' />
          <div className={styles.sixteen}>
            <Image src='/img/16.svg' alt='16.svg' width='40' height='40' />
          </div>
        </div>
      </div>

      <h2>Sponsors</h2>
      <div className={styles.sponsorContainer}>
        {sponsorRows.map((elem) => (
          <div className={styles.sponsorRow}>
            {elem.companies.map(company => (<a href={company.url} target="_blank"><img className={styles.sponsorLogo} src={`/img/sponsors/${company.logo}.png`} alt={company.logo} /></a>))}
          </div>))}
        <h2>Special thanks to:</h2>
        <div className={styles.sponsorRow}>

          {specialCompanies.map((company) => (
            <a href={company.url} target="_blank"><img className={styles.sponsorLogo} src={`/img/sponsors/${company.logo}.png`} alt={company.logo} /></a>)
          )}
        </div>
      </div>
      <a
        className={styles.becomeContainer}
        href='mailto:sponsorship@mhacks.org'
        style={{
          color: '#897de6',
          textDecoration: 'underline',
          fontFamily: 'nm-bold',
        }}
      >
        Become a Sponsor
      </a>
    </div>
  );
}
