import {render, screen} from '@testing-library/react';
import {Button, ButtonProps} from '.';

function makeSut({title}: ButtonProps) {
  render(<Button title={title} />);
}

describe('Button', () => {
  it('Should render button with correct tittle', () => {
    makeSut({title: 'Entrar Novo'});

    expect(screen.getByText(/Entrar/i)).toBeInTheDocument();
  });
});
