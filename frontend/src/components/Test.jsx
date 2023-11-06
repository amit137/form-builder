import React, { useEffect, useState } from 'react'



    const sentence="what is the capital is"
    const s=sentence
   

const Test = () => {
    let words=sentence.split(" ")

   const [array,setArray]=useState(words)
   const [options,setOptions]=useState([{}])
   


   console.log(options)
  
   const removeWord=(index)=>{
    setOptions((prev)=>[...prev, {index, option:array[index]}])
    setArray([...array.slice(0, index), "____",...array.slice(index + 1)])
    
   }


  return (
    <div>
        <h1>{s}</h1>
        {array.map((word,index)=>{
           return(
            <p onClick={()=>removeWord(index)}>{word}</p>
           )
        })}

        <h2>Options</h2>
        {options.map((option,index)=>(
            <p key={index}>{option.index}: {option.option} </p>
            ))}
    </div>
  )
}

export default Test