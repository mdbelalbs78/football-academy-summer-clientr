import {  useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { FaListAlt, FaRegEdit } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyClass = () => {
  const {user} = useAuth()
  const [showFedData, setShowFedData] = useState([]);
  
  const [getId, setGetId] = useState("");
    // const  [datas, setDatas] = useState([])
    console.log(getId);

    // useEffect(()=>{
    //   fetch(`https://football-academy-server.vercel.app/instructorClasses/${user.email}`)
    //   .then(res=>res.json())
    //   .then(data=> setDatas(data)  )
    // },[user])

    const [axiosSecure] = useAxiosSecure();
  const { data: datas = [], refetch } = useQuery({
    queryKey: ["instructor"],
    queryFn: async () => {
      const res = await axiosSecure(`/instructorClasses/${user?.email}`);
      return res.data;
    },
  });

    console.log(datas);

    const handleShowFedData = (id) => {
      fetch(`https://football-academy-server.vercel.app/classes/${id}`)
        .then((res) => res.json())
        .then((data) => setShowFedData(data));
    };
    //   console.log(showFedData)
    const handleUpdate = (e) => {
      const form = e.target;
      const className = form.text.value;
      const price = form.price.value;
      const feedData = { className, price };
      console.log(getId, feedData);
      fetch(
        `https://football-academy-server.vercel.app/classesUpdate/${getId}`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(feedData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
           console.log(data);
           refetch()
          }
        });
    };

    

    return (
        <div className="w-full">
        <div className="overflow-x-auto">
          <table className="table table-zebra">

            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>instructor</th>
                <th>instructor email</th>            
                <th>status</th>            
                 <th>feedback</th>
                 <th>Update</th>              
              
              </tr>
            </thead>
            <tbody>
              {
              datas.map((data, index) => (
                <tr key={data._id}>
                  <th>{index + 1}</th>   
                  <td>{data.className}</td>  
                  <td>{data.instructorName}</td>  
                  <td>{data.instructorEmail}</td>  
                       
                  <td>{data.status == "approved"? "approved" : data.status == "deny"? "denied" : "pending"}</td>

                  <td>
                    <button
                      disabled={!data?.feedback && true}
                      onClick={() => [
                        window.my_modal_2.showModal(),
                        handleShowFedData(data._id),
                      ]}
                      className="btn btn-ghost bg-orange-600  text-white"
                    >
                      <FaListAlt></FaListAlt>
                    </button>
                  </td>
                  <td>
                    <button
                    className="btn btn-ghost bg-orange-600  text-white"
                      onClick={() => [
                        window.my_modal_1.showModal(),
                        setGetId(data._id),
                      ]}
                    >
                      <FaRegEdit></FaRegEdit>
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* feedback modal body */}
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Feedback</h3>
            <p className="py-4">{showFedData?.feedback?.message}</p>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* update modal body */}
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" onSubmit={handleUpdate} className="modal-box">
            <div>
              <label htmlFor="text" className="text-gray-700 font-bold mb-2">
                class Name:
              </label>
              <input
                id="text"
                name="text"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your class Name"
              ></input>
            </div>
            <div>
              <label htmlFor="price" className="text-gray-700 font-bold mb-2">
                Price:
              </label>
              <input
                id="price"
                name="price"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your price"
              ></input>
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

export default MyClass;