function askQuestion() {
    let userInput = prompt("Алина какашка?");
    
    if (userInput === null) {
      alert("Подумай ещё");
      askQuestion();
      return;
    }

    if (userInput.trim() === "") {
      askQuestion();
      return;
    }
  
    userInput = userInput.trim().toLowerCase();
  
    if (userInput === "да") {
      alert("Верно!");
    } else {
      alert("Подумай ещё");
      askQuestion();
    }
  }
  
  askQuestion();
  
