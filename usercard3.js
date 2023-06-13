let mahesholdinfo = {
    imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZpRNiXIlAEtQCXDJ3ehxXhjdGiAWKM2IKt_OTlHALA&usqp=CAU&ec=48665701",
    name: "Mahesh Babu",
    description: "Actor"
}
let maheshyounginfo = {
    imgurl: "https://www.bollywoodshaadis.com/img/article-20221131722330981189000.jpg",
    name: "Ghattamaneni Mahesh Babu",
    description: "Hero"
}
let ismaheshold = true;
let displayobject;
let flipdata = function(){
    if (ismaheshold == true){
        displayobject = maheshyounginfo;
        ismaheshold = false;
    }else{
        displayobject = mahesholdinfo;
        ismaheshold = true;
    }
    document.getElementById("mahesh-img").src = displayobject.imgurl;
    document.getElementById("maheshbabu").innerHTML = displayobject.name;
    document.getElementById("mahesh-desc").innerHTML = displayobject.description;
}
