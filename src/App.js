import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import boo

function App() {
  // window.localStorage.setItem("all",JSON.stringify(["",0,{}]));
  const [alltaskval, change] = useState(JSON.parse(localStorage.getItem("all"))||["",0,{}]);
  // console.log("ans ",typeof(alltaskval));
  function track(e) {
    console.log(localStorage.getItem("MS"));
    console.log(localStorage.getItem("all"));
    // console.log(e.target.value);
    alltaskval[0] = e.target.value;
    change([...alltaskval]);
  }
  const addtask = (e) => {
    e.preventDefault();
    // console.log(alltaskval);
    // console.log("the ans = "+localStorage.getItem("all"));
    if (alltaskval[0] == "") alert("Please add task ! ..")
    else {
      alltaskval[2] = { ...alltaskval[2], [alltaskval[1] + 1]: alltaskval[0] };
      alltaskval[1] += 1;
    window.localStorage.setItem("all",JSON.stringify(alltaskval));


    }
    alltaskval[0] = "";
    change([...alltaskval]);
    console.log(alltaskval);
    

    // console.log(e.target);
    // alert("clicking");
  }

  function show() {
    var dec = alltaskval[2];
    // console.log(dec);
    var a = Object.keys(dec).map((key) => { return [key, dec[key]] })
    // console.log(dec);
    return a
  }
  function delItem(id) {
    // alltaskval[1]-=1
    const updatedList = Object.entries(alltaskval[2]).filter(([key, value]) => key !== id);
    var updatedList2 = updatedList.map((item) => item[1]);
    alltaskval[2] = updatedList2;
    change([...alltaskval]);
    console.log(alltaskval);
    window.localStorage.setItem("all",JSON.stringify(alltaskval));

    // var updatedList={a:6};
  }
  const arr = [1, 2, 3, 4]
  return (
    <div className='container '>
      <h1 className='text-center mb-5 head'>TODO List in React </h1>
      <div className='row '>

        <form className='d-flex justify-content-center'>
          <input type='text' name='task' value={alltaskval[0]} onChange={(e) => track(e)} ></input>
          {/* <input type='button' onClick={(e)=> e.preventDefault() } >ADD</input> */}
          < button className='btn btn-danger p-2 m-2' onClick={(e) => addtask(e)} > ADD </button>
        </form>
      </div>
      <br></br>
      <br></br>
      <div className='row '>

        <h1 className='text-center mb-3'> <i>your task</i></h1> <br></br><br></br><br></br><br></br>
        <div className='d-flex justify-content-center'>
          <div >

            {
              // arr.map((item)=>  item)
              // alltaskval[2].map((id,item)=>  {return <h1 id={id}>{item}</h1>} )
              // console.log(alltaskval[2])
              show().map((task) => {
                return (<div className='  d-flex task m-2 justify-content-between align-items-center'>
                  <span>{task[1]}</span>
                  <button onClick={() => delItem(task[0])} className='btn btn-danger ml '>DEL</button>
                </div>)
              })


            }

          </div>

        </div>


      </div>
    </div>
  );
}

export default App;
