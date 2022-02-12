import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { axiosInstance } from './network/index';


export default function Search() {

    const param= useParams();
    const [SearchResult, setSearchResult] = useState([]);

    console.log(param);
    

  useEffect(() => {
    axiosInstance
      .get(`search/movie?api_key=4c03591ec60bf980ec7a1be78c875fa5&query=${param.name}`)
      .then((res) => setSearchResult(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(SearchResult);
  return (
    <>
  <div className="container justify-content-center ">
  <div className="row my-5 justify-content-center  ">
       {SearchResult.map((movie) => {
          const image = movie.poster_path
          return (


            <div className="col-lg-3 col-md-4 col-sm-6 text-center my-5 " key={movie.id}>
              <div className="card border-0 movie" >
                <div className="card-body text-center  " >
                  <Link to={`/${movie.id}`} className="film" >

                    <img src={'https://image.tmdb.org/t/p/w500/' + image} style={{ width: " 15rem" }} ></img>
                    <h3 className='pt-5'>{movie.original_title}</h3>
                  </Link>
                </div>
              </div>
            </div>


          );
        })}
        </div>
        </div>
    </>
  );
};

