
const PopularItem = ({item}) => {
    const {name,image,students} = item;
    return (
            
           <div >          
          
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