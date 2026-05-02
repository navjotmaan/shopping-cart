import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center mt-50">
            <h1>Oh! this route does not exist</h1>
            <Link to='/'>
                <p>You can go back to home page by clicking <span className="text-blue-600">here</span></p>
            </Link>
        </div>
    )
};

export default Error;