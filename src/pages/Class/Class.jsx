import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Class = ({item}) => {
    const {instructor,img,price,available_seats} = item;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
   
    const handleAddToCart = item => {
       console.log(item);
       if(user){
        fetch('http://localhost:5000/carts')
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                 
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
            }
        })
       }
       else{
        Swal.fire({
            title: 'Please Login?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'LogIn Now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login')
            }
          })
       }
    }
    return (
        <div className="mt-28 ">
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor}</h2>   
                <p>{available_seats}</p>            
                 <p>${price}</p>
            </div>
            <button onClick={() => handleAddToCart(item)} className="btn btn-success">Select</button>

         </div>
        </div>
    );
};

export default Class;