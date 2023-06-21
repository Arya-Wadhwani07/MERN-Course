function check_parameters(){
    var name=document.getElementById("n1")
    var email=document.getElementById("e1")
    var password=document.getElementById("p1")
    var phone_num=document.getElementById("ph1")
    var zip=document.getElementById("z1")
    var about=document.getElementById("about")

    if(name == ''){
        document.getElementById("p1").innerHTML="name is absent";
        document.getElementById("p1").style.color=white;
    }
        //Name is absent
    if(email == ''){
        document.getElementById("p2").innerHTML="email is absent";
        document.getElementById("p2").style.color=white;
    }
        //Email is absent
    if(password == ''){
        document.getElementById("p3").innerHTML="password is absent";
        document.getElementById("p3").style.color=white;
    }
        //Password is absent
    if(phone_num == ''){
        document.getElementById("p4").innerHTML="phone number is absent";
        document.getElementById("p4").style.color=white;
    }
        //Phone is absent
    if(zip == ''){
        document.getElementById("p5").innerHTML="Zip code is absent";
        document.getElementById("p5").style.color=white;
    }
        //Zip is absent
    if(about == ''){
        document.getElementById("p6").innerHTML="Please mention some things ";
        document.getElementById("p6").style.color=white;
    }
        
}