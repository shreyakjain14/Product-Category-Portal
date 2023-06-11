import React, { useEffect, useMemo, useState } from "react";
import { ICONS_ROOT, PLACEHOLDER_IMAGE_URL } from "../utils/constants";

const ProductDetail = ({ product, setList }: any) => {
  const [price, setPrice] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedPackagingIdx, setSelectedPackagingIdx] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [isUrgentOrder, setIsUrgentOrder] = useState("false");
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  const colors: any[] = useMemo(() => {
    const colorSet = new Set();
    product?.variants.forEach((variant: any) => {
      colorSet.add(variant.colorDescription);
    });
    return Array.from(colorSet);
  }, [product]);

  const colorPackagingMap = useMemo(() => {
    const mp = new Map();
    product?.variants.forEach((variant: any) => {
      if (!mp.get(variant.colorDescription))
        mp.set(variant.colorDescription, new Set());
      mp.get(variant.colorDescription).add({
        packaging: variant.packingDescription,
        price: variant.grossPrice,
      });
    });

    Array.from(mp.keys()).forEach((key) =>
      mp.set(key, Array.from(mp.get(key)))
    );
    return mp;
  }, [product]);

  useEffect(() => {
    setSelectedPackagingIdx(0);
  }, [selectedColorIdx]);

  useEffect(() => {
    const packagingArr = colorPackagingMap.get(colors[selectedColorIdx]);
    if (!packagingArr || packagingArr.length < selectedPackagingIdx) return;
    console.log(
      "inside with ",
      selectedColorIdx,
      selectedPackagingIdx,
      packagingArr[selectedPackagingIdx]
    );
    setPrice(packagingArr[selectedPackagingIdx].price);
  }, [selectedColorIdx, selectedPackagingIdx]);

  const addItemToList = () => {
    setIsSubmitAttempted(true);
    const numQuantity = Number(quantity);
    if (!(!isNaN(numQuantity) && numQuantity >= 12 && numQuantity <= 100))
      return;

    console.log("inside addIyemToList");

    setList((prevItems: any[]) => {
      const idx = prevItems.findIndex(
        (item) =>
          item.color === colors[selectedColorIdx] &&
          item.packaging ===
            colorPackagingMap.get(colors[selectedColorIdx])[
              selectedPackagingIdx
            ].packaging
      );
      if (idx !== -1) {
        const obj = {
          ...prevItems[idx],
          quantity: prevItems[idx].quantity + numQuantity,
        };

        return [...prevItems.slice(0, idx), obj, ...prevItems.slice(idx + 1)];
      }

      return [
        ...prevItems.slice(),
        {
          color: colors[selectedColorIdx],
          packaging: colorPackagingMap.get(colors[selectedColorIdx])[
            selectedPackagingIdx
          ].packaging,
          price: Number(
            colorPackagingMap.get(colors[selectedColorIdx])[
              selectedPackagingIdx
            ].price
          ),
          quantity: numQuantity,
          itemDescription: product.itemDescription,
          imageUrl: product.productImages[0],
          currencySymbol: product.currency.symbol,
        },
      ];
    });
  };

  return (
    <div className="mr-6 ml-6 overflow-y-auto text-black max-w-sm min-w-min">
      <h1 className="text-black text-2xl mb-4 font-bold">
        {product.itemDescription}
      </h1>
      <div className="flex w-96 h-72 bg-gray-100 mb-6 border border-gray-300 rounded-lg items-center justify-center pb-3 relative">
        <img
          className="absolute right-4 top-4 h-4 w-4"
          src={ICONS_ROOT + "wishlist.png"}
          alt="Wishlist-Icon"
        />
        <img
          className="w-40 h-40 mt-4"
          alt="product-image"
          src={product.productImages[0] || PLACEHOLDER_IMAGE_URL}
        />
      </div>
      <div className="text-sm text-gray-500">#{product.productId}</div>
      <div className="flex justify-between mb-10">
        <div className="text-lg font-bold">{product.itemDescription}</div>
        <div className="">
          {product?.currency?.symbol} {price}
        </div>
      </div>
      <div>
        <h2 className="text-lg">Please Select Color Description</h2>
        <div className="mt-4">
          {colors.map((color: string, index: number) => (
            <button
              key={color}
              onClick={() => setSelectedColorIdx(index)}
              className={
                "inline-block mr-4 mb-4 p-4 rounded-lg " +
                (index === selectedColorIdx
                  ? "border border-red-700 bg-red-300 text-red-700"
                  : "border border-gray-200")
              }
            >
              {color}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-lg">Please Select Packaging Description</h2>
          <div className="mt-4">
            {colorPackagingMap
              .get(colors[selectedColorIdx])
              .map((variant: any, index: number) => (
                <button
                  key={colors[selectedColorIdx] + "-" + index}
                  onClick={() => {
                    setSelectedPackagingIdx(index);
                    setPrice(variant.price);
                  }}
                  className={
                    "inline-block mr-4 mb-4 p-4 rounded-lg " +
                    (index === selectedPackagingIdx
                      ? "border border-red-700 bg-red-300 text-red-700"
                      : "border border-gray-200")
                  }
                >
                  {variant.packaging}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="font-bold" htmlFor="quantity">
          Enter Quantity
        </label>
        <input
          className="bg-gray-100 block w-full mt-2"
          type="number"
          value={quantity || ""}
          onChange={(e) => setQuantity(e.target.value)}
          min={12}
          step={1}
          max={100}
        />
        {isSubmitAttempted && Number(quantity) < 12 && (
          <div className="text-sm text-red-700">Minimum order 12*</div>
        )}
        {isSubmitAttempted && Number(quantity) > 12 && (
          <div className="text-sm text-red-700">Maximum order 100*</div>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          className="mr-4"
          id="urgent-checkbox"
          value={isUrgentOrder}
          onChange={(e) => setIsUrgentOrder(e.target.value)}
        />
        <label htmlFor="urgent-checkbox">Need Urgent Order</label>
      </div>
      <div className="flex items-center justify-center mb-10">
        <button
          onClick={addItemToList}
          className="mt-10 text-center border border-red-700 text-red-700 py-2 px-10 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
