import { saveTask } from "./firebase";


window.addEventListener('DOMContentLoaded', () => {

})

const taskFrom = document.getElementById('task-form')

taskFrom.addEventListener ('submit',(e) =>{
    e.preventDefault()
    const title = taskFrom ['task-title']
    const description = taskFrom ['task-description']

    saveTask(title.value, description.value )
    taskFrom.reset()
})