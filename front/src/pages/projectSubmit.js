import React from 'react';
import styled from 'styled-components'
import AppLayout from '../components/layout/AppLayout';
import Footer from '../components/layout/Footer';
import ProjectSubmitPage from '../components/projectSubmit/ProjectSubmitPage';

const projectSubmit = () => {
    return (
        <>
            <AppLayout/>
            <ProjectSubmitPage/>
        </>
    )
}

export default projectSubmit;