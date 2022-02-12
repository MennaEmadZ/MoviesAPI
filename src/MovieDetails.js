import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from './network/index';
import "./MovieDetails.css"

export default function MovieDetails() {
    const params = useParams();
    const [MovieDetails, setMovieDetails] = useState({});

    console.log(params);
    

    useEffect(() => {
        axiosInstance
            .get(`movie/${params.id}?api_key=4c03591ec60bf980ec7a1be78c875fa5`)
            .then((res) => setMovieDetails(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(MovieDetails)
    const image = MovieDetails.poster_path
    return <div>
        <div className="container">
            <div className="row my-5 justify-content-start movieDetail py-5 ">
                <h2 className="pb-3">{MovieDetails.original_title}</h2>
                <img className="py-3" src={'https://image.tmdb.org/t/p/w500/' + image} style={{width:" 15rem"}} ></img>
                <h5 >{MovieDetails.overview}</h5>
            </div></div>
    </div>;
}