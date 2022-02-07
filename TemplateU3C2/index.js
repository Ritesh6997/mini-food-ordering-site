 let url="https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
 
 async function getthedata()
 {
     try {
    let res=await fecthdata(url);
    console.log(res.meals);
    displaydish(res.meals)
     }  
   catch (error) {
     console.log(error)
 }
    
 }
getthedata()

 function fecthdata(url)
 {
    
    return fetch(url)
    .then(function (res)
    {
        return res.json()
    })
    .then(function (res)
    {
        return res;
    })
 };

 function displaydish(data)
 {
    document.getElementById("menu").textContent="";
    data.map(function (ele,index)
    {
        let div=document.createElement("div");
        let name=document.createElement("h2");
        name.innerText=ele.strMeal;
        let image=document.createElement("img");
        image.setAttribute("src",value=ele.strMealThumb);
        let price=document.createElement("h2");
        let pr=`${Math.round(Math.random()*500)}`;
        price.innerText=`Rs:${pr}`;
        let btn=document.createElement("button");
        btn.innerText="Add to Cart";
        btn.setAttribute("id",value="addtocart");
        btn.addEventListener("click",function ()
        {
            addtocart(ele,pr);         
        })
        div.append(image,name,price,btn)
        document.getElementById("menu").append(div)
    })
 }

 
 let cartData=JSON.parse(localStorage.getItem("cart"))||[];

 function addtocart(ele,price)
            {
                ele["price"]=price;
                console.log(ele,price);
                cartData.push(ele);
                localStorage.setItem("cart",JSON.stringify(cartData));
                document.querySelector("#count").innerText=""
                document.querySelector("#count").append(`Cart Count:${cartData.length}`);
            }   
            document.querySelector("#count").innerText=`cart count: ${cartData.length}`;       