import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContacts';
import ContactList from './components/ContactList/ContactList';
import Home from './components/Home/Home';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/add-user' element={<AddContact/>} />
            <Route path='/user-list' element={<ContactList/>} />
        </Routes>
    );
};

export default MainRoutes;