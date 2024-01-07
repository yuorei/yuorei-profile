// 'use client'
import styles from '@/app/css/home.module.css'
import ImageSlider from './components/ImageSlider'
import SNS from './components/SNS'
import Image from 'next/image'
import Header from './components/Header'
// import { useRouter } from 'next/navigation'

export default function Home() {
  const images = [
    // '/home/roppongi.jpg',
    // '/home/tokyo.JPG',
    // '/home/goshikinuma.JPG',
    '/home/yuorei.gif',
  ];

  // TODO: これを使うか迷っている
  // const router = useRouter()
  // setTimeout(() => {
  //   // これを使うためには、next/routerで'use client'を使う
  //   router.push('/#yuorei')
  // }, 1*1000);

  return (
    <div>
      <Header />
      <ImageSlider images={images} />
      <main className={styles.main}>
        <h1 className={styles.title}>ユオレイのポートフォリオ</h1>
        <div className={styles.profile}>
          <Image src="/home/yuorei.png" alt="yuorei" width={200} height={200} />
          <div id="yuorei">
            <h2>プロフィール</h2>
            <p>yuorei(ユオレイ)です。ソフトウェアエンジニアをめざして修行中</p>
          </div>
        </div>
      </main>
      <SNS />
    </div>
  )
}