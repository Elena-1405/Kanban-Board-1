
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

import {TaskDetails} from './components/board/task details/task_details.js'
import { BrowserRouter } from 'react-router-dom'
import {useState,useEffect} from 'react'
import data from './mock.json'



function App() {
  // const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
   const [tasks, setTasks] = useState(data)

	// useEffect(() => {
	// 	console.log(tasks)
	// }, [tasks])

  return (
    <BrowserRouter > 
    <div>
      <Header />
      <Main tasks={tasks} setTasks={setTasks}  />
      <Footer tasks={tasks}/>
      </div>
      </BrowserRouter>
     
   
  );
}

export default App;
