import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra la sección de clientes', () => {
  render(<App />);
  expect(screen.getByText('Nuestros productos y clientes')).toBeInTheDocument();
  expect(screen.getByText('Atiendo')).toBeInTheDocument();
});
