import Link from 'next/link';
import styles from './Header.module.css';
import { IoLocation } from 'react-icons/io5';

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/" className={styles.link}>
        About
      </Link>
      <Link href="/" className={styles.link}>
        Explore
      </Link>
      <Link href="/" className={styles.link}>
        <IoLocation className={styles.location} />
      </Link>
      <Link href="/" className={styles.link}>
        Journal
      </Link>
      <Link href="/" className={styles.link}>
        Search
      </Link>
    </div>
  );
}

export default Header;
