import {fireEvent, render, screen} from '@testing-library/react';
import {GlobalTextContext} from '../../../contexts/GlobalText/GlobalTextContext';
import {GlobalTextSetText} from '.';

type SutTypes = {
  handleSetText: () => void;
};

function makeSut(): SutTypes {
  const handleSetText = vi.fn();

  render(
    <GlobalTextContext.Provider
      value={{
        text: '',
        handleSetText,
      }}
    >
      <GlobalTextSetText />
    </GlobalTextContext.Provider>
  );

  return {
    handleSetText,
  };
}

describe('App', () => {
  it('should call handleSetText with correct value', () => {
    const {handleSetText} = makeSut();

    const input = screen.getByTestId('input');
    fireEvent.change(input, {target: {value: '54321'}});
    fireEvent.click(screen.getByText('Alterar'));

    expect(handleSetText).toHaveBeenCalledWith('54321');
  });
});
