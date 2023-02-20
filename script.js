const btnAdd = document.querySelector('.btn-add')
const btnRemove = document.querySelector('.btn-remove')
const btnModal = document.querySelector('.btn-modal')
const input = document.querySelector('.text-input')
const ul = document.querySelector('ul')
const body = document.querySelector('body')
const modal = document.querySelector('#modal')


input.addEventListener('keydown', (e) =>{
    switch (e.key){
        case "Enter": bau()
            break;
        case 'Shift': alert('enter bas')
            break;
    }
})
function bau (){
    if (input.value !== ""){
        let task = JSON.parse(localStorage.getItem('task')) || []
        const newTask = {
            id: Date.now(),
            title: input.value,
        }
        task = [...task, newTask]
        localStorage.setItem('task', JSON.stringify(task))
        input.value = ""
        view()
    }
}
btnAdd.addEventListener('click', () =>{
    bau()
})
btnRemove.addEventListener('click', () =>{
    localStorage.removeItem('task')
    input.value = ""
    ul.innerHTML = ""
})
function view(){
  let task = JSON.parse(localStorage.getItem('task', )) || []
    let newTask = ""
    task.map(el =>{
        newTask += `<li class="list-group-item">
${el.title}
</li>`
    })
    ul.innerHTML = newTask
}
view()




















// btnAdd.addEventListener('click', () =>{
//     plaza()
// })
// btnRemove.addEventListener('click', () =>{
//     localStorage.removeItem('task')
//     ul.innerHTML = ""
//     body.style.background = ""
// })
//
// function plaza (){
//     if (input.value !== ""){
//         let task = JSON.parse(localStorage.getItem('task')) || []
//         const newTask = {
//             id: Date.now(),
//             title: input.value,
//             isDone: false
//         }
//         task = [...task, newTask]
//         localStorage.setItem('task', JSON.stringify(task))
//         input.value = ""
//         body.style.background = `${random()}`
//         view()
//     }
// }
// view()
// ul.addEventListener("click", (event) =>{
//     if (event.target.classList.contains("btn-del")){
//         event.target.parentNode.remove()
//         body.style.background = ""
//     }
// })
// input.addEventListener('keydown', (e) =>{
//     switch (e.key){
//         case "Enter" : plaza()
//             break;
//         case "Shift": alert("enter bas")
//     }
// })
//
// function view (){
//     const task = JSON.parse(localStorage.getItem('task')) || []
//     let allList = ""
//     task.map((el) =>{
//         allList += `<li class="list-group-item d-flex justify-content-between">
// ${el.title}
// <button class="btn-del btn btn-danger">delete</button>
// </li>`
//     })
//     ul.innerHTML = allList
// }
//
// function random () {
//     let color = "#"
//     for (let i = 0; i < 6; i++){
//        color += Math.floor(Math.random() *10)
//     }
//     return color
// }

// btnModal.addEventListener('click', () =>{
//     if (!btnModal.classList.contains('active')){
//         btnModal.classList.add('active')
//         modal.style.transform = 'scale(1)'
//         btnModal.innerHTML = "close"
//     }else {
//         btnModal.classList.remove('active')
//         modal.style.transform = 'scale(0)'
//         btnModal.innerHTML = 'open'
//     }
// })

