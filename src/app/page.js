import About from "./about/page";
import Footer from "./footer/page";
import ForMore from "./formore/page";
import Header from "./header/Header";
import Navbar from "./navbar/page";
import Services from "./services/page";


export default function Home() {
  return (
   <main>
    <Navbar />
    <Header />
    <About />
    <Services />
    <ForMore />
    <Footer />
   </main>

  )
}
