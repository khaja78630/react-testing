import { render, screen, fireEvent} from '@testing-library/react';
import sum from './sum';

test('check sum', () => {
    expect(sum(10, 20)).toBe(29);

})
