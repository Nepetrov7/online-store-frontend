import { useNotificationStore } from '@/shared/store/notificationStore';
import styles from './Notification.module.css';

export const Notification = () => {
    const message = useNotificationStore((state) => state.message);
    if (!message) {
        return null;
    }

    return <div className={styles.toast}>{message}</div>;
};
