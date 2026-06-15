function MoodCard({ mood, onDelete }) {
  return (
    <div className="mood-card">
      <div className="top-row">
        <h3>{mood.mood}</h3>
        <span>{mood.date}</span>
      </div>

      <p>{mood.note}</p>

      <div className="suggestion-box">
        <strong>Suggestion:</strong>
        <p>{mood.suggestion}</p>
      </div>

      <button className="delete-btn" onClick={() => onDelete(mood.id)}>
        Delete
      </button>
    </div>
  );
}

export default MoodCard;
