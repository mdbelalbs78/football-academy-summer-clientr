import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure()
    const {data:users = [], refetch} =useQuery(['users'], async() => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete = user => {

    }

    const handleMakeAdmin = user => {
       fetch(`http://localhost:5000/users/admin/${user._id}`, {
         method: 'PATCH',
       })
       .then(res => res.json())
       .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin `,
                showConfirmButton: false,
                timer: 1500
              })
        }
       })
    }

    return (
<div className="w-full">
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Instructor</th>
        <th>Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>  <tr
         key={user._id}
        >
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>         
            <td>Role</td>
            <td><button className="bg-yellow-500 btn btn-ghost">in</button></td>
            <td>
                {
                    user.role === 'admin' ? 'admin' : 
                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-yellow-500"><FaUserShield></FaUserShield></button>
                }
            </td>
            <td>
              <button onClick={() => handleDelete(user)} className="btn btn-ghost  bg-red-500"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;