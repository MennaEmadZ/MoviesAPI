import "./MovieDetails.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from "@mui/icons-material/Favorite";
import { red } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';

export default function Starred(props) {
    const IsFav = props.isFav;
    const favourite = useSelector((state) => state.AddFavouriteReducer.movieIDs);
    if (IsFav) {
        return <Favorite sx={{ fontSize: 30, color: red[500] }} />;
    }
    return <FavoriteBorderIcon sx={{ fontSize: 30, color: red[500] }} />;
}
