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
       
        if(document.body.classList.contains("night")){
            document.body.classList.remove("night")
            document.body.classList.add("light")

        }else {
            document.body.classList.remove("light")
            document.body.classList.add("night")
        }
        h1.forEach((ele)=>{
            if(ele.classList.contains("night-2")){
                ele.classList.remove("night-2")

            }else {
                ele.classList.remove("light")
                ele.classList.add("night-2")

            }
        })

        p.forEach((ele)=>{
            if(ele.classList.contains("night-2")){
                ele.classList.remove("night-2")

            }else {
                ele.classList.remove("light")
                ele.classList.add("night-2")

            }
        })
        
    }else {

    }
})