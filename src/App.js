import React, { useState, useEffect } from 'react';
// import { Container, Button, Alert } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // demo1
  // // 声明一个新的叫做 “count” 的 state 变量
  // const [count, setCount] = useState(0);
  // return (
  //   <div className="App">
  //     <p>你点击了{count}次。</p>
  //     <button onClick={() => setCount(count + 1)}>点我</button>
  //   </div>
  // );

  // demo2 - react动画库（react-transition-group）学习
  // const duration = 300;
  // const defaultStyle = {
  //   transition: `opacity ${duration}ms ease-in-out`,
  //   opacity: 0
  // };
  // const transitionStyles = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 }
  // };
  // const [inProp, setInProp] = useState(false);
  // return (
  //   <div>
  //     <Transition in={inProp} timeout={500}>
  //       {state => (
  //         <div
  //           style={{
  //             ...defaultStyle,
  //             ...transitionStyles[state]
  //           }}
  //         >
  //           I'm a fade Transition!
  //         </div>
  //       )}
  //     </Transition>
  //     <button onClick={() => setInProp(true)}>Click to Enter</button>
  //   </div>
  // );

  // demo3 - 动画学习
  // const [showButton, setShowButton] = useState(true);
  // const [showMessage, setShowMessage] = useState(false);
  // return (
  //   <Container style={{ paddingTop: '2rem' }}>
  //     {showButton && (
  //       <Button onClick={() => setShowMessage(true)} size='lg'>
  //         Show Message
  //       </Button>
  //     )}
  //     <CSSTransition
  //       in={showMessage}
  //       timeout={300}
  //       classNames='alert'
  //       unmountOnExit
  //       onEnter={() => setShowButton(false)}
  //       onExited={() => setShowButton(true)}
  //     >
  //       <Alert variant='primary' dismissible onClose={() => setShowMessage(false)}>
  //         <Alert.Heading>Animated alert message</Alert.Heading>
  //         <p>This alert message is being transitioned in and out of the DOM.</p>
  //         <Button onClick={() => setShowMessage(false)}>Close</Button>
  //       </Alert>
  //     </CSSTransition>
  //   </Container>
  // );

  // demo4 hooks状态为对象情况
  // 声明一个新的叫做 “count” 的 state 变量
  const [obj, setObj] = useState({});
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    let o = {};
    for (let i = 0; i < arr.length; i++) {
      o[i + 1] = true;
    }
    setObj(o);
  }, [arr.length]);

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * 10);
    setObj({
      ...obj,
      [randomNum]: false
    });
  };

  const listEl = arr.map(i => {
    return (
      obj[i] && (
        <div key={i} className='item'>
          li - {i}
        </div>
      )
    );
  });

  return (
    <div className='App'>
      <div className='list'>{listEl}</div>
      <button onClick={handleClick}>点我</button>
    </div>
  );
}

export default App;
