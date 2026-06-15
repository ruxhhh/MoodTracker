import MoodCard from './MoodCard';

function MoodHistory({ moods, onDelete }) {
  return (
    <div className="history">
      <h2>Mood History</h2>

      {moods.map((item) => (
        <MoodCard key={item.id} mood={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default MoodHistory;
