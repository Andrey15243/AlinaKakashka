function askQuestion() {
    let userInput = prompt("Алина какашка?");
  
    if (userInput === null) {
      alert("Подумай ещё");
      askQuestion();
      return;
    }
  
    userInput = userInput.trim().toLowerCase();
  
    if (userInput === "да" || userInput === "") {
      alert("Верно!");
    } else {
      alert("Подумай ещё");
      askQuestion();
    }
  }
  
  askQuestion();
  