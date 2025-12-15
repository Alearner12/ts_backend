
function App() {
  return (
    <>
        <Todo title  = "go to gym "  description = " this is done" 
        done={true}

         ></Todo>
     </>
  )
}

interface Todoprop {
    title : string , 
    description : string, 
    done  : boolean
}

function Todo(props : Todoprop ){
   return <div> 
   <h1> {props.title}</h1>
   <h2>{props.description}</h2>
    <h3 >{props.done}</h3>
   </div>
}
export default App
