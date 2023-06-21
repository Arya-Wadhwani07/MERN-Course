var id
const move = ()=>{
    var count=10;
    id = setInterval(()=>{
        count+=10
        const value = document.getElementById("img").style.marginLeft=count.toString()+"px"
        console.log(value)
    },500)
}

const stop = ()=>{
    clearInterval(id)
}