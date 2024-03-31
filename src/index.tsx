import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TProductInfoListActions } from "services/ProductInfo/action";
import thunk, { ThunkAction } from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "services/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, ActionCreator, Action } from "redux";
import { BrowserRouter, HashRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TProductInfoListActions;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = typeof store.dispatch;
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
