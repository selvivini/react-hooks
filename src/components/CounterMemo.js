import React , {useState, useMemo}from 'react'

function CounterMemo() {
    const[counter1, setCounter1] = useState(0)
    const[counter2, setCounter2] = useState(0)

    const increment1 = () =>{
        setCounter1(counter1+1)
    }
    const increment2 = () =>{
        setCounter2(counter2+1)
    }
  const isEven =  useMemo(() => {
        let i =0
        while(i<20000000) i++
        return counter1 % 2 === 0 
    
    }, [counter1])
    return (
        <div>
            <div>
    <button type = "text" onClick={increment1}>count-{counter1}</button> 
    <span  >{isEven ? 'even' : 'odd'}</span>  
         </div>
         <div>
    <button type = "text" onClick={increment2}>count-{counter2}</button>   
         </div>
        </div>
    )
}

export default CounterMemo

