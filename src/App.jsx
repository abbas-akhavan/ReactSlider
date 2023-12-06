import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SliderContaner from './components/SliderContaner'
import SliderItem from './components/SliderItem'
const products = [
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro2.webp" , price : 800000 , off : 5},
  {src : "/src/images/pro1.webp" , price : 800000 , off : 5},
];
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <SliderContaner>
      {
            products.map((item) =>{
                return <SliderItem product={item} />
            })
        }
      </SliderContaner>
    </div>
  )
}

export default App
