import { Rate } from "antd";

const SingleFoodRow = ({ item, handleDelete }) => {
  return (
    <tr className="">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-[150px] h-[150px]">
              <img src={item?.images[0]} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <h2 className="text-base">{item?.name}</h2>
      </td>
      <td>
        <h2 className="text-xl font-semibold">${item?.price}</h2>
      </td>
      <th>
        <button
          onClick={() => handleDelete(item._id)}
          className="p-3 text-white font-bold bg-[#3fd0d4]"
        >
          {/* <AiOutlineClose /> */} X
        </button>
      </th>
    </tr>
  );
};

export default SingleFoodRow;
