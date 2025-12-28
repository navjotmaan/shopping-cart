import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider} from "react-router-dom";
import routes from "../src/routes";
import { expect } from "vitest";

test('navigates to Shop, then goes to Cart', async () => {
    const user = userEvent.setup();

    const router = createMemoryRouter(routes, {
        initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    const shopLink = screen.getByRole('link', { name: /shopping/i });
    await user.click(shopLink);

    expect(router.state.location.pathname).toBe('/shop');

    const cartLink = screen.getByRole('link', { name: /cart/i });
    await user.click(cartLink);

    const title = await screen.findByRole('heading', {name: /Your Cart/i});
    expect(title).toBeInTheDocument();
    expect(router.state.location.pathname).toBe('/cart');
});
