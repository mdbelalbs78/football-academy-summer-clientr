
const Ins = ({item}) => {
    const {img,instructor_name,director,email} = item;

    return (
        <div className="mt-28">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p>{director}</p>
                <p>{email}</p>
            </div>
         </div>
        </div>
    );
};

export default Ins;