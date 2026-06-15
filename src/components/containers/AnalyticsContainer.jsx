import { useContext } from 'react';
import { MoodContext } from '../../context/MoodContextOnly';

function AnalyticsContainer() {
  const { moods } = useContext(MoodContext);

  const happyCount = moods.filter((m) => m.mood.includes('Happy')).length;

  const sadCount = moods.filter((m) => m.mood.includes('Sad')).length;

  return (
    <div>
      <h2>Analytics</h2>

      <p>Happy Days : {happyCount}</p>
      <p>Sad Days : {sadCount}</p>
      <p>Total Entries : {moods.length}</p>
    </div>
  );
}

export default AnalyticsContainer;
