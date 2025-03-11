import { useState } from 'react';
import './App.css'
import MyButton from './MyButton'
import Products from './Products';
import MyOtherButton from './MyOtherButton';

function App() {
  const [commonState, setCommonState] = useState(0)

  function handleClick() {
    setCommonState(commonState + 1)
  }

  return (
    <>
      <h1>Hello world!</h1>
      <MyButton />
      <About />
      <Profile />
      <Products />

      <MyOtherButton count={commonState} onClick={handleClick} />
      <MyOtherButton count={commonState} onClick={handleClick} />
      <MyOtherButton count={commonState} onClick={handleClick} />

    </>
  )
}

function About() {
  return <h2 className='about'>About</h2>
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageSize / 2,
          border: '2px solid red',
        }}
      />
    </>
  )
}

export default App
