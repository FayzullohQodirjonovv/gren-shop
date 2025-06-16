import Modals from "../../assets/components/modals"
import Navbar from "../../assets/components/navbar"
import Showcase from "../../assets/components/showcase"
import Flowers from "../../assets/components/flowers"
import Right from "../../assets/components/right"
import Left from "../../assets/components/left"
import Footer from "../../assets/components/footer"
const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar/>
      <Modals/>
      <Showcase/>
      <Flowers/>
      <Right/>
      <Left/>
      <Footer/>
    </div>
  )
}

export default Home