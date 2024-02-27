import styles from './HeroSection.module.css';
import Header from '../(ui)/Header';

function HeroSection() {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.content}>
        <div className={styles.headline}>The Great Outdoors</div>
        <div className={styles.subHeadeline}>wander often, wonder always</div>
      </div>
    </div>
  );
}

export default HeroSection;
