import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import r2wc from "@r2wc/react-to-web-component"
import DemoOne from "./DemoOne.jsx";



const PollElement = r2wc(DemoOne,React,ReactDOM);
customElements.define("poll-element",PollElement);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
