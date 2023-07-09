import React from 'react'
import ReactDOM from 'react-dom'

const header = (
  <header>
    <h1 className='header'>Welcome!</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Guhan Ganesan</p>
    <small>July 9, 2023</small>
  </header>
)

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2020</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)