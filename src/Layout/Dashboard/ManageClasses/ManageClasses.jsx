
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    });

    console.log(users);

    return (

        <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Ins Name</th>
              <th>Ins Email</th>
              <th>Seats</th>
              <th>Status</th>
                
               <th>Approve</th>
               <th>Deny</th>
               <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {
            users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.instructor}</td>
                <td>{user.class}</td>
                <td>{user.instructor_name}</td>
                <td>{user.email}</td>
                <td>{user.available_seats}</td>
                <td>Approved</td>
           
                
                

                {/* <td><button  className="bg-yellow-500 btn btn-ghost">in</button></td> */}
                
                <td> 
                  <button className="btn btn-ghost  bg-green-400">  Approve</button>
                </td>
                <td> 
                  <button className="btn btn-ghost  bg-green-600"> Deny</button>
                </td>
                <td> 
                  <button className="btn btn-ghost  bg-yellow-500">feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
//         <div>
//             <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Favorite Color</th>
//         <th></th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row 1 */}
//       <tr>
//         <th>
//           <label>
//             <input type="checkbox" className="checkbox" />
//           </label>
//         </th>
//         <td>
//           <div className="flex items-center space-x-3">
//             <div className="avatar">
//               <div className="mask mask-squircle w-12 h-12">
//                 <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">Hart Hagerty</div>
//               <div className="text-sm opacity-50">United States</div>
//             </div>
//           </div>
//         </td>
//         <td>
//           Zemlak, Daniel and Leannon
//           <br/>
//           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
//         </td>
//         <td>Purple</td>
//         <th>
//           <button className="btn btn-ghost btn-xs">details</button>
//         </th>
//       </tr>
     
//     </tbody>
   
    
//   </table>
// </div>
//         </div>
    );
};

export default ManageClasses;