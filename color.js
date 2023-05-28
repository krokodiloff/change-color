 function changeColors() {
      let colors = ["red", "blue", "green"];
      let cells = document.getElementsByClassName("cell");
      let index = 0; 
      let clicks = 0; 
      let itog = document.getElementById("itog");
      function changeColor() {
        clicks++;
        this.style.backgroundColor = colors[index]; 
        index = (index + 1) % colors.length; 
        checkTable(); 
        document.getElementById("clicks").innerHTML = clicks; 
       }
       
       for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", changeColor); 
       }
       
       function checkTable() {
        let firstColor = cells[0].style.backgroundColor; 
        for (let i = 1; i < cells.length; i++) {
         if (cells[i].style.backgroundColor != firstColor) {
          return; 
         }
        }
        itog.textContent = "Вы победили за  столько кликов:"+ " " + clicks ; 
       }
       
       function reset() {
        for (let i = 0; i < cells.length; i++) {
         cells[i].style.backgroundColor = ""; 
        }
        index = 0; 
        clicks = 0;
        document.getElementById("clicks").innerHTML = clicks; 
       }
    }