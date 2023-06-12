import React from "react";
import { useDispatch } from "react-redux";
import { addItemsToCart } from "../../utils/cartSlice";
import placeHolderImg from "../../assets/icons/image-placeholder.svg";
import closeIcon from "../../assets/icons/close_icon.png";
import crossMark from "../../assets/icons/cross-mark.png";

const OrderList = ({ product, closeModal, list, setList }: any) => {
  const dispatch = useDispatch();

  const deleteItem = (idx: number) => {
    setList((prevItems: any[]) =>
      prevItems.filter((_: any, index: number) => index !== idx)
    );
  };

  const addListToCart = () => {
    dispatch(addItemsToCart(list));
    closeModal();
  };

  return (
    <div className="ml-6 w-full text-black">
      <h2 className="text-2xl font-bold ml-6 text-black overflow-y-auto">
        Order List
      </h2>
      <button onClick={closeModal} className="absolute right-6 top-6 ">
        <img className="w-4 h-4" src={closeIcon} alt="close-icon" />
      </button>
      <table className="w-full mt-4">
        <thead className="bg-gray-100 p-2">
          <tr className="w-full">
            <th colSpan={6}>Products</th>
            <th colSpan={1}>Quanity</th>
            <th colSpan={5}>Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, index: number) => (
            <tr className="my-2 " key={item.color + "-" + item.packaging}>
              <td colSpan={6}>
                <div className="mr-2 flex items-center">
                  {product.productImages[0] && (
                    <img
                      className="h-10 w-10 mr-2"
                      src={product.productImages[0]}
                    />
                  )}
                  <div>
                    <div className="text-md">{product.itemDescription}</div>
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
                    {product.currency.symbol}&nbsp;
                    {item.quantity * item.price}
                  </div>
                  <button onClick={() => deleteItem(index)}>
                    <img className="w-3 h-3" src={crossMark} alt="close-icon" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {list.length > 0 && (
        <button
          onClick={addListToCart}
          className="mt-10 w-1/2 px-6 py-4 bg-red-700 text-white text-md font-bold rounded-lg text-center translate-x-2/4"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default OrderList;
