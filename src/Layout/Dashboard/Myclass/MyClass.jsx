import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const MyClass = () => {
  const {user} = useAuth()
  console.log(user);
    const [axiosSecure] = useAxiosSecure();
    // const [getId, setGetId] = useState("");
    const { data: datas = [], refetch } = useQuery(["selectedClassData"], async () => {
      const res = await axiosSecure.get(`/selectedClassData/${user.email}`);
      return res.data;
    });

    console.log(datas);

    

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

                  <td>{data?.feedData?.message || ''}</td>
             
                  {/* <td><button  className="bg-yellow-500 btn btn-ghost">in</button></td> */}
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    );
};

export default MyClass;