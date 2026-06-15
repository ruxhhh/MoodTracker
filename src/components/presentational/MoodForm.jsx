import { useState, useRef } from 'react';

function MoodForm({ onAddMood }) {
  const [selectedMood, setSelectedMood] = useState('');
  const noteRef = useRef();
  const [error, setError] = useState('');

  // mood suggestions
  const getSuggestion = (mood) => {
    switch (mood) {
      case 'Happy':
        return 'You are doing great. Celebrate small wins today 🎉';

      case 'Sad':
        return 'Listen to music, take a walk, or talk with family 💙';

      case 'Angry':
        return 'Pause for 5 minutes before reacting. Protect your peace 🧘';

      case 'Calm':
        return 'Perfect state for studying or planning your next move 📖';

      case 'Motivated':
        return 'Start that difficult task now while energy is high 🔥';

      default:
        return 'Take care of yourself today ❤️';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = noteRef.current.value;

    if (!selectedMood) {
      setError('Please select a mood');
      return;
    }

    if (note.trim() === '') {
      setError('Please enter a note');
      return;
    }

    const moodData = {
      id: Date.now(),
      mood: selectedMood,
      note: note,
      date: new Date().toLocaleDateString(),
      suggestion: getSuggestion(selectedMood), // IMPORTANT
    };

    onAddMood(moodData);

    setSelectedMood('');
    noteRef.current.value = '';
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mood-form">
      <h2>Track Mood</h2>

      <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
        <option value="">Select Mood</option>
        <option value="Happy">😊 Happy</option>
        <option value="Sad">😔 Sad</option>
        <option value="Angry">😡 Angry</option>
        <option value="Calm">😌 Calm</option>
        <option value="Motivated">🔥 Motivated</option>
      </select>

      <input ref={noteRef} placeholder="Why do you feel this way?" />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button>Add Mood</button>
    </form>
  );
}

export default MoodForm;
