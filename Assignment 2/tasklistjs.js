document.addEventListener('DOMContentLoaded', function(){

  document.querySelector("#new-task").onsubmit= function(){

    const li=document.createElement('li');

    let task_text= document.querySelector("#task").value;
    let new_task_html = `
                            <span> ${task_text} </span>
                            <button class= "complete"> Task is Complete </button>
                            <button class="remove"> Remove task </button>
                        `
    li.innerHTML= new_task_html;

      li.style.color= document.querySelector("#priority-change").value;
    var arr= [];
    arr.push(li);
    document.querySelector("#task_list").append(li);
    document.querySelector("#task").value= '';
    return false;
  }

  document.addEventListener('click', function(){
    element= event.target;
    if(element.className=== 'remove'){
      element.parentElement.remove();
      arr.remove(element.parentElement);
    }

  })

  document.addEventListener('click', function(){
    element=event.target;
    if(element.className==='complete'){
      element.parentElement.style.textDecoration= "black line-through";
      element.remove();
    }
  })
})
