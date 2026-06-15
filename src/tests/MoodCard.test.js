import { render, screen } from '@testing-library/react';
import MoodCard from '../components/presentational/MoodCard';
import { test, expect } from 'vitest';

test('shows mood card data', () => {
  const fakeMood = {
    mood: 'Happy',
    note: 'Feeling good',
    date: '14/06/2026',
  };

  render(<MoodCard mood={fakeMood} />);

  expect(screen.getByText('Happy')).toBeInTheDocument();
});
