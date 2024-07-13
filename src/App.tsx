import { FC } from 'react'
import 'app/styles/index.scss'
import Header from 'components/modules/Header/Header'
import BurgerMenu from 'components/modules/BurgerMenu/BurgerMenu'
import Head from 'components/modules/Head/Head'
import About from 'components/modules/About/About'
import Work from 'components/modules/Work/Work'
import Dishes from 'components/modules/Dishes/Dishes'
import Chefs from 'components/modules/Chefs/Chefs'

const App: FC = () => {
  return (
    <div className='App'>
      <Header />
      <BurgerMenu />
      <Head />
      <About />
      <Work />
      <Dishes />
      <Chefs />
    </div>
  )
}

export default App
