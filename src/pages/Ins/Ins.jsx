
const Ins = ({item}) => {
    const {name,image,email} = item;
    console.log(item);

    return (
        <div className="mt-28">
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

export default Ins;