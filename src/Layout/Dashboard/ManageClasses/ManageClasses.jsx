import { FaCheck, FaRegListAlt, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [getId, setGetId] = useState("");
  const { data: datas = [], refetch } = useQuery(["class"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  console.log(datas);

  const handleApproved = (data) => {
    console.log(data);
    fetch(
      `https://football-academy-server.vercel.app/classes/approved/${data._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Approved !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleDeny = (data) => {
    fetch(
      `https://football-academy-server.vercel.app/classes/deny/${data._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Deny !`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleFeedback = (e) => {
    console.log(getId);
    const form = e.target;
    const message = form.message.value;
    const feedData = { message: message };
    fetch(
      `https://football-academy-server.vercel.app/classes/feedback/${getId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(feedData),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

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
              <th>Seats</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>feedback</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>{data.className}</td>
                <td>{data.instructorName}</td>
                <td>{data.availableSeats}</td>
                <td>
                  {data.status == "approved"
                    ? "approved"
                    : data.status == "deny"
                    ? "denied"
                    : "pending"}
                </td>

                {/* <td><button  className="bg-yellow-500 btn btn-ghost">in</button></td> */}

                <td>
                  {/* {data.status === "approved" || data.status === "deny" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled = {data?.status}
                      >
                        <FaCheck></FaCheck>
                      </button>
                    ) : (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        onClick={() => handleApproved(data._id)}
                      >
                        <FaCheck></FaCheck>
                      </button>
                    )} */}
                  <button
                    className="btn btn-ghost bg-orange-600"
                    onClick={() => handleApproved(data)}
                    disabled={data?.status}
                  >
                    approved
                  </button>
                </td>
                <td>
                  {/* {data.status === "deny" || data.status === "approved" ? (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        disabled
                      >
                        <FaTimes></FaTimes>
                      </button>
                    ) : (
                      <button
                        className="btn btn-ghost bg-orange-600  text-white"
                        onClick={() => handleDeny(data)}
                      >
                        <FaTimes></FaTimes>
                      </button>
                    )} */}
                  <button
                    className="btn btn-ghost bg-orange-600"
                    onClick={() => handleDeny(data)}
                    disabled={data?.status}
                  >
                    deny
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-ghost bg-orange-600  text-white"
                    disabled={data.status === "deny" ? false : true}
                    onClick={() => [
                      window.my_modal_1.showModal(),
                      setGetId(data._id),
                    ]}
                  >
                    <FaRegListAlt></FaRegListAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" onSubmit={handleFeedback} className="modal-box">
          <div>
            <label htmlFor="message" className="text-gray-700 font-bold mb-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-40 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Submit</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;
