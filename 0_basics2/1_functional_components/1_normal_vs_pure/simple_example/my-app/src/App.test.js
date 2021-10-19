import React from 'react';
import { render } from '../../../../../0_class_components/1_normal_vs_pure/mutation_problem_example/pure_component/my-app/node_modules/@types/testing-library__react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
