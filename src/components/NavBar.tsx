import {
  BURGER_MENU_IMG_URL,
  LOGO_URL,
  USER_IMAGE_URL,
} from "../utils/constants";

const NavBar = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg bg-white">
      <a href="/">
        <img className="h-10 mx-2" src={LOGO_URL} alt="website-logo" />
      </a>
      <div className="max-md:block md:hidden col-span-10 " />
      <div className="max-md:block md:hidden col-span-1 ">
        <img className="h-8 w-8" src={BURGER_MENU_IMG_URL} alt="Menu" />
      </div>

      <div className="col-span-9 max-md:hidden px-10 flex justify-center">
        <input
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-md bg-gray-100"
          type="text"
          placeholder="🔍  Search..."
        />
      </div>
      <div className="col-span-1 max-md:hidden flex justify-center items-center">
        <label htmlFor="logo-drop-down">
          <img
            className="h-8 max-2 cursor-pointer"
            src={LOGO_URL}
            alt="drop-down-logo"
          />
        </label>
        <select name="" className="cursor-pointer" id="logo-drop-down"></select>
      </div>
      <div className="col-span-1 max-md:hidden ">
        <img className="h-8" alt="user" src={USER_IMAGE_URL} />
      </div>
    </div>
  );
};

export default NavBar;
