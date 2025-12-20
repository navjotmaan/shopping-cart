import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>Oh! this route does not exist</h1>
            <Link to='/'>
                You can go back to home page by clicking here!
            </Link>
        </div>
    )
};

export default Error;