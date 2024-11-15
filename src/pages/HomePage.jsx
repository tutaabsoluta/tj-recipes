import { Blog, Hero, MainPlates } from "../components"
import { Footer, Header } from "../ui"

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainPlates />
      <Hero />
      <Blog />
      <Footer />
    </>
  )
}

// TODO: la imagen del header no permite ver el cursor poniter del icono search
