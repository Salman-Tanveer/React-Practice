// State (In depth) => Form Handling => Control Component 

//import logo from './logo.svg';
//import './App.css';
import HadsawClass from './HadsawClass'
import SaluFunction from './SaluFunction';
import Counter from './Counter';
import ToDoList from './ToDoList';
import Form from './Form';
import StudentForm from './StudentForm';
import HadsawForm from './HadsawForm';
import ClassComponent from './ClassComponent';
import PForm from './PForm';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Profile from './Pages/Profile';
import Ashi from './Component/Ashi';
import Roshu from './Component/Roshu';
import Jala from './Component/Jala';
import A from './ContextComponent/A';
import { createContext } from 'react';
import Wrapper from './Rendering/Wrapper';
import Counter1 from './Rendering/Counter1';
import Counter4 from './Rendering/Counter4';
const fName = createContext()
const LName = createContext()
function App() {
  const task = ["Task1" ,"Task2" , "Task3"]
  

  const Person = {
    name: "Salman" ,
    fName: "Tanveer" ,
    cell: "012101010" , 
    hobbies : ["eating" , " sleeping" , "drink"] 
 }; 

   
 
 return (
      
    <div>
          <Wrapper render={(count , handler)=>{
            return <Counter1 count={count} handleState={handler}  />
          }}/>
    </div>
  );

}



export default App;
export {fName , LName} 

//Context API Steps 3
//1. Create Context
//2. Provider  - jo prop provide krega
//3. Consumer - Jo prop use krega



/*
<Routes>
<Route path='/' element={<Home/>}>
 
</Route>
<Route path='/About' element={<About />}>

</Route>
<Route path='/Contact' element={<Contact />}>

</Route>
<Route path='*' element={<Error404 />}>

</Route>
<Route path='/Profile' element={<Profile />}>

</Route>  
</Routes>
*/
/*
<fName.Provider value={"Hadsaw G"}>
      <LName.Provider value={"Salu"}>
      <A/> 
      </LName.Provider>
      </fName.Provider>
  */    