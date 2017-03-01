import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store';
import App from './containers/App';

injectTapEventPlugin();

import './reset.css';
import './style/fonts.css';

const initialState = {};
const store = configureStore(initialState);

const renderApp = CurrentApp => {
  ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
        <MuiThemeProvider>
          <CurrentApp />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const nextApp = require('./containers/App').default;
		renderApp(nextApp);
	});
}
