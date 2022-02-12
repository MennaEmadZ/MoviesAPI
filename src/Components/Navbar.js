import react from "react";
import './Navbar.css';
import {
    Link,
    NavLink
} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import TheatersIcon from '@mui/icons-material/Theaters';
import { red } from '@mui/material/colors';
import Favorite from "@mui/icons-material/Favorite";
import ChangeLanguage from "./ChangeLanguage";
import { useSelector } from 'react-redux';

function Navbar() {
    const favourite = useSelector((state) => state.AddFavouriteReducer.movieIDs);

    return (
        <>
            <nav className="navbar navbar-expand-md my-0 "  >
                <div className="container ">

                    <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-center text-center">
                        <ul className="navbar-nav navbar-center text-center ">
                            <li className="nav-item px-3 ">
                                <NavLink style={({ isActive }) => ({
                                    textShadow: isActive ? '0px 5px 15px  white' : 'none',
                                    textDecoration: isActive ? 'none' : 'none',
                                    color: isActive ? 'white' : 'white',
                                    borderTop: isActive ? '2px solid white' : 'none',
                                })} className="nav-link " to="/"  > <TheatersIcon sx={{ fontSize: 40, color: red[500] }} /> MOVIES </NavLink>

                            </li>
                            <li className="nav-item px-3 pt-1 fav">
                                <NavLink style={({ isActive }) => ({
                                    textShadow: isActive ? '0px 5px 15px  white' : 'none',
                                    textDecoration: isActive ? 'none' : 'none',
                                    color: isActive ? 'white' : 'white',
                                    borderTop: isActive ? '2px solid white' : 'none',
                                })} className="nav-link " to="/favourite"  ><Favorite sx={{ fontSize: 30, color: red[500] }} />{favourite.length}</NavLink>

                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end text-center" id="main-nav">

                        <div className="justify-content-end text-end">
                            <ul className="navbar-nav navbar-end text-end justify-content-end">
                                <li className="nav-item">
                                <NavLink style={({ isActive }) => ({
                                    textShadow: isActive ? '0px 5px 15px  white' : 'none',
                                    textDecoration: isActive ? 'none' : 'none',
                                    color: isActive ? 'white' : 'white',
                                    borderTop: isActive ? '2px solid white' : 'none',
                                })} className="nav-link  " to="/login"><PersonIcon sx={{ fontSize: 40, color: red[500] }} /></NavLink>
                                </li>
                                <li className="nav-item">
                                      <ChangeLanguage/>
                                 </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
