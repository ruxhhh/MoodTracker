import { render, screen } from '@testing-library/react';
import MoodForm from '../components/presentational/MoodForm';
import { test, expect } from 'vitest';

test('renders add mood button', () => {
  render(<MoodForm onAddMood={() => {}} />);

  const button = screen.getByText('Add Mood');

  expect(button).toBeInTheDocument();
});
