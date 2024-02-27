import Link from 'next/link';
import styles from './FeatureRow.module.css';
import Image from 'next/image';
import image1 from '../(assets)/3.jpg';
import image2 from '../(assets)/4.jpg';
import image3 from '../(assets)/5.jpg';

function FeatureRow() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>Explore the World</div>
      <div>We seek to provide the most authentic content from athletes</div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src={image1}
            alt="norway"
            className={styles.landmarkpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>
            <div className={styles.place}>fjord in summer</div>
            <div>Norway</div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="Russia"
            className={styles.landmarkpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>
            <div className={styles.place}>{`St. Basil's Cathedral`}</div>
            <div>Russia</div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image3}
            alt="nermany"
            className={styles.landmarkpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div className={styles.label}>
            <div className={styles.place}>Brandenburg Gate</div>
            <div>Germany</div>
          </div>
        </div>
      </div>
      <Link href="/">See more ›</Link>
    </div>
  );
}

export default FeatureRow;
