import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, placeOrderItems } from "../utils/cartSlice";
import { toast } from "react-toastify";
import ModalEditCart from "./Modals/ModalEditCart";
import emptyCart from "../assets/icons/empty-cart.png";

const MAX_ITEMS = 4;

const Cart = () => {
  const [itemsTotal, setItemsTotal] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [igst, setIgst] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [isCartEdit, setIsEditCart] = useState(false);
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartItems || !cartItems.length) return;
    let total = 0;

    cartItems.forEach((item: any) => (total += item.quantity * item.price));
    setItemsTotal(total);
    setCgst(total * 0.09);
    setSgst(total * 0.09);
    setIgst(total * 0.09);
  }, [cartItems]);

  useEffect(
    () => setOrderTotal(itemsTotal + sgst + cgst + igst),
    [sgst, cgst, igst]
  );

  const clearCart = () => dispatch(clearCartItems(null));

  const placeOrder = () => {
    if (!cartItems.length) return;
    dispatch(placeOrderItems(null));
    toast("Order placed successfully");
  };

  const openEditCart = () => setIsEditCart(true);

  console.log("cartItems ", cartItems);

  return (
    <div
      className={
        "relative m-4  bg-white rounded-lg float-right max-md:hidden flex-grow "
      }
    >
      <table className="w-full">
        <thead className="bg-gray-100 p-2">
          <tr className="w-full">
            <th className="mr-2" colSpan={6}>
              Products
            </th>
            <th className="mr-2" colSpan={1}>
              Quanity
            </th>
            <th className="mr-2" colSpan={4}>
              Price
            </th>
            <th className="mr-2" colSpan={1}>
              <button className="text-red-500 text-sm" onClick={openEditCart}>
                Edit
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.slice(0, MAX_ITEMS).map((item: any, index: number) => (
            <tr className="pb-4 " key={item.color + "-" + item.packaging}>
              <td colSpan={6}>
                <div className="mr-2 flex items-center">
                  {item.imageUrl && (
                    <img className="h-10 w-10 mr-2" src={item.imageUrl} />
                  )}
                  <div>
                    <div className="text-md">{item.itemDescription}</div>
                    <div className="text-sm text-gray-700">
                      {item.color} | {item.packaging}
                    </div>
                  </div>
                </div>
              </td>
              <td colSpan={1} className="text-center">
                {item.quantity}
              </td>
              <td colSpan={5}>
                <div className="flex items-center justify-between">
                  <div className="mr-2">
                    {item.currencySymbol}&nbsp;
                    {item.quantity * item.price}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {cartItems.length > 4 && (
        <>
          <hr />
          <button
            className="text-red-700 mt-4 pb-4 text-center w-full"
            onClick={openEditCart}
          >
            See all
          </button>
        </>
      )}
      {cartItems.length > 0 && (
        <div className="w-full mt-6 ">
          <div className=" bg-gray-100 p-2 flex justify-between items-center ">
            <div className="text-lg">Other Instructions</div>
            <button className="text-red-700">Add &gt;</button>
          </div>
          <div className="m-2">
            <div>Purchase Order Number:</div>
            <div className="m-4 p-2 bg-gray-100 rounded-md text-center">
              535353535
            </div>
          </div>
          <div className="flex justify-between items-center m-2">
            <div>Addresses</div>
            <button className="text-red-700">View &gt;</button>
          </div>
          <div className="text-gray-700 my-4 text-clip m-2">
            Office: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Itaque, unde!
          </div>
          <div className="flex justify-between items-center text-gray-700 m-2">
            <div>Items total:</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {itemsTotal}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-700 m-2">
            <div>SGST (9%):</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {sgst}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-700 m-2">
            <div>CGST (9%):</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {cgst}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-700 m-2">
            <div>IGST (9%):</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {igst}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-700 m-2">
            <div>Taxable Amount:</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {sgst + cgst + igst}
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center text-black m-2">
            <div>Order Total:</div>
            <div>
              {cartItems[0]?.currencySymbol || "Rs"} {orderTotal}
            </div>
          </div>
          <div className="mx-4 mt-6 flex items-center justify-between">
            <button
              className="rounded-lg border border-gray-700 text-gray-700 text-center p-2 "
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="rounded-lg text-white bg-red-700 text-center p-2"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
      {cartItems.length === 0 && (
        <div className="flex h-full items-center justify-center flex-col">
          <img src={emptyCart} className="" alt="empty-cart" />
          <div className="mt-6"> No Items present in the cart</div>
        </div>
      )}
      {isCartEdit && <ModalEditCart closeModal={() => setIsEditCart(false)} />}
    </div>
  );
};

export default Cart;
