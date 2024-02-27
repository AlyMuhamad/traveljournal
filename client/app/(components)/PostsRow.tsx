import Link from 'next/link';
import styles from './PostsRow.module.css';
import Image from 'next/image';
import image1 from '../(assets)/6.jpg';
import image2 from '../(assets)/7.jpg';

function PostsRow() {
  return (
    <div className={styles.section}>
      <div className={styles.headline}>The Journal</div>
      <div>
        Our favourite stories about public lands and opportunities for you to
        get involved in protecting your outdoor experience
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src={image1}
            alt="nermany"
            className={styles.landmarkpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div>Feb 1, 2023</div>
          <div className={styles.title}>An Unforgetable</div>
          <div>
            If you only have one day to visit and you want to make the most out
            of it
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={image2}
            alt="nermany"
            className={styles.landmarkpic}
            priority
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <div>March 14, 2023</div>
          <div className={styles.title}>Beauty as a building</div>
          <div>
            If you only have one day to visit and you want to make the most out
            of it
          </div>
        </div>
      </div>
      <Link href="/" className={styles.allLink}>
        all posts ›
      </Link>
    </div>
  );
}

export default PostsRow;
