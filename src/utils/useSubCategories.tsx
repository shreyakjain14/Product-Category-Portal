import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSubCategoriesCache } from "./categorySlice";

const useSubCategories = (categoryId: string) => {
  const [subCategories, setSubCategories] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const subCategoriesCache = useSelector(
    (store: any) => store.category.categorySubCategoryMp
  );

  console.log("inside useSubCategories ", categoryId);

  useEffect(() => {
    if (!categoryId) {
      setIsFetching(false);
      return;
    }

    if (subCategoriesCache[categoryId]) {
      setIsFetching(false);
      setSubCategories(subCategoriesCache[categoryId]);
      return;
    }

    setSubCategories([]);
    setIsFetching(true);

    const fetchSubCategoires = async () => {
      try {
        const result = await fetch(
          "https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_" +
            categoryId +
            ".json"
        );
        const json = await result.json();
        console.log("fetched SubCategories with data ", json);
        dispatch(
          setSubCategoriesCache({ categoryId, subCategories: json.result })
        );
        setSubCategories(json.result);
      } catch (err) {
        console.error("Error fetching subcategories ", err);
      } finally {
        setIsFetching(false);
      }
    };

    fetchSubCategoires();
  }, [categoryId, subCategoriesCache]);

  return { subCategories, isFetching };
};

export default useSubCategories;
