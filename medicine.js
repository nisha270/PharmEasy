
let url="https://63705c480399d1995d7c3302.mockapi.io/product";
let data=[];
async function getData(){
    try{
        let res=await fetch (url);
        let out=await res.json();
        console.log(out);
        data=out;
        displayCard(out)
    }
    catch(err){
        console.log(err);
    }
}
getData();

document.querySelector("select").addEventListener("change",function(){
    let selected=document.querySelector("select").value;
    if(selected=="LTH"){
        data.sort((a,b)=>a.price-b.price);
        console.log(data)
        // displayCard(data)
    }
    if(selected=="HTL"){
        data.sort((a,b)=>b.price-a.price);
        console.log(data)
        // displayCard(data)
    }

    displayCard(data)
  })

  let card1=[];
function displayCard(data){
    document.querySelector("#container").innerHTML="";
data.forEach((elem)=>{
   
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.setAttribute("src",elem.image);

    let name=document.createElement("p");
    name.innerText=elem.name;

    des=document.createElement("p");
    des.innerText=elem.description
    let price=document.createElement("h4");
    price.innerText=elem.price+" Rs/-";

    let btn=document.createElement("button");
    btn.innerText="Add to Card"
    btn.addEventListener("click",function(){
        
        localStorage.setItem("card-Items",JSON.stringify(div))





    })

    div.append(img,name,des,price,btn)
    document.querySelector("#container").append(div);
})
    
}