import React from 'react';
import LogoBanner from './styled'

import logo from '../../img/logo.png'

function Wrapper() {
    return (
        <header>
            <LogoBanner src={logo}/>
        </header>
    );
}

export default Wrapper;
