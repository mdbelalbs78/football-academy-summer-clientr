import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const StudentCart = () => {
    const [cart] = useCart()
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <h2>Student cart belal</h2>
            total: {total}
<div>
  <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map((row,  index) => <tr key={row._id}>
            <td>
              {index+1}
            </td>
            <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={row.img} />
                  </div>
                </div>
                
              
            </td>
            <td>
              {row.instructor}
            </td>
            <td className="text-end">${row.price}</td>
            <td>
              <button className="btn btn-ghost  bg-red-500"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
      }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
        
    );
};

export default StudentCart;