
const Coach = ({item}) => {
    const {email, image, name} = item;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
            
            </div>
         </div>
        </div>
    );
};

export default Coach;