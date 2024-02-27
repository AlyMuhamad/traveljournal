import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.footerRow}>
          <div className={styles.head}>Travel Journal</div>
          <div>where you see the world while in your place</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Explore</div>
          <div>Explore</div>
          <div>Journal</div>
          <div>Domain Name</div>
          <div>Utility</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Statistics</div>
          <div>Ranking</div>
          <div>Activity</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Resource</div>
          <div>Help Center</div>
          <div>Platform status</div>
          <div>Partners</div>
          <div>FAQ</div>
        </div>
        <div className={styles.footerRow}>
          <div className={styles.head}>Company</div>
          <div>About us</div>
          <div>Career</div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
