import { Swiper } from 'swiper/react';
export default function App() {
  return <Swiper onMouseEnter={(s) => console.log(typeof s.setTranslate)} />
}
