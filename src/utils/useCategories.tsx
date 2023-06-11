import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoriesCache } from "./categorySlice";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const categoriesCache = useSelector(
    (store: any) => store.category.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesCache.length > 0) {
      setCategories(categoriesCache);
      return;
    }

    const fetchCategories = async () => {
      console.log("inside fetch");
      try {
        const result = await fetch(
          "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
        );
        const json = await result.json();
        console.log("inside fetchCategories response", json);
        dispatch(setCategoriesCache(json.result));
        setCategories(json.result);
      } catch (err) {
        console.error("Error fetching categories ", err);
      }
    };

    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;
