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
import adaptive from './Adaptive.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

const App: FC = () => {
  return (
    <div className={classNames('App', {}, [adaptive.App])} style={{ height: '100%' }}>
      <Header />
      <main>
        <BurgerMenu />
        <Head />
        <About />
        <Work />
        <Dishes id='anchor-menu' />
        <Chefs id='anchor-chefs' />
        <Recipes id='anchor-recipes' />
        <Social id='anchor-contacts' />
        <FooterInfo />
        <Footer />
        <Modal />
        <Complete />
      </main>
    </div>
  )
}

export default App
