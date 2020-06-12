import React from 'react';
import ReactDOM from 'react-dom';
import Header from  './components/Header';
import Comment from  './components/Comment'
import faker from 'faker'; 

function App() {
  return (
    <div class="ui container comments">
      <Header />
      <Comment author="Ben" timeAgo="today at 6:12am" content="bullshit!" avatar={faker.image.avatar()}/>
      <Comment author="Stevie" timeAgo="today at 10:45am" content="Hello I have two friends" avatar={faker.image.avatar()}/>
      <Comment author="Horace" timeAgo="today at 12:22pm" content="blueberry pancakes." avatar={faker.image.avatar()}/>
    </div> 
  );
}

export default App
