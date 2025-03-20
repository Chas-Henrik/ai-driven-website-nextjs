'use client'

import styles from './Header.module.css';
import React from "react";
import Link from "next/link";

function Header(): React.JSX.Element {

    return (
        <ul className={styles.header}>
            <Link className={styles.liItem} href="/" scroll={false}>
                <p>Home</p>
            </Link>
            <Link className={styles.liItem} href="/fetch" scroll={false}>
                <p>Fetch</p>
            </Link>
            <Link className={styles.liItem} href="/signup" scroll={false}>
                <p>Server Component</p>
            </Link>
        </ul>
    )
}

export default Header