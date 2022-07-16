let li = document.querySelector("ul").querySelectorAll("li a")

let dark = document.querySelector(".items .dark")

let h1 = document.querySelectorAll("h1")

let p = document.querySelectorAll("p")

let btn = document.querySelectorAll(".button")

    li.forEach((ele) =>{
        ele.addEventListener("click",()=>{
            if(ele.classList.contains("active")){
                return true

            }else {
                li.forEach((el) => {
                    el.classList.remove("active")
                    ele.classList.add("active")
                })
            }
        })

    })

dark.addEventListener("click",()=>{
    if(dark.classList.contains("dark")){
        li.forEach((ele)=>{
            if(ele.classList.contains("active")){
                return true
            }else{
                ele.classList.add("night")
            }       
        })
        document.body.classList.add("light")
        h1.forEach((ele)=>{
            if(ele.classList.contains("night")){
                ele.classList.remove("night")

            }else {
                ele.classList.remove("light")
                ele.classList.add("night")

            }
        })

        p.forEach((ele)=>{
            ele.classList.add("light")
        })
        
    }else {

    }
})