import React from "react";
import './App.css';
import Navbar from "../commen/component/Navbar/Navbar";
import Sidebar from "../commen/component/Sidebar/Sidebar";

function App() {

    const [state, setState] = React.useState(false);

  return (
    <div>
        <Navbar onChange={(val)=> setState(val)}/>
        <Sidebar state={state} toggleDrawer={(val)=> setState(val)}/>
    </div>
  );
}

export default App;
