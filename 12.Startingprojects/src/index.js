import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
// import 'sass-loader/dist/cjs.js'
// import 'postcss-loader/dist/cjs.js'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
          <Router>
          <App/>
        </Router>
     
      </Provider>
     
  </React.StrictMode>,
  document.getElementById('root')
)
