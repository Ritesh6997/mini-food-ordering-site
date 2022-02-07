let cartData=JSON.parse(localStorage.getItem("cart"))||[]

console.log(cartData);
document.querySelector("#count").innerText=`Cart count:${cartData.length}`;
displaycart()
function displaycart()
{
    document.querySelector("#cart").innerText=""
    cartData.map(function (ele,index)
    {
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=ele.strMealThumb;
        let name=document.createElement("h2");
        name.innerText=ele.strMeal;
        let price1=document.createElement("h2");
        price1.innerText=`Rs: ${ele.price}`;
        let price=document.createElement("h2");
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("id",value="remove")
        btn.addEventListener("click",function(){
            removeitem(index);
        })
        div.append(image,name,price1,btn);
        document.querySelector("#cart").append(div)
    })
}

function removeitem(index)
{
    cartData.splice(index,1);
    console.log(cartData);
    localStorage.setItem("cart",JSON.stringify(cartData))
    document.querySelector("#count").innerText=`Cart count:${cartData.length}`;
    displaycart();
}

var total= cartData.reduce(function (ac,ele){
     return ac+ +(ele.price);
},0)
document.querySelector("#total").innerText=`Total Amount: Rs ${total}`;