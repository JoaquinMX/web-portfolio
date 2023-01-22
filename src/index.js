// import React from 'react';
// import ReactDOM from 'react';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById("app"));
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);
root.render(<App />)