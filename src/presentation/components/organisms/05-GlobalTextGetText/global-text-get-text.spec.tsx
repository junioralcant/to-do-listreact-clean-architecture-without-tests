import {render, screen} from '@testing-library/react';
import {GlobalTextContext} from '../../../contexts/GlobalText/GlobalTextContext';
import {GlobalTextGetText} from '.';

function makeSut() {
  render(
    <GlobalTextContext.Provider
      value={{
        text: '1010',
        handleSetText: vi.fn(),
      }}
    >
      <GlobalTextGetText />
    </GlobalTextContext.Provider>
  );
}

describe('App', () => {
  it('should call handleSetText with correct value', () => {
    makeSut();

    expect(screen.getByText('1010')).toBeTruthy();
  });
});
