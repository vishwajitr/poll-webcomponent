import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import r2wc from "@r2wc/react-to-web-component"
import Layout from './Layout.jsx'
import DemoOne from "./DemoOne.jsx";
import Opinary from './components/Opinary.jsx'


const Main = () => {
  return(
    <div>
      <Opinary/>
      <DemoOne />
    </div>
  )
}

// const PollElement = r2wc(DemoOne,React,ReactDOM);
// customElements.define("poll-element",PollElement);

// Render the React App only if the root element is present
const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Rendering React App');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Main/>
    </React.StrictMode>,
  );
} else {
  console.log('Root element not found');
}