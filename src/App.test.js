import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra la sección de clientes', () => {
  render(<App />);
  expect(screen.getByText('Negocios que confían en nosotros')).toBeInTheDocument();
  expect(screen.getByText('A&D Minimarket')).toBeInTheDocument();
});
