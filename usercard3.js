let mahesholdinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZpRNiXIlAEtQCXDJ3ehxXhjdGiAWKM2IKt_OTlHALA&usqp=CAU&ec=48665701",
    name: "Mahesh Babu",
    description: "Actor"
}


let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => console.log(data))
    document.getElementById("mahesh-img").src = displayobject.imgurl;
    document.getElementById("maheshbabu").innerHTML = displayobject.name;
    document.getElementById("mahesh-desc").innerHTML = displayobject.description;
}
