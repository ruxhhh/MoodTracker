import { useContext } from 'react';
import { MoodContext } from '../context/MoodContextOnly';
import Navbar from '../components/presentational/Navbar';
import MoodTrackerContainer from '../components/containers/MoodTrackerContainer';

function Dashboard() {
  const { theme } = useContext(MoodContext);

  return (
    <div className={theme}>
      <Navbar />
      <MoodTrackerContainer />
    </div>
  );
}

export default Dashboard;
