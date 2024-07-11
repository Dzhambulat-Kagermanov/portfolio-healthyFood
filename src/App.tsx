import { FC } from 'react'
import 'app/styles/index.scss'
import Header from 'components/modules/Header/Header'
import BurgerMenu from 'components/modules/BurgerMenu/BurgerMenu'
import { Provider } from 'react-redux'
import store from 'app/providers/store/store'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <BurgerMenu />
      </div>
    </Provider>
  )
}

export default App
