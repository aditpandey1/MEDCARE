"use client"; // Ensure this runs on the client side

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const handleLogout = () => {
    // Implement logout logic here, e.g., clearing tokens or session storage
    console.log("Admin logged out");
  };

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Admin Panel</h2>
      <ul className={styles.navLinks}>
        <li className={pathname === "/manage-doctors" ? styles.active : ""}>
          <Link href="/doctor">Manage Doctors</Link>
        </li>
        <li className={pathname === "/pending-requests" ? styles.active : ""}>
          <Link href="/appointment">Pending Requests</Link>
        </li>
      </ul>
      <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
    </nav>
  );
}


