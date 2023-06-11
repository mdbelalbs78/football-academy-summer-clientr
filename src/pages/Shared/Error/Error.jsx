import error from '../../../assets/error.jpg'
const Error = () => {
    return (
        <div className='mt-5'>
             <div className="card w-full glass">
            <figure>
              <img className='mt-3'
                src={error}
                alt="car!"
              />
            </figure>
            
          </div>
        </div>
    );
};

export default Error;