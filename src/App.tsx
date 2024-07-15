import { FC } from 'react'
import 'app/styles/index.scss'
import Header from 'components/modules/Header/Header'
import BurgerMenu from 'components/modules/BurgerMenu/BurgerMenu'
import Head from 'components/modules/Head/Head'
import About from 'components/modules/About/About'
import Work from 'components/modules/Work/Work'
import Dishes from 'components/modules/Dishes/Dishes'
import Chefs from 'components/modules/Chefs/Chefs'
import Recipes from 'components/modules/Recipes/Recipes'
import Social from 'components/modules/Social/Social'
import FooterInfo from 'components/modules/FooterInfo/FooterInfo'
import Footer from 'components/modules/Footer/Footer'
import Modal from 'components/modules/Modal/Modal'
import Complete from 'components/modules/Complete/Complete'

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <BurgerMenu />
        <Head />
        <About />
        <Work />
        <Dishes />
        <Chefs />
        <Recipes />
        <Social />
        <FooterInfo />
        <Footer />
        <Modal />
        <Complete />
      </main>
    </div>
  )
}

export default App
