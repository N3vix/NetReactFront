import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/loginsignup';
import Homepage from './components/homepage';
import Server from './components/server';
import Channel from './components/channel';
import CreateServer from './components/createserver';
import ServerDiscovery from './components/serverdiscovery';

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <LoginSignup />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}>
            <Route path="/:serverId" Component={Server}>
              <Route path="/:serverId/:channelId" Component={Channel} />
            </Route>
            <Route path="/create" Component={CreateServer}/>
            <Route path="/discovery" Component={ServerDiscovery}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
