import React,{useState} from 'react'

function Task1(){
    const [WordCount,setWordCount] = useState(0);
    const handleChange=(event)=>{
        const value=event.target.value
        setWordCount(value.trim().split(' ').length)
    }
    return(
        <div>
            <textarea onChange={handleChange}></textarea>
            <p>WordCount:{WordCount}</p>
        </div>
    )
}
export default Task1;