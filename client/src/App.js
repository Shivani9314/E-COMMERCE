import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Categories from './pages/collection/Collection';
import ProductDetails from './pages/productDetails/ProductDetails';
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'
import { fetchCategories } from "./redux/categorySlice";
import {useDispatch} from 'react-redux'
import Payments from "./component/payments/Payments";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/category/:categoryId' element={<Categories/>}/>
                <Route path='/products/:productId' element={<ProductDetails/>}/>
                <Route path='/payments/:status' element={<Payments/>}/>
            </Routes>
            <Footer/>
            
        </div>
    );
}

export default App;
