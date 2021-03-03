import React from 'react';
import styled from 'styled-components'
import AppLayout from '../components/layout/AppLayout';
import Footer from '../components/layout/Footer';
import ProjectPage from '../components/project/ProjectPage';

const project = () => {
    return (
        <>
            <AppLayout>
            <ProjectPage/>
            <Footer/>
            </AppLayout>
        </>
    )
}

export default project;