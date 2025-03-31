import styles from "./login.module.css";
import LoginForm from "./loginForm";

export default function LoginComp() {
    return (
        <div className={styles.login}>
            <LoginForm />
        </div>
    );
}