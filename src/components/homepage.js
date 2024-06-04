import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './homepage.css'
import { BACKEND_SERVERS_URL, FETCH_GET } from '../constants'

const Homepage = () => {

    const [followings, setFollowings] = useState([]);

    useEffect(() => {
        FETCH_GET(BACKEND_SERVERS_URL, "/servers/user")
            .then(r => r.json())
            .then(data => setFollowings(data))
            .catch(error => console.log(error))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        window.location.href = "/";
    };

    return <div className="page">
        <div className="sidebar">
            <div className="nav-scrollable">
                <nav className="flex-column">
                    <div className="nav-item px-3">
                        <Link className="nav-link" to="/">Home</Link>
                    </div>

                    {followings.map((server, index) =>
                        <div className="nav-item px-3">
                            <Link className="nav-link" key={index} to={server.id}>{server.name}</Link>
                        </div>)}

                    <div className='nav-item px-3'>
                        <Link className='nav-link' to="create">Add a Server</Link>
                    </div>
                    <div className='nav-item px-3'>
                        <Link className='nav-link' to="discovery">Discover Server</Link>
                    </div>


                    <Button variant="success" type="button" onClick={handleLogout}>Log out</Button>
                </nav>
            </div>
        </div>

        <main>
            <article className="content">
                <Outlet />
            </article>
        </main>
    </div>
}

export default Homepage;