import react from "react";
import './Footer.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
class Footer extends react.Component {
    constructor() {
        super();

    };


    render() {

        return (
            <>
                <footer className="py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5 ">
                            <div className="col-lg-4 col-md-6 col-sm-6 text-center 3   ">
                           
                                <h5>Made with <FavoriteIcon  sx={{ color: red[500] }} /></h5>
                               <small>Copyrights@ menna.e.zahran@gmail.com</small>
                               
                            </div>

                        </div>
                    </div>
                </footer>
            </>
        )
    }
}
export default Footer;