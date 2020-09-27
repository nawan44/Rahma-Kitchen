import { render } from '@testing-library/react';
import React from 'react';
import './css/footer.css';

class Footer extends React.Component{
    render(){
        return(
            <footer >
                Rahma Kitchen @2020
            </footer>
        );
    }
}

export default Footer;