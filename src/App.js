import React, { Component } from 'react';
// import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

/*To setup a test json server: json-server --watch db.json -d 2000 -p 3001*/
const store = ConfigureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
