import Header from './Header';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
  it('should render Header component', () => {
    render(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  it('should render search input', () => {
    render(<Header />);

    const inputSearch = screen.getByRole('searchbox');

    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveAttribute('type', 'search');
  });
});
