import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/SideBar/SideBar';
import { WeatherProvider } from './providers/WeatherProvider';

const App = () => {
  return (
    <WeatherProvider>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-3 col-12 p-0 m-0'>
            <SideBar />
          </div>
          <div className='col-sm-9 col-12 p-0 m-0'>
            <Dashboard />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
};

export default App;
