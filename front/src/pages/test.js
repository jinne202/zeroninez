import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import PrivacyPolicy from '../components/layout/PrivacyPolicy';


const test = () => {

    return (
        <div>
        {/* <Head>
            <script src="https://unpkg.com/type-hangul"></script>
            <script>
                TypeHangul.type('#target');
            </script>
        </Head>
            <div id="target">테스트를해봐요 테스트를</div> */}
            <PrivacyPolicy/>
        </div>
    )
}


export default test;