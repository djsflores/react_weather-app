import Dashboard from './components/Dashboard/Dashboard';
import SideBar from './components/SideBar/SideBar';
import { WeatherProvider } from './providers/WeatherProvider';

const App = () => {
  return (
    <>
    <WeatherProvider>
      <SideBar />
      <Dashboard />
    </WeatherProvider>
    </>
  );
};

export default App;
