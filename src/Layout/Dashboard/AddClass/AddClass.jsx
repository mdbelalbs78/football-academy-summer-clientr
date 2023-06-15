import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const handleInputFrom = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const seats = form.seats.value;
    
        const addClass = {
          image: picture,
          className:name,
          instructorName:sellerName,
          instructorEmail:sellerEmail,
          price,
          availableSeats:seats,
        };
        console.log(addClass);
        axiosSecure.post('/classes', addClass)

        .then(data => {
            console.log(data);
        })

      };
    return (
        <div className="container mx-auto px-4 bg-gray-100">
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleInputFrom}
          id="addToyForm"
          className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-6">Class Add</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Picture URL
            </label>
            <input
              type="text"
              name="picture"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Class Name</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>        
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Available seats</label>
            <input
              type="text"
              name="seats"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
            Instructor name
            </label>
            <input
              type="text"
              name="sellerName"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
            Instructor email
            </label>
            <input
              type="text"
              name="sellerEmail"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>
         
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              type="text"
              name="price"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded `}
            >
              Add button
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default AddClass;