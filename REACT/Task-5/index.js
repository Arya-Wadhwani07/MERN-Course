const calculateAge = ()=>{
    const data = document.getElementById("dob")
    console.log(data.value)
    const date = new Date(data.value)
    var years = new Date(new Date() - date).getFullYear() - 1970;
    document.getElementById("ans").innerHTML = "You are "+years+" years old"
}