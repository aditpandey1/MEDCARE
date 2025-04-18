"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Admin Panel</h2>
      <ul className={styles.navLinks}>
        <li className={pathname === "/add-doctor" ? styles.active : ""}>
          <Link href="/doctor-add">Add Doctor</Link>
        </li>
        <li className={pathname === "/list-doctors" ? styles.active : ""}>
          <Link href="/doctor-list">List Doctors</Link>
        </li>
        <li className={pathname === "/pending-requests" ? styles.active : ""}>
          <Link href="/pending-request">Pending Requests</Link>
        </li>
      </ul>
      <button className={styles.logoutBtn}>Logout</button>
    </nav>
  );
}


