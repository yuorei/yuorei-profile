import styles from '@/app/css/home.module.css'
import ImageSlider from './components/ImageSlider'
import SNS from './components/SNS'
import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  const images = [
    '/home/roppongi.jpg',
    '/home/tokyo.JPG',
    '/home/goshikinuma.JPG',
  ];

  return (
    <div>
      <Header />
      <ImageSlider images={images} />
      <main className={styles.main}>
        <h1 className={styles.title}>ユオレイのポートフォリオ</h1>
        <div className={styles.profile}>
          <Image src="/home/yuorei.png" alt="yuorei" width={400} height={400} />
          <div>
            <h2>プロフィール</h2>
            <p>yuorei(ユオレイ)です。ソフトウェアエンジニアをめざして修行中</p>
          </div>
        </div>
      </main>
      <SNS />
    </div>
  )
}