import styles from "./style"

function App() {
  return (
    <div className="bg-black w-full text-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
             Navbar
        </div>
      </div>


      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              hero
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
              stats
              Business
              billing
              carddeal
              Testimonials
              Clients
              Cta
              Foooter
              
        </div>
      </div>


  </div>



  );
}

export default App;
