import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Tab.module.css";

const Tab = ({ icon, filename, path }) => {
    const router = useRouter();

    return (
        <Link href={path}>
            <div className={`${styles.tab} ${router.pathname === path && styles.active}`}>
                <span className={styles.tabIcon}>
                    <Image  src={icon} alt={filename} height={18} width={18} />
                </span>
                <p>{filename}</p>
            </div>
        </Link>
    );
};

export default Tab;
