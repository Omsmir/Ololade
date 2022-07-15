let li = document.querySelector("ul").querySelectorAll("li a")


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
