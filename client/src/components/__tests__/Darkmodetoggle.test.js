import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import DarkMode from '../Darkmodetoggle';

let tools;

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<DarkMode />);
})

describe('DarkMode component', () => {
    it('can debug the output', () => {
        tools.debug();
    });
    it('renders the button toggle by text toggle', () => {
        const toggleButton = tools.queryByText(/toggle/i);
        expect(toggleButton).toBeInTheDocument();
    });
    it('renders the button toggle by toggle button render', () => {
        const toggleButtonRendered = tools.queryByTestId('toggleButton');
        expect(toggleButtonRendered).toBeInTheDocument();
    });
})