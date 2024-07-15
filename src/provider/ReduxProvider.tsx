"use client";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import { TRootLayout } from "@/types/RootType";

persistStore(store);

const ReduxProvider = ({ children }: TRootLayout) => {
  return (
    <Provider store={store}>
      {children} <Toaster position="top-center" reverseOrder={false} />
    </Provider>
  );
};

export default ReduxProvider;
