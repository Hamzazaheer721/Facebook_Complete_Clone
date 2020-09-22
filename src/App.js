import React from 'react'
import './App.css';
import Header from './main_components/Header'
import Sidebar from './main_components/Sidebar'
import Feed from './main_components/Feed'
import Widget from './main_components/Widget'
import Login from './main_components/Login'
import { useStateValue } from './React_Context_API/StateProvider'

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <div className= "app">
      {!state ? ( <Login />)
      : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
      
       

    </div>
  )
}

export default App
