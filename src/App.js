import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList.js';
import Categories from './components/Categories.js';
import Navbar from './components/Navbar.js';

const App = () => (
        <div className='wrapper'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<BookList />} />
                    <Route path='/categories' element={<Categories />} />
                </Routes>
            </BrowserRouter>
        </div>
);

export default App;