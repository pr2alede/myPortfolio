let itemOne = document.getElementById("dropdown-content");
let itemTwo = document.getElementById("menuLogo");
let current = 0;



function showItem() {
    if (current ===0){
        itemOne.style.display = "block";
        current = 1;
    }
    else{
        itemOne.style.display = "none";
        current = 0;
    }
    

 
  }




  function checkMediaQuery() {
    // If the inner width of the window is greater then 768px
    if (window.innerWidth > 650) {
      // Then log this message to the console
      itemOne.style.display = "none";
      let current = 0;
    }
  }

  function showDetails(project,button){
    if (project.style.display === "none") {
        project.style.display = "block";
        button.innerHTML = "Read Less"; 
      } else {
        button.innerHTML = "Read more"; 
        project.style.display = "none";
      }
    

  }
  
  
  // Add a listener for when the window resizes
  
  window.addEventListener('resize', checkMediaQuery);
  itemTwo.addEventListener('mousedown',showItem)
