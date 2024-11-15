import { Blog, Hero, MainPlates } from "../components"
import { Header } from "../ui"

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainPlates />
      <Hero />
      <Blog />
    </>
  )
}

// TODO: la imagen del header no permite ver el cursor poniter del icono search
