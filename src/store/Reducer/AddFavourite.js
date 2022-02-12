const INITIAL_STATE = {
  movieIDs: []
}
export default function AddFavouriteReducer(state = INITIAL_STATE, action){
 
  const favorite = action.payload
  
  const exist = state.movieIDs.find(x => x === favorite);

  switch (action.type) {
    case "SET_FAVOURITE":
      if (exist===undefined) {
       
        return {
          ...state,
          movieIDs: [...state.movieIDs, favorite]
        }
      }
      else{

        //return everything not equal to favourite
        return{
          ...state,
          movieIDs: state.movieIDs.filter(x=>x !== favorite)

        } 
      }
    default:
      return state;
  }
}

