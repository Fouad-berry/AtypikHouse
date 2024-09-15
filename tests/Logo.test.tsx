import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Logo from '@/app/components/NavBar/Logo'; // Assurez-vous que le chemin vers le composant est correct

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

    // Vérifier que l'image du logo est bien rendue
    const logoImage = screen.getByAltText('Atypik');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/images/logo_atypikhouse.png');
    expect(logoImage).toHaveAttribute('height', '100');
    expect(logoImage).toHaveAttribute('width', '100');
  });

  it('navigates to the homepage when the logo is clicked', () => {
    render(<Logo />);

    // Vérifier que le logo est bien cliquable
    const logoImage = screen.getByAltText('Atypik');
    fireEvent.click(logoImage);

    // Vérifier que la fonction push a été appelée pour rediriger vers "/"
    expect(push).toHaveBeenCalledWith('/');
  });
});