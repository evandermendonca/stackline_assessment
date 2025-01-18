import styles from './page.module.css';
import { NavBar } from './components/NavBar';

export default function Home() {
    return (
        <div className={styles.page}>
            <NavBar />
        </div>
    );
}
