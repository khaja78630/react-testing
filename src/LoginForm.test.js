import { render, screen, fireEvent} from '@testing-library/react';
import LoginForm from './LoginForm,';

describe('login form test cases1', () =>{
    beforeEach(() => {
        render(<LoginForm name="Test"/>);
    })
    
    test('check labels present', () =>{
        
        const textelement = screen.getByRole('textbox');
        expect(textelement).toBeInTheDocument();
        const buttonEle = screen.getByRole('button');
        expect(buttonEle).toBeInTheDocument();
    })

    test('check button event', () =>{
       
        const button = screen.getByText('Login');
        fireEvent.click(button);
        const paragraphele = screen.getByText('login status true')
        expect(paragraphele).toBeInTheDocument();
    })
    test('check text box onchange event', () =>{
       
        const inputbox = screen.getByRole('textbox');

        fireEvent.change(inputbox, {target: {value : 'Vinay'}});
        const paragraphele = screen.getByText('user name Vinay')
        expect(paragraphele).toBeInTheDocument();
    })
})



