import styles from './portfolio.module.css';

export function ConversationMascot() {
    return (
        <svg className={styles.mascot} viewBox="0 0 64 76" aria-hidden="true" focusable="false">
            <ellipse className={styles.mascotShadow} cx="31" cy="70" rx="19" ry="3" />
            <g className={styles.mascotBody} stroke="#101215" strokeWidth="3" strokeLinejoin="round">
                <path d="M20 57v10h-7M40 57v10h7" fill="none" strokeWidth="5" />
                <path d="M12 34H6v12h6" fill="var(--secondary)" />
                <g className={styles.mascotArm}>
                    <path d="M49 33h8V20h-5v8h-3" fill="var(--secondary)" />
                    <path d="M54 20v-7" fill="none" strokeLinecap="round" />
                </g>
                <path d="M17 10h27v5h6v40h-6v6H17v-6h-5V15h5Z" fill="var(--art-accent)" />
                <path d="M19 21h24v29H19Z" fill="#17191d" />
                <path d="M22 29h6v8h-6ZM34 29h6v8h-6Z" fill="#f3f2ee" stroke="none" />
                <path d="M27 43h7" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 16h13" stroke="#101215" strokeWidth="2" />
                <path d="M26 55h9" stroke="#101215" strokeWidth="2" />
            </g>
        </svg>
    );
}
