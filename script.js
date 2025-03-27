const input_item=document.getElementById("item-input")
const add_btn=document.getElementsByClassName("btn");
const filter =document.getElementById("filter");
const remove_btn=document.getElementsByClassName("remove-item")
const items=document.getElementsByClassName("items")
const item=document.getElementsByTagName("li")

let obj={}

//function to create the functionality of adding item
add_btn[0].addEventListener("click",(e)=>{

    e.preventDefault()
    const item_name=input_item.value.trim()
    if(item_name==""){
        return 
    }
const id= Date.now()
obj[id]=item_name
remain_obj()
input_item.value=""
localStorage.setItem("obj",JSON.stringify(obj))

})

function remove(id) {
    delete obj[id]
    remain_obj()
    localStorage.setItem("obj",JSON.stringify(obj))

}

const remain_obj=()=>{
    items[0].innerHTML=""
for(let key in obj){
    console.log(obj[key])
    const li =document.createElement("li")
    li.innerHTML=obj[key]+`<button onClick="remove(${key})" class='remove-item btn-link text-red'>  
            <i class="fa-solid fa-xmark"></i>
</button>`
    items[0].appendChild(li)
}


}

// filter the item 

function filter_item(input){

let filter =Object.entries(obj).filter(([_,value])=>{
    return value.toLowerCase().includes(input.toLowerCase())
})

console.log(filter)

items[0].innerHTML=""
filter.forEach(([key,value])=>{
    const li =document.createElement("li")
    li.innerHTML=value+`<button onClick="remove(${key})" class='remove-item btn-link text-red'>  
            <i class="fa-solid fa-xmark"></i>
</button>`
    items[0].appendChild(li)
}
)
}
filter.addEventListener("input", (e) => {
    filter_item(e.target.value);
});


function clearAll(){
obj={}
remain_obj()
localStorage.setItem("obj",JSON.stringify(obj))

}

document.addEventListener("DOMContentLoaded",()=>{
   obj=  JSON.parse(localStorage.getItem("obj"))
  remain_obj()
 
})
