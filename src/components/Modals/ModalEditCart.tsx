import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { setCartItems } from "../../utils/cartSlice";
import closeIcon from "../../assets/icons/close_icon.png";
import crossMarkIcon from "../../assets/icons/cross-mark.png";

const ModalEditCart = ({ closeModal }: any) => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

  const deleteItem = (idx: number) => {
    const items = cartItems.filter((_: any, index: number) => idx !== index);
    dispatch(setCartItems(items));
  };

  return createPortal(
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 ">
      <div className="absolute right-0 bottom-0 top-0 w-3/4 bg-white z-10 p-4">
        <button onClick={closeModal} className="absolute right-6 top-6 ">
          <img className="w-4 h-4" src={closeIcon} alt="close-icon" />
        </button>
        <h1 className="text-2xl text-center underline w-full">Shopping Cart</h1>

        <table className="w-full mt-4">
          <thead className="bg-gray-100 p-4">
            <tr className="w-full">
              <th colSpan={6}>Products</th>
              <th colSpan={1}>Quanity</th>
              <th colSpan={4}>Price</th>
              <th colSpan={1}></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item: any, index: number) => (
              <tr className="my-10 " key={item.color + "-" + item.packaging}>
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
                <td colSpan={4}>
                  <div className="flex items-center justify-between">
                    <div className="mr-2">
                      {item.currencySymbol}&nbsp;
                      {item.quantity * item.price}
                    </div>
                  </div>
                </td>
                <td colSpan={1}>
                  <button onClick={() => deleteItem(index)}>
                    <img
                      className="w-3 h-3"
                      src={crossMarkIcon}
                      alt="cross-mark-icon"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default ModalEditCart;
