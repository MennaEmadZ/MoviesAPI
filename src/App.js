import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Components/Login';
import Registration from './Components/Registration';
import MoviesAPI from './MoviesAPI';
import MovieDetails from './MovieDetails';
import Search from './Search';
import Favourite from './Favourite';
import { LanguageContext } from './Context/languageContext';
import { useState } from 'react';


function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
   
      <div
      className={contextLang === "ar" ? "text-right body " : "text-left body "}
      dir={contextLang === "ar" ? "rtl" : "ltr"}
   >
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
    <Router>
    <Navbar/>
   
      <Routes>
      
        <Route path={"/"} exact element={<MoviesAPI/>}/>
        <Route path={"/:id"} exact element={<MovieDetails/>}/>
         <Route path={"/login"} exact element={<Login/>}/>
         <Route path={"/search/:name"} exact element={<Search/>}/>
         <Route path={"/registration"} exact element={<Registration/>}/>
         <Route path={"/favourite"} exact element={<Favourite/>}/>

       </Routes>
       <Footer/>
    </Router>
    </LanguageContext.Provider>
    </div>
  );
}

export default App;
