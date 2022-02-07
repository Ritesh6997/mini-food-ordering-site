
document.querySelector("form").addEventListener("submit",onsubmit)

function onsubmit(event)
{
    event.preventDefault()
    name1=document.querySelector("#name").vlaue;
    mobile=document.querySelector("#number").value;
    add=document.querySelector("#address").value;
    console.log(1)
    if (name1==""||mobile==""||add=="")
    {
        alert("All fields are mandatory");
    }
    else{
        alert("Your order is accepted");
        setTimeout(() => {alert("Your order is being cooked")}, 3000);
        setTimeout(() => {alert("Your order is ready")}, 8000);
        setTimeout(() => {alert("Order out for delivery")}, 10000);
        setTimeout(() => {alert("Order delivered")}, 12000);
    }
}

