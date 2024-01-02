import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import "./style.css";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { getLocalStor } from "../../utils/localStoreg";

const SingleProduct = ({ product }) => {

  const handleAddToCard = (id) => {
    const lsCard = getLocalStor("card")
    const isExsist = lsCard.find((item) => item === id)
    if(isExsist) {
      return alert("arlet add kora hoyeche")
    }
    lsCard.push(id);
    const updateLsCard = JSON.stringify(lsCard)
    localStorage.setItem('card', updateLsCard)
  }

  return (
    <div className="mb-4">
      <div id="prodctImg" className="hover:relative overflow-hidden z-40">
        <img className="h-[280px] w-full" src={product?.images[0]} alt="" />
        <div className="absolute flex flex-col gap-2 text-xl transition-all text-[#3fd0d4] top-3 right-[10px]">
          <Link to={`/product/${product?._id}`}>
            <FaRegEye className="cursor-pointer" />
          </Link>
          <FaRegHeart className="cursor-pointer" />
          <BiShoppingBag className="cursor-pointer" />
        </div>
        <button
          onClick={() => handleAddToCard(product?._id)}
          id="btn"
          className="bg-[#3fd0d4] hidden z-50 absolute transition-all w-[90%] cursor-pointer font-Poppins font-medium mx-auto top-[230px] right-[10px] text-white py-2"
        >
          ADD TO CARD
        </button>
        <div className="px-2 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl text-[#2b2b2b]">{product?.name}</h1>
            <p className="text-sm text-[#767676]">{product?.Category}</p>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <h1 className="text-lg text-black">${product?.price}</h1>
            <h1 className="text-xl text-[#767676]">
              <Rate
                disabled
                className="text-sm text-[#3fd0d4]"
                defaultValue={product?.ratting}
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
