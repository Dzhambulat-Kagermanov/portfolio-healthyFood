import About from "./COMPONENTS/ABOUT/About";
import BurgerMenu from "./COMPONENTS/BURGER-MENU/BurgerMenu";
import Chefs from "./COMPONENTS/CHEFS/Chefs";
import Dishes from "./COMPONENTS/DISHES/Dishes";
import Footer from "./COMPONENTS/FOOTER/Footer";
import Head from "./COMPONENTS/HEAD/Head";
import Header from "./COMPONENTS/HEADER/Header";
import Modal from "./COMPONENTS/MODAL/Modal";
import Recipes from "./COMPONENTS/RECIPES/Recipes";
import Social from "./COMPONENTS/SOCIAL/Social";
import Works from "./COMPONENTS/WORKS/Works";

export default function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Head />
        <BurgerMenu />
        <About />
        <Works />
        <Dishes />
        <Chefs />
        <Recipes />
        <Social />
        <Footer />
        <Modal />
      </main>
    </div>
  );
}
