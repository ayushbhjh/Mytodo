
import React,{useState} from 'react'
function App() {
  
   const [todo,settodo]=useState("")
   const [alltodo,allsettodo]=useState([])
   const [editid,seteditid]=useState(0);
   const handlesubmit= (e)=>{
    e.preventDefault();  

    if(editid){
     const edittodo= alltodo.find((i)=> i.id===editid);
     const updatetodo =alltodo.map((t)=> t.id===edittodo.id? t={id:t.id,todo}:{id:t.id,todo: t.todo})
     allsettodo(updatetodo)
     seteditid(0)
     settodo('')
     return 
    }
    if(todo!==''){
      allsettodo([{id:`${todo}-${Date.now()}`,todo},...alltodo])
      settodo("")
    }
   }
   const handledelte=(id)=>{
    const deletetodo=alltodo.filter((to)=> to.id!==id);
    allsettodo(deletetodo)
   }
   const handleedit=(id)=>{
    const find=alltodo.find((i)=>i.id===id)
    settodo(find.todo)
    seteditid(id)
   }

  return (
    <div className="flex justify-center items-center h-screen w-full bg-blue-600 ">
    <div className="flex h-[70%] border border-grey-900 w-[45%] p-4 flex-col items-center text-2xl text-white ">
      <h1 className="mr-4">To Do List App</h1>
      <form className="flex justify-around w-5/6 h-20 mt-5 ml-10" onSubmit={handlesubmit}>
        <input type="text" className="m-2 mt-3 w-80 h-12 rounded-lg text-black p-3 outline-none" value={todo} onChange={(e)=>settodo(e.target.value)}></input>
        <button className="h-12 w-12 bg-black mt-3 rounded-full  ml-2" type='submit'>{editid ? "Edit":"Go"}</button>
      </form>
      {
        alltodo.map((t)=> 
        <ul className="list-none h-16 w-[70%] bg-pink-600 mr-16 mt-5 p-3">
        <li>
          <span className="text-xl" key={t.id}>{t.todo}</span>
          <button className="text-sm ml-28 h-10 w-12 bg-yellow-300 rounded-full" onClick={()=> handleedit(t.id)}>Edit</button>
          <button className="text-sm ml-10 bg-yellow-300 h-10 w-14 rounded-full" onClick={()=>handledelte(t.id)}>Delete</button>
        </li>

      </ul>
      )
      }
      {/* <ul className="list-none h-16 w-[70%] bg-pink-600 mr-16 mt-5 p-3">
        <li>
          <span className="text-xl">Learn React</span>
          <button className="text-sm ml-28 h-10 w-12 bg-yellow-300 rounded-full">Edit</button>
          <button className="text-sm ml-10 bg-yellow-300 h-10 w-14 rounded-full">Delete</button>
        </li>

      </ul> */}
    </div>
    </div>
  );
}




export default App;
