
const PopularItem = ({item}) => {
    const {name,image,students} = item;
    return (
       
      
           <div >
            
            {/* <div>
            <img className="w-[200px]" src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <p>Seats: {available_seats}</p> */}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{name}</h2>
                 <p>{students}</p>
            </div>
         </div>
        </div>
    
    );
};

export default PopularItem;