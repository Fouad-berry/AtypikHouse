import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/NavBar/Logo';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Logo', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo image', () => {
    render(<Logo />);

    const logoImage = screen.getByAltText('Atypik');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/images/logo_atypikhouse.png');
    expect(logoImage).toHaveAttribute('height', '100');
    expect(logoImage).toHaveAttribute('width', '100');
  });

  it('navigates to the homepage when the logo is clicked', () => {
    render(<Logo />);

    const logoImage = screen.getByAltText('Atypik');
    fireEvent.click(logoImage);

    expect(push).toHaveBeenCalledWith('/');
  });
});
