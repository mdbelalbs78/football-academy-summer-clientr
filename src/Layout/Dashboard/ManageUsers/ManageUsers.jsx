import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";

const ManageUsers = () => {
    const {data:users = [], refetch} =useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDelete = user => {

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
            <td>Role</td>
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