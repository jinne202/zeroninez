import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/layout/AppLayout';
import Footer from '../components/layout/Footer';
import MainPage from '../components/MainPage/MainPage';

const Zeroninez = () => {
    return (
        <div>
            <AppLayout>
            <MainPage/>
            <Footer/>
            </AppLayout>
        </div>
    )
}


export default Zeroninez;