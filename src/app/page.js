import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import Simple from "@/components/Simple";


export default function Home() {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Simple/>
      <Footer/>
    </>
  )
}
