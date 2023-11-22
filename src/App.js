import styles from "./style"
import Billing from "./components/Billing"
import Bussiness from "./components/Bussiness"
import Button from "./components/Button"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import FeedbackCard from "./components/FeedbackCard"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Hero from "./components/Hero"
import NavBar from "./components/Navbar"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div className="bg-black w-full text-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <NavBar/>
        </div>
      </div>
      

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
              <Hero/>
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Bussiness/>
              <Billing/>
              <CardDeal/>
              <Testimonials/>
              <Clients/>
              <CTA/>
              <Footer/>

        </div>
      </div>


  </div>



  );
}

export default App;