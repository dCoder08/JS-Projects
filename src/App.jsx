import { useState } from "react";

// function AddTaskDo()
// {
//   const [input,setInput]=useState("");

//   function handleInput(e){
//      console.log(e);
//   }
//   return (
//     <button>clcik</button>
//   )
// }

function AddTaskButton()
{
  function handleAddTask()
  {
      return <Task></Task>
  }

  return (
    <>
     <button onClick={handleAddTask}
     className=' ml-10 p-2  bg-mauve-200 rounded-xl'>+Add Task</button>
    </>
  )

}

function Edit()
{

  return  <button >Edit</button>
}

function Delete()
{
    return <button>Delete</button>
}

function Task()
{
  return(
    <>
    <li className="bg-mauve-200 w-[80%]  m-auto flex  justify-between p-3 mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.

            <div className="  flex gap-4">
             <Edit></Edit>
              <Delete></Delete>
            </div>

    </li>
    </>
  )
}

function App() {
  return (
    <>
      <div className="Container1 bg-mauve-500 m-10 rounded-2xl ">
        <div className=" p-3">
          <h2 className=" p-2 text-2xl rounded-xl  bg-mauve-100">TODO LIST</h2>
        </div>
        <form>
          <div className=' p-10 flex  justify-center'>
            <label >
             
             <input type="text"  className="border p-2  rounded-xl bg-slate-50" placeholder='Enter Task'  />
             <AddTaskButton></AddTaskButton>
            </label>

          </div>

        </form>
        <ul className="py-3" >

          <Task></Task>
          <Task></Task>
          <Task></Task>

        </ul>
      </div>
    </>
  )
}

export default App;

