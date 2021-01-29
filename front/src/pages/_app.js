import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

const ZNZ = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ZERONINEZ</title>
      </Head>
      <div>
            <div>
            <Component />
            </div>
      </div>
    </>
  );
};

// HOLIX.propTypes = {
//   Component: PropTypes.elementType.isRequired,
// };

export default ZNZ;