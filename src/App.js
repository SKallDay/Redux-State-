import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/post';
import PostForm from './components/post-form';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr></hr>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
