const  boxes = document.querySelectorAll(".wrapper div")
const colors = ['red','yellow','green', 'black','violet','purple']
const names = ['Shirin','Askar','Sultan','Beknazar','Kadyr','Rolan']
const  wrapper = document.querySelector(".wrapper")
console.log(wrapper)


//     wrapper.addEventListener("click",(event)=>{
//         if ( event.target.classList[0] !== "wrapper") {
//
//             const randomColors = Math.floor(Math.random() * colors.length)
//             const randomNames = Math.floor(Math.random() * names.length)
//             console.log(event.target)
//             boxes.forEach(el => {
//                 // el.style.background = "none"
//                 el.removeAttribute("class")
//                 el.innerText = ""
//             })
//
//             event.target.classList.add(colors[randomColors])
//             event.target.innerText = names [randomNames]
//
//         }
// })




//forEach
boxes.forEach((box,ind)=>{
    box.addEventListener("click",()=>{
        boxes.forEach(item=>{
            item.style.background = "none"
            item.innerText = ""
        })
        const randomColors = Math.floor(Math.random() * colors.length)
        const randomNames = Math.floor(Math.random() * names.length)


        if ( ind === boxes.length-1){
            ind = -1
        }
           boxes[ind +1].style.background = colors[randomColors]
           boxes[ind +1].innerText = names[randomNames]
    })
})