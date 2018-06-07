import 'antd/dist/antd.css'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { routeConfig } from './config/route.config'
import * as routeMap from './containers'
import store from './store/index'

import './logo.svg'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              {routeConfig.map(route => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  key={route.name}
                  component={routeMap[route.name]}
                />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
