import { Cases, SelectAllRounded } from "@mui/icons-material";

export const initialState ={
    basket: []
};
//Selector

export const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],

            } ;
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index>=0){
                newBasket.splice(index, 1)
               
            }else{
                console.warn(
                    'can not remove product as its not in basket!'
                )
            }
            return {
                ...state,
                basket: newBasket,

            } ;
        default:
            return state;

    }


}