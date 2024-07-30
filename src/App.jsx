import Navbar from "./page/Navbar"
import Banner from "./page/Banner"
import Footer from "./page/Footer"
import './css/navstyle.css'
const App = () => {
  const logoCaffe = 'Kopi Nako'
  const products = [
    {
      id: 1,
      name: "Cappuccino",
      price: 20000,
      imageUrl: "https://media.istockphoto.com/id/1174632449/photo/side-view-of-hot-latte-coffee-with-latte-art-in-a-ceramic-green-cup-and-saucer-isolated-on.webp?b=1&s=170667a&w=0&k=20&c=zcQsJOuEj55HC8jl6ytlcuSH9kQOShtUUvHuJTgT4aA="
    },

    {
      id: 2,
      name: "Machiatto",  
      price: 20000,
      imageUrl: "https://media.istockphoto.com/id/183059312/photo/machiated-milk.webp?b=1&s=170667a&w=0&k=20&c=2nu54Lo6gga89ovNVPFtnJ_g-wUcWy00GiXwrmnSebw="
    },

    {
      id: 3,
      name: "Americano",
      price: 20000,
      imageUrl: "https://media.istockphoto.com/id/1301137165/photo/glass-cup-of-espresso-coffee-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=z5Lp9QSSo-_YaSchl6_IQpGPradINIrTvQRm7bJ54Gg="
    }
  ]
  return (
    <> 
      <Navbar logo = {logoCaffe} />
      <Banner products = {products} />
      <Footer/>
    </>
  )
}

export default App