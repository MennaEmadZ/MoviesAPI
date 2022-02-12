import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './MoviesApi.css';
import { axiosInstance } from './network/index';
import { useSelector, useDispatch } from 'react-redux';
import { setFavourite } from './store/Ation/Action';
import Favorite from "@mui/icons-material/Favorite";

import CancelIcon from '@mui/icons-material/Cancel';
import { red } from '@mui/material/colors';

export default function Favourite() {

    const param = useParams();
    const [allMovies, setallMovies] = useState([]);

    console.log(param);


    useEffect(() => {
        axiosInstance
            .get("movie/popular?api_key=4c03591ec60bf980ec7a1be78c875fa5")
            .then((res) => setallMovies(res.data.results))
            .catch((err) => console.log(err));
    }, []);
    console.log(allMovies);

    const favourite = useSelector((state) => state.AddFavouriteReducer.movieIDs);

    console.log(favourite)

    const dispatch = useDispatch();

    const AddFav = (id, e) => {
        dispatch(setFavourite(id));

    };
    let nothing

    return (
        <>
            <div className="container justify-content-center ">


                <div className="row my-5 justify-content-center  ">
                    
                        {
                            allMovies.map((movie) => {

                                const image = movie.poster_path

                                if (favourite.includes(movie.id)) {
                                    return (


                                        <div className="col-lg-3 col-md-6 col-sm-6 text-center my-5  " key={movie.id}>
                                            <div className="card border-0 movie" >
                                                <div className="card-body text-center justify-content-center " >
                                                    <div className='text-end' style={{ width: "15rem" }}>
                                                        <button className='favButton' onClick={(e) => { AddFav(movie.id, e) }} >
                                                            <CancelIcon sx={{ fontSize: 30, color: red[500] }}/>
                                                        </button>


                                                    </div>
                                                    <Link to={`/${movie.id}`} className="film" >
                                                        <img src={'https://image.tmdb.org/t/p/w500/' + image} style={{ width: "15rem" }} ></img>
                                                        <h3 className='pt-3'>{movie.original_title}</h3>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>


                                    )
                                }

                            })
                        
                    }

                </div>
            </div>
        </>
    );
};

