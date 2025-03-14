import React from "react";
import ReactDOM from "react-dom/client"
import { App } from "./App";
import "./index.css"
import { SnackbarProvider } from 'notistack'
import { ErrorProvider } from "./contexts/errorContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <SnackbarProvider>
      <ErrorProvider>
        <App/>
      </ErrorProvider>
    </SnackbarProvider>
  </>
)