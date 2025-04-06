import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cartSlice";
import BasketModal from "../BasketModal"

function CartSummary() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0) ? cartItems.reduce((sum, item) => (sum + item.qty), 0) : 0;

    return (
        <>
            <nav
                onClick={toggleModal}
                className="inline-flex flex-col absolute top-10 right-4 md:right-6 cursor-pointer items-center"
            >
                <div className="indicator">
                    <span className="indicator-item badge badge-primary text-white">{count}</span>
                    <ShoppingBasket strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
            </nav>
            <BasketModal isOpen={isOpen} toggleModal={toggleModal} />
        </>
    );
}

export default CartSummary;