/*import Home from "./Home"

function Data(prop){
  console.log(prop)
  return(
  <>
  <h2>Data Component</h2>
  <h2>College Name:{prop.obj}</h2>
  </>
  )
}
function Players(data){
  return(
    <>
    <h2>List of players</h2>
    {
      data.obj1.map((player)=>{
        console.log(player);
})
    }
    </>
  )
}

function App(){
  let players_data=[{
    name: 'Kolhi',
    team: 'India'
  },
  {
    name: 'Dhoni',
    team: 'India'
  },
  {
    name: 'Sachin',
    team: 'India'
  }
  ]
}

function App(){
  let players_data={
    id:100,
    name:'John',
    team:'India'
  }
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>JS File</h2>
      <p>This is a simple React application.</p>
      <Home/>
      <Data obj="SECE College"/>

    </>
  )
}


export default App

import Home from "./Home"

function Data(prop) {
  console.log(prop)

  return (
    <>
      <h2>Data Component</h2>
      <h2>College Name: {prop.obj}</h2>
    </>
  )
}

function Players(data) {
  return (
    <>
      <h2>List of players</h2>

      {
        data.obj1.map((player, index) => (
          <h3 key={index}>
            {player.name} - {player.team}
          </h3>
        ))
      }
    </>
  )
}

function App() {
  let players_data = [
    {
      name: 'Kohli',
      team: 'India'
    },
    {
      name: 'Dhoni',
      team: 'India'
    },
    {
      name: 'Sachin',
      team: 'India'
    }
  ]

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>JS File</h2>
      <p>This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players obj1={players_data} />
    </>
  )
}

export default App

import Home from "./Home"
import Counter from "./Hooks/UseState/Counter"
import "./App.css"


function Data(prop) {
  return (
    <div className="data-card">
      <h2>Data Component</h2>
      <h3>College Name: {prop.obj}</h3>
    </div>
  )
}

function Players(data) {
  return (
    <div className="players-container">
      <h2>List of Players</h2>

      <div className="card-container">
        {
          data.obj1.map((player, index) => (
            <div className="player-card" key={index}>
              <h3>{player.name}</h3>
              <p>Team: {player.team}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

function App() {
  let players_data = [
    {
      name: "Kohli",
      team: "India"
    },
    {
      name: "Dhoni",
      team: "India"
    },
    {
      name: "Sachin",
      team: "India"
    }
  ]

  return (
    <>
      <h1 className="welcome">Welcome to React</h1>
      <h2 className="subtitle">JS File</h2>
      <p className="subtitle">This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players obj1={players_data} />
    </>
  )
}

export default App
*/
/*import Home from "./Home";
import "./App.css";
import Counter from "./Hooks/UseState/Counter";

function Data(prop) {
  return (
    <div className="data-card">
      <h2>Data Component</h2>
      <h3>College Name: {prop.obj}</h3>
    </div>
  );
}

function Players(data) {
  return (
    <div className="players-container">
      <h2>List of Players</h2>

      <div className="card-container">
        {data.obj1.map((player, index) => (
          <div className="player-card" key={index}>
            <h3>{player.name}</h3>
            <p>Team: {player.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  let players_data = [
    {
      name: "Kohli",
      team: "India",
    },
    {
      name: "Dhoni",
      team: "India",
    },
    {
      name: "Sachin",
      team: "India",
    },
  ];

  return (
    <>
      <h1 className="welcome">Welcome to React</h1>
      <h2 className="subtitle">JS File</h2>
      <p className="subtitle">This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players obj1={players_data} />

      <Counter />
    </>
  );
}

export default App;



import React from "react";
import Flipkart from "./Components/Flipkart";
import { MobileContext } from "./Components/MobileContext";
import User from "./Hooks/UserEffect/User";
import Fetch_API from "./Components/Fetch_API";
import Registration from "./Components/Registration";

function App() {

  const mobileData = {
    name: "Samsung",
    price: 25000,
    color: "Black"
  };

  return (
    <>

      {/*<MobileContext.Provider value={mobileData}>
      <Flipkart />
      </MobileContext.Provider>
      <User />
      <hr />
      <Fetch_API />
      <Registration />

    </>
  );
}

export default App;
*/

import React from "react";
import "./App.css";
import Registration from "./Components/Registration";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
    {/*<Home/>
    <About/>
    <Contact/>*/}

    <BrowserRouter>
    <Navbar />
    <Routes>
   <Route path = '/home' element = {<Home /> } />
   <Route path = '/about' element={<About />} />
   <Route path = '/contact' element={<Contact />} />

    </Routes>
    </BrowserRouter>
    
  {/*<Registration />;*/}
   </>
  );


}

export default App;