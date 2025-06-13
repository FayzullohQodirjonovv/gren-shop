import Modals from "../../assets/components/modals"
import Navbar from "../../assets/components/navbar"
import Showcase from "../../assets/components/showcase"
import Flowers from "../../assets/components/flowers"

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar/>
      <Modals/>
      <Showcase/>
      <Flowers/>
    </div>
  )
}

export default Home