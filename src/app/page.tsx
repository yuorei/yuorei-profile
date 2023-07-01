import ImageSlider from './components/ImageSlider'

export default function Home() {
  const images = [
    '/home/food_suigyouza.png',
    '/home/food_sushi_kobore_ikura_don.png',
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-teal-300"  >
      <ImageSlider images={images} />
    </div>
  )
}