import './MoviesApi.css';
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setFavourite } from './store/Ation/Action';
import Starred from './StarrHandle';
import { getMovies } from './store/Ation/listMovies'
import { LanguageContext } from './Context/languageContext';


export default function MoviesAPI() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  const [searchData, setsearchData] = useState({
    searchVal: ""
  })

  const favourite = useSelector((state) => state.AddFavouriteReducer.movieIDs);
  const moviesList = useSelector((state) => state.moviesReducer);

  console.log(moviesList)

  const dispatch = useDispatch();

  const AddFav = (id, e) => {
    dispatch(setFavourite(id));
   
  };
  if (contextLang === "ar") {
    
  }

  useEffect(() => {
    if (contextLang === "ar") {
      dispatch(getMovies("&language=ar-SA"))
    }
    else{
      dispatch(getMovies(""))
    }
   
 }, [contextLang]);




  return (
    <>
      <div className="container justify-content-center ">
        {/* search */}
        <div className="input-group my-3">
          <input
            type="search"
            className="form-control rounded "
            placeholder="Search"
            value={searchData.searchVal}
            onChange={(e) => {
              setsearchData({
                ...searchData,
                searchVal: e.target.value
              });
            }}

            aria-describedby="search-addon"
          ></input>
          
          <Link to={`/search/${searchData.searchVal}`} className="btn btn-outline-light" id="search-addon"   >
            search
          </Link>
        </div>

        <div className="row my-5 justify-content-center  ">
          {moviesList.map((movie) => {
            const image = movie.poster_path


            return (


              <div className="col-lg-3 col-md-6 col-sm-6 text-center my-5 " key={movie.id}>
                <div className="card border-0 movie" >
                  <div className="card-body text-center justify-content-center " >
                    <div className='text-end' style={{ width: "15rem" }}>
                      <button className='favButton' onClick={(e) => { AddFav(movie.id, e) }} >
                       
                        <Starred isFav={false}></Starred>
                      </button>


                    </div>
                    <Link to={`/${movie.id}`} className="film" >
                      <img src={'https://image.tmdb.org/t/p/w500/' + image} style={{ width: "15rem" }} ></img>
                      <h3 className='pt-3'>{movie.original_title}</h3>
                    </Link>
                  </div>
                </div>
              </div>


            );
          })}

        </div>
      </div>
    </>
  )
}