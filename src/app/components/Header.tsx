'use client';
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react"
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            {/* <div className={styles.logo}></div> */}
            <Image src="/home/logo.png" alt="yuorei" width={200} height={100} />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/skill">
              <div>スキル</div>
              </Link>
            </li>
            <li>
              <Link href="/history">
              <div>経歴</div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
              <div>ブログ</div>
              </Link>
            </li>
            <li>
              <Link href="/project">
              <div>プロジェクト</div>
              </Link>
            </li>
            <li>
              <Link href="/hoby">
              <div>趣味</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div>ホーム</div>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span>Close</span>
            {/* <span></span>
            <p>Close</p> */}
          </div>
          <li>
            <Link href="/">
              <div>
                <p className={styles.mainTitle}>ホーム</p>
                {/* <p className={styles.subTitle}>ユオレイ</p> */}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/skill">
            <div>
              <p className={styles.mainTitle}>スキル</p>
              {/* <p className={styles.subTitle}></p> */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="/history">
            <div>
              <p className={styles.mainTitle}>経歴</p>
              {/* <p className={styles.subTitle}></p> */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="/blog">
            <div>
              <p className={styles.mainTitle}>ブログ</p>
              {/* <p className={styles.subTitle}></p> */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="/project">
            <div>
              <p className={styles.mainTitle}>プロジェクト</p>
              {/* <p className={styles.subTitle}></p> */}
            </div>
            </Link>
          </li>
          <li>
            <Link href="/hoby">
            <div>
              <p className={styles.mainTitle}>趣味</p>
              {/* <p className={styles.subTitle}></p> */}
            </div>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
