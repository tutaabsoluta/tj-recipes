import { Blog, Hero, MainPlates } from "../components"
import { Header } from "../ui"

export const HomePage = () => {
  return (
    <>
      <Header />
      {/* <MainPlates /> */}
      <Hero />
      <Blog />
    </>
  )
}


// REVISAR:
// *1 Manejo del cache
// *2 Animaciones con Framer Motion
// *3 Uso de Lazy Loading
// *4 Uso de Window Scroll para el Navbar

// todo: convert images to webp
