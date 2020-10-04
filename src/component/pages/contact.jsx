import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <address>
                    <p><strong>Rahma Kitchen</strong></p>
                    <hr />
                    <p><HomeIcon /> Jl KH Ahmad Junaedi, Pusaka Rakyat, Taruma Jaya, Bekasi </p>
                    <p><PhoneIcon />  082823748848 </p>
                    <p><WhatsAppIcon /><a href="https://wa.me/6281298474102"> 082823748848</a></p>
                    <p><EmailIcon /> rachmat.d.gunawan@gmail.com</p>
                    <p> <InstagramIcon /><a href="https://instagram.com/nawan44"> RahmaKitchen</a> </p>
                    <p><YoutubeIcon /><a href="https://youtube.com"> RahmaKitchen</a></p>


                </address>
            </div>
        );
    }
}

export default Contact