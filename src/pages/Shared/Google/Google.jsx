import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const handleGoogleClick = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true});

        })
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center my-6">
            <button onClick={handleGoogleClick} className="btn btn-circle btn-outline ">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default Google;