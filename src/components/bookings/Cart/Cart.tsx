"use client";

import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  // const [cart, setCart] = useState<any>([])([]);
  const cart = [];

  // const handleAddToCart = (service: any) => {
  //   setCart([...cart, service]);
  // };
  return (
    <div className="fixed bottom-10 right-10 flex items-center bg-white p-4 rounded-full shadow-lg">
      <FiShoppingCart className="text-2xl mr-2" />
      <span className="text-xl">${cart.length * 140}.00</span>
    </div>
  );
};

export default Cart;
