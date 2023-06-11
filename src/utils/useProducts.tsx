import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductsForSubCategory } from "./categorySlice";

const useProducts = (id: string) => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const productsCache = useSelector(
    (store: any) => store.category.subCategoryProductsMp
  );

  useEffect(() => {
    if (!id) {
      setIsFetching(false);
      return;
    }

    if (productsCache[id]) {
      setIsFetching(false);
      setProducts(productsCache[id]);
      return;
    }

    setProducts([]);
    setIsFetching(true);

    const fetchProducts = async () => {
      try {
        const result = await fetch(
          "https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_" +
            id +
            ".json"
        );
        const json = await result.json();
        setProducts(json.result);
        dispatch(setProductsForSubCategory({ id, products: json.result }));
      } catch (err) {
        console.error("Error fetching products for id ", id);
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, [id]);

  return { products, isFetching };
};

export default useProducts;
