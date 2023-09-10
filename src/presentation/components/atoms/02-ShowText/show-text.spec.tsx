import {fireEvent, render, screen} from '@testing-library/react';
import {ShowText} from '.';

function makeSut() {
  render(<ShowText />);
}

describe('ShowText', () => {
  it('Should hide title initial state', () => {
    makeSut();
    const title = screen.queryByText('Meu titulo');
    expect(title).not.toBeInTheDocument();
  });

  it('Should show title when click in button', () => {
    makeSut();
    fireEvent.click(screen.getByText('Mostrar'));
    expect(screen.queryByText('Meu titulo')).toBeInTheDocument();
  });
});
