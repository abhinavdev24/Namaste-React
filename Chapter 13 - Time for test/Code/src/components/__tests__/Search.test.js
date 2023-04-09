import Body from "../Body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/dummyData";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import { SHIMMER_CARD_COUNT } from "../../config";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Simmer should load on homepage", () => {
  // Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getAllByTestId("shimmer");
  expect(shimmer[0]).toBeInTheDocument();
  expect(shimmer.length).toBe(SHIMMER_CARD_COUNT);
});

test("Restaurants should load on homepage", async () => {
  // Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("search-btn")));

  const resList = body.getByTestId("restaurant-list");
  expect(resList).toBeInTheDocument();
  expect(resList.children.length).toBe(SHIMMER_CARD_COUNT);
});

test("Search for string(food) on homepage", async () => {
  // Load Body
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getAllByTestId("search-btn")));

  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("restaurant-list");
  expect(resList).toBeInTheDocument();
  expect(resList.children.length).toBe(2);
});
