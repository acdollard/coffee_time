import React from 'react';
import ReactDOM from 'react-dom';
import Header from  './components/Header';
import Comment from  './components/Comment'
import faker from 'faker'; 
import ApprovalCard from './components/ApprovalCard'

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard >
        <Comment author="Ben" timeAgo="today at 6:12am" content="bullshit!" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Stevie" timeAgo="today at 10:45am" content="Hello I have two friends" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Horace" timeAgo="today at 12:22pm" content="blueberry pancakes." avatar={faker.image.avatar()}/>
      </ApprovalCard>
    </div> 
  );
}

export default App
