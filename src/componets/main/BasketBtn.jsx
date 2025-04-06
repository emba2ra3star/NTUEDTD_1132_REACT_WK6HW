import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";

function BasketBtn({data ,qty}) {
    const dispatch = useDispatch();
    const addToCart=()=>(
        dispatch(addCartItems({
            ID:data.ID,
            name:data.title,
            img:data.cover,
            price:data.price,
            stock:data.stock,
            qty
        }))
    );

    return (
        <button className="btn mt-auto mb-8" onClick={addToCart}>Add to Shopping Bag</button>
    );
}

export default BasketBtn;