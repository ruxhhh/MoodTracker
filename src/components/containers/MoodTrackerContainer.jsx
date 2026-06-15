import { useContext } from 'react';
import { MoodContext } from '../../context/MoodContextOnly';
import MoodForm from '../presentational/MoodForm';
import MoodHistory from '../presentational/MoodHistory';

function MoodTrackerContainer() {
  const { moods, addMood, deleteMood } = useContext(MoodContext);

  return (
    <>
      <MoodForm onAddMood={addMood} />

      <MoodHistory moods={moods} onDelete={deleteMood} />
    </>
  );
}

export default MoodTrackerContainer;
