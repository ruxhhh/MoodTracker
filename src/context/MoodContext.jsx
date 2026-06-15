import { useState } from 'react';
import { MoodContext } from './MoodContextOnly';
import useLocalStorage from '../hooks/useLocalStorage';

function MoodProvider({ children }) {
  // stored in localStorage
  const [moods, setMoods] = useLocalStorage('moods', []);

  // theme state
  const [theme, setTheme] = useState('dark');

  // add new mood
  const addMood = (newMood) => {
    setMoods((prev) => [...prev, newMood]);
  };

  // delete mood
  const deleteMood = (id) => {
    setMoods((prev) => prev.filter((mood) => mood.id !== id));
  };

  // toggle dark/light theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <MoodContext.Provider
      value={{
        moods,
        addMood,
        deleteMood,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </MoodContext.Provider>
  );
}

export default MoodProvider;
