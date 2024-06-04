import './serverdiscovery.css'

import { useState, useEffect } from 'react';

import { FETCH_GET, BACKEND_SERVERS_URL } from '../constants'
import { Button } from 'react-bootstrap';

const ServerDiscovery = () => {

    const [allServers, setAllservers] = useState([]);

    useEffect(() => {
        FETCH_GET(BACKEND_SERVERS_URL, "/servers")
            .then(r => r.json())
            .then(data => setAllservers(data))
            .catch(error => console.log(error))
    }, [])

    const FollowServer = (serverId) => {
        let s = "";
    }

    return <div class="cards-container">
        {allServers.map((server, index) =>
            <div class="card-holder">
                <img src="" alt="Image description" />
                <h3>{server.name}</h3>
                <Button variant="success" type="button" onClick={() => FollowServer(server.id)}>test</Button>
            </div>)}
    </div>
}

export default ServerDiscovery;