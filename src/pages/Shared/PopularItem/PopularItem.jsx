
const PopularItem = ({item}) => {
    const {instructorName, image, price, available_seats,className} = item;
    console.log(item);
    return (
            
           <div >          
          
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{className}</h2>
                 <p>{available_seats}</p>
                 <p>Price:{price}</p>
                 <h2>instructor:{instructorName}</h2>
            </div>
         </div>
        </div>
    
    );
};

export default PopularItem;