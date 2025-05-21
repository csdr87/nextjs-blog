import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <img
        src="/github-404.svg"
        alt="GitHub 404 Illustration"
        width={120}
        height={120}
        className={styles.logo}
      />
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>This is not the web page you are looking for.</p>
      <Link href="/" className={styles.homeLink}>
        Go back home
      </Link>
    </div>
  );
}