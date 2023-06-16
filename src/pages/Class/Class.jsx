import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Class = ({ item }) => {
  const { className, image, price, availableSeats, instructorName, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const location = useLocation();
  console.log(item);

  const handleAddToCart = (item) => {
    console.log(item);
    if (user) {
      const classItem = {
        itemId: _id,
        className,
        availableSeats,
        instructorName,
        price,
        image,
        email: user.email,
      };
      fetch("https://football-academy-server.vercel.app/selectedClassData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please Login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "LogIn Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="mt-28 ">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instructor:{instructorName}</h2>
          <h2>name:{className}</h2>
          <p>seats:{availableSeats}</p>
          <p>${price}</p>
        </div>
        <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-success"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Class;
