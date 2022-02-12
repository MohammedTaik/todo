
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");
var conter = 0;

fetch("http://localhost:5000/Tasks").then(Response => Response.json()) 
       .then(data => {
          console.log(data);
              
       data.forEach((item) => {
              
              conter +=1;
              console.log(conter);
              container.innerHTML +=     
              `<div class="task">
              <span class="icon-star icon"> </span>
              <p lang="ar"  class="task-text">      ${item.details}     </p>
              <div>
                <span class="icon-trash icon"> </span>       
                <span class="icon-file_done icon"> </span>
              </div>
             </div>`;
             
       }
      
       );
       
});

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
         eo.target.parentElement.parentElement.remove();
  
  }
  
  else if (eo.target.className == "icon-file_done icon") {
    
         eo.target.classList.add("dn");
        const heart = `<span class="icon-file_done green">   </span>`;



         eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("finish");


         eo.target.parentElement.innerHTML += heart;



  } else if (eo.target.className == "icon-file_done green") {
    
        eo.target.parentElement.parentElement
       .getElementsByClassName("task-text")[0]
        .classList.remove("finish");

         eo.target.classList.add("dn")

         const addAngry = `<span class="icon-file_done icon"> </span>`

        eo.target.parentElement.innerHTML += addAngry

  } else if (eo.target.className == "icon-star icon" ) {

         eo.target.classList.add("orange")


        container.prepend(eo.target.parentElement)


  } else if (eo.target.className == "icon-star icon orange") {

         eo.target.classList.remove("orange")

  }

});


form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  if(input.value.length === 0){
   input.setCustomValidity("please enter a task");
   input.reportValidity();
  }else {


  const task = `   
  
  <div class="task">
  <span class="icon-star icon"> </span>
  <p lang="ar"  class="task-text">      ${input.value}     </p>

  <div>
    <span class="icon-trash icon"> </span>

    <span class="icon-file_done icon"> </span>
  </div>

 </div>`;

  container.innerHTML += task;

  input.value = ""
}

}


);
