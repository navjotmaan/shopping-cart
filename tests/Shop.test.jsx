import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider} from "react-router-dom";
import routes from "../src/routes";

global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    status: 200,
    json: () => Promise.resolve([
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'fake product',
            description: 'fake product',
            price: 20,
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/160',
            title: 'another fake product',
            description: 'another fake product',
            price: 50,
        },
    ]),
});

test('should display mocked products', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
        initialEntries: ['/']
    });

    render(<RouterProvider router={router}/>);

    const shopLink = screen.getByRole('link', { name: /shopping/i });
    await user.click(shopLink);

    const cards = await screen.findAllByTestId('product-card', {}, { timeout: 3000 });

    expect(cards.length).toBe(2);
});