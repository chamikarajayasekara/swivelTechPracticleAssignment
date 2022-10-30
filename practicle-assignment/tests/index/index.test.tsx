import {render, renderHook, screen} from '@testing-library/react'
import Home from '../../pages/index'


describe('Home', () => {
    it('renders a description', () => {
        const { container } = render(<Home />)
        const textToFind = "Welcome to Employee Management System"
        const a = screen.getByText(textToFind)
        expect(a).toBeInTheDocument()

        // expect(container).toMatchSnapshot()
    })
})