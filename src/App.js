import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <p>你点击了{count}次。</p>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
}

export default App;
