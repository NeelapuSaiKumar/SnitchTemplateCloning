
import './App.css';
import Carousal from './components/Carousal';
import Footer from './components/Footer';
// import Carousal1 from './components/Carousal1';
import Header from './components/Header';
import Nav from './components/Nav';
import Products from './components/Products';
// import slides from './data/carousalData.json'

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Carousal />
    {/* <Carousal1 data={slides.slides} data1={slides.slide}/> */}
    <Products />
    <Footer />
</>
  );
}

export default App;
