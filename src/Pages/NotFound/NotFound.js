import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div>
            <h3 className="text-danger text-center mt-5">NotFound Error 404</h3>
            <h3 className="text-danger text-center mt-5">Please try again</h3>

            <Nav.Link className="text-center h3 mt-3" as={Link} to="/home"><i class="fas fa-arrow-left"></i> Go Home</Nav.Link>
        </div>
    );
};
export default NotFound;