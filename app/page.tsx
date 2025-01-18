import styles from './page.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { DetailsCard } from './components/DetailsCard/DetailsCard';

export default function Home() {
    return (
        <div className={styles.page}>
            <NavBar />
            <div
                style={{
                    display: 'block',
                    width: '95%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '50px',
                    color: '#000000'
                }}
            >
                <DetailsCard />
            </div>
        </div>
    );
}
