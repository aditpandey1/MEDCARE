
"use client";

import { useLogin } from "@/app/providers/loginProvider";
import Link from "next/link";
import styles from "./bookingpage.module.css";
import Appointment from "@/app/_Components/Booking-Appointment/appointmentComp";
import { useParams } from "next/navigation";

export default function BookAppointment() {
    const { user } = useLogin();
    const params = useParams();
    const doctorId = params.id ? parseInt(params.id) : null;

    if (!user) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Access Restricted</h1>

                    <p className={styles.message}>
                        You must be logged in to schedule an appointment. Please sign in to proceed.
                    </p>

                    <div className={styles.buttonContainer}>
                        <Link href="/login" className={styles.loginButton}>
                            Login Now
                        </Link>

                        <Link href="/" className={styles.homeButton}>
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!doctorId) {
        return (
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Doctor Not Found</h1>
                    <p className={styles.message}>
                        The doctor ID provided is either missing or incorrect. Please select a valid doctor.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link href="/appointments" className={styles.homeButton}>
                            View Available Doctors
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return <Appointment doctorId={doctorId} />;
}
