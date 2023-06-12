import placeHolderImg from "../assets/icons/image-placeholder.svg";

const CategoryCard = ({
  category,
  categoryIdx,
  activeCategoryIdx,
  onClick,
}: any) => {
  const { categoryId, categoryImageURL, categoryName } = category;

  return (
    <button
      className={
        "relative flex-shrink-0 mr-10 inline-block flex items-center justify-center " +
        (categoryIdx === activeCategoryIdx &&
          "border border-red-500 rounded-lg")
      }
      onClick={onClick}
    >
      <img className="w-40 h-40 p-2" src={categoryImageURL || placeHolderImg} />
      <div
        className={
          "absolute text-center mx-auto text-white bottom-" +
          (!categoryImageURL ? "10" : "4")
        }
      >
        {categoryName}
      </div>
    </button>
  );
};

export default CategoryCard;
