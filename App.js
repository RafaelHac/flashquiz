import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { setLocalNotification } from './utils/notifications';
import HomeScreen from './components/HomeScreen';

class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <HomeScreen/>
      </Provider>
    )
  }
}

export default App;