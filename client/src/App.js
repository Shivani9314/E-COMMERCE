import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import ProductDetails from './pages/productDetails/ProductDetails';
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

function App() {

    
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Categories/>}/>
                <Route path='/products/:productId' element={<ProductDetails/>}/>

            </Routes>
            <Footer/>
            
        </div>
    );
}

export default App;
