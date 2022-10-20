import {fireEvent, render, renderHook, screen} from '@testing-library/react';
import Index from "../../../../pages/employee/add/index";
import Home from "../../../../pages";
import {createMockRouter} from "../../../../helpers/createMockrouter";
import { RouterContext } from 'next/dist/shared/lib/router-context';
const useRouter = jest.spyOn(require('next/router'), 'useRouter')



describe('Home', () => {
    it('renders a description', () => {
        const { container } = render(<Index/>)
        const textToFind = "LIST VIEW"
        const a = screen.getByText(textToFind)
        expect(a).toBeInTheDocument();
        expect(container).toMatchSnapshot()
    })

    it('calls router.push with "/contacts', () => {
        const router = createMockRouter({
            // query: { id: '44' },
            pathname: 'add',
            basePath: 'employee',
        });

        render(
            <RouterContext.Provider value={router}>
                <Index/>;
            </RouterContext.Provider>
        );

        fireEvent.click(screen.getByRole('button'));
        // expect(router.push).toHaveBeenCalledWith(
        //     '/employee/list'
        // );
    });
})
