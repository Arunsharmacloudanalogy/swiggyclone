import { add } from "../../redux/slices/cartslice";
import { useDispatch } from "react-redux";

const useQuantityHandler = (quantity, setQuantity, offer, data) => {
  const dispatch = useDispatch();

  const { title, price, image } = data;
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart(newQuantity, "i");
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      addToCart(newQuantity, "d");
    }
  };

  const addToCart = (foodQuantity, op) => {
    let { distance, place } = offer;
    let newItem = { title, price, image, distance, foodQuantity, place };
    dispatch(add({ newItem, op }));
  };

  return { handleIncrement, handleDecrement, addToCart };
};

export default useQuantityHandler;
