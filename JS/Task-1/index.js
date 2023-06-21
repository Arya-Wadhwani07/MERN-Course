const showDate = ()=>{
    const date =new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ]
    document.getElementById("Date").innerHTML=date.getDate()+"/"+monthNames[date.getMonth()]+"/"+date.getFullYear()
}

const showTime = ()=>{
    const date = new Date()
    document.getElementById("Time").innerHTML=date
}