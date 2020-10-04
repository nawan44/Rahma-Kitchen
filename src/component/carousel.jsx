import React from 'react';
import './css/carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Kue1 from './images/kue1.jpg';
import Kue2 from './images/kue2.jpg';
import Kue3 from './images/kue3.jpg';
import Kue4 from './images/kue4.jpg';
import Kue5 from './images/kue5.jpg';
import Kue6 from './images/kue6.jpg';
import Kue7 from './images/kue7.jpg';
// const carousel = {
//     height:"300px",
//     backgroundColor:"black"
// }

class Carousely extends React.Component {
    render() {
        return (
            <div style={{ height: '80%' }} >
                <Carousel autoPlay interval="1500" transitionTime="1000" >
                    <div>
                        <img src={Kue1} />
                        <p className="legend">Kue 1</p>
                    </div>
                    <div>
                        <img src={Kue2} />
                        <p className="legend">Kue 2</p>
                    </div>
                    <div>
                        <img src={Kue3} />
                        <p className="legend">Kue 3</p>
                    </div>

                    <div >
                        <img src={Kue4} />
                        <p className="legend">Kue4</p>
                    </div>
                    <div>
                        <img src={Kue5} />
                        <p className="legend">Kue 5</p>
                    </div>
                    <div>
                        <img src={Kue6} />
                        <p className="legend">Kue 6</p>
                    </div>
                    <div>
                        <img src={Kue7} />
                        <p className="legend">Kue 7</p>
                    </div>
                </Carousel>
            </div>
        );
    }

}
export default Carousely;