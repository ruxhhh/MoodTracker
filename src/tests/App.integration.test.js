import { render, screen } from '@testing-library/react';
import App from '../App';
import MoodProvider from '../context/MoodContext';
import { test, expect } from 'vitest';

test('app loads login page', () => {
  render(
    <MoodProvider>
      <App />
    </MoodProvider>,
  );

  expect(screen.getByText('Mood Tracker')).toBeInTheDocument();
});
