import { describe, it, expect, beforeEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from '../components/Router';
import { Route } from '../components/Route';
import { getCurrentPath } from '../logic/utils';
import { Link } from '../components/Link';

//Dependencias utilizadas: 
//    [] @testing-library/react 
//    [] @testing-library/dom
//    [] vitest
//    [] happy-dom

//te permite mockear el resultado de un metodo para no agregar dependencias innecesarias a tu codigo
vi.mock('../logic/utils', () => ({
    getCurrentPath: vi.fn()
}));

describe('Router', () => {
    beforeEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it('should render', () => {
        render(<Router routes={[]} />);
        expect(true).toBeTruthy();
    });

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
        expect(screen.getByText('404')).toBeTruthy();
    });

    it('should render the component of the first route that matches', () => {
        (getCurrentPath as ReturnType<typeof vi.fn>).mockReturnValue('/about');

        render(
            <Router routes={[]}>
                <Route path='/home' component={() => <h1>Home</h1>}></Route>
                <Route path='/about' component={() => <h1>About</h1>}></Route>
            </Router>
        )

        expect(screen.getByText('About')).toBeTruthy();
    });

    it('should navigate using Links', async () => {
        render(
            <Router routes={[]}>
                <Route path='/home' component={() => {
                    return(
                        <>
                            <h1>Home</h1>
                            <Link to='/about'>About</Link>
                        </>
                    );
                }}></Route>
                <Route path='/about' component={() => <h1>About</h1>}></Route>
            </Router>
        )

        const linkButton = screen.getByText('About');
        fireEvent.click(linkButton);

        const aboutTitle = await screen.findByText('About')

        expect(aboutTitle).toBeTruthy();
    })
})