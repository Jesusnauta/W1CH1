const questions = [
    {
        letter: "a",
        answer: "abducir",
        status: 0,
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      },
      {
        letter: "b",
        answer: "bingo",
        status: 0,
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      },
      {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: "CON LA C. Niño, crío, bebé",
      },
      {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question:
          "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      },
      {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      },
      {
        letter: "f",
        answer: "facil",
        status: 0,
        question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      },
      {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      },
      {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
      },
      {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Templo cristiano",
      },
      {
        letter: "j",
        answer: "jabali",
        status: 0,
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      },
      {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      },
      {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: "CON LA L. Hombre lobo",
      },
      {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      },
      {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: "CON LA N. Demostración de poca inteligencia",
      },
      {
        letter: "ñ",
        answer: "señal",
        status: 0,
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      },
      {
        letter: "o",
        answer: "orco",
        status: 0,
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      },
      {
        letter: "p",
        answer: "protoss",
        status: 0,
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      },
      {
        letter: "q",
        answer: "queso",
        status: 0,
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      },
      { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
      {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
      },
      {
        letter: "t",
        answer: "terminator",
        status: 0,
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      },
      {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      },
      {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      },
      {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      },
      {
        letter: "x",
        answer: "botox",
        status: 0,
        question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      },
      {
        letter: "y",
        answer: "peyote",
        status: 0,
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      },
      {
        letter: "z",
        answer: "zen",
        status: 0,
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      },
  ];
  
  let ranking = [
    {id: 1, rankedName: 'Cristiano Ronaldo', points: 17},
    {id: 2, rankedName: 'Lionel Messi', points: 13},
    {id: 3, rankedName: 'Kilyan Mbappe', points: 9}
  ]
  
  let points = 0
  let counter = 0
  let index = 0
  let firstRound = true
  const rankedCopy = structuredClone(ranking)
  let rank = new Array
  const originalTimer = parseInt(document.getElementsByClassName("stopwatch")[0].innerHTML, 10)
  let timeLeft = parseInt(document.getElementsByClassName("stopwatch")[0].innerHTML, 10)
  document.getElementsByClassName("points")[0].innerHTML = points
  
  
  const checkPassed = (element) => element["status"] === 0
  const comparePoints = (element) => element.points < points
  const checkWrong = (element) => element.status === 2
  
  
  let chooseSetOfQuestions = Math.floor(Math.random()*3)
  let questionsToAnswer = new Array
  const questionsAsked = new Array
  
  const rankingShow = () => {
    
    if (ranking.findIndex(comparePoints) !== -1){
      ranking.splice(ranking.findIndex(comparePoints),0, {id: ranking.findIndex(comparePoints), rankedName: "Tu", points: points})
        ranking.forEach((_, index) => {
          ranking[index].id = index + 1
        })
      }
    else{
      const idOrder = ranking.length + 1
      ranking.push({id: idOrder, rankedName: "Tu", points: points})
    }
    ranking.forEach((_,index) => {
      rank.push(`${ranking[index].id}º ${ranking[index].rankedName} - ${ranking[index].points} puntos.`)
      
    })
    
    document.getElementsByClassName("gameOver")[0].innerHTML = `Has obtenido ${points} aciertos y ${27-points} fallos. Este es el ranking:`
    for (let i = 0; i<rank.length; i++) {
      addRank(rank[i])
    }
    document.getElementsByClassName("ranking")[0].hidden = false
  
  }
  
  const addRank =(rank) => {
    const nextRank = document.createElement("li")
    nextRank.textContent = rank
    nextRank.className = "rank"
  
    const putRank = document.querySelector(".ranking")
    putRank.appendChild(nextRank)
  
  }
  
  const hideBeggining = () =>{
  document.getElementsByClassName("instructions")[0].hidden = true
  document.getElementsByClassName("EMPEZAR")[0].hidden = true
  
  
  }
  
  const showGame = () =>{
  document.getElementsByClassName("circle-container")[0].hidden = false
  document.getElementsByClassName("control-container")[0].hidden = false
  document.getElementsByClassName("text-container")[0].hidden = false
  document.getElementsByClassName("stopwatch")[0].hidden = false
  document.getElementsByClassName("points")[0].hidden = false
  
  document.getElementsByClassName("pasapalabra")[0].hidden = false
  document.getElementsByClassName("enviar")[0].hidden = false
  document.getElementsByClassName("user-Answer")[0].hidden = false
  document.getElementsByClassName("question")[0].hidden = false
  document.getElementsByClassName("playAgain")[0].hidden = true
  
  
  }
  
  const hideGame = () =>{
  
  document.getElementsByClassName("pasapalabra")[0].hidden = true
  document.getElementsByClassName("enviar")[0].hidden = true
  document.getElementsByClassName("user-Answer")[0].hidden = true
  document.getElementsByClassName("question")[0].hidden = true
  document.getElementsByClassName("playAgain")[0].hidden = false
  
  
  }
  
  const hideEnding = () =>{
  document.getElementsByClassName("playAgain")[0].hidden = true
  document.getElementsByClassName("gameOver")[0].hidden = true
  
  }
  
  const pickQuestionsArray = () => {
    let randomNumber = Math.floor(Math.random()*1)
    switch (randomNumber) {
        case 0:
          questionsToAnswer = questions
          break;

        }
  
  }
  
  const showQuestion = (index, questionsToAnswer) => {
  if (index === 0){
    const changeColor = document.getElementsByClassName("letter")[index]
    changeColor.classList.toggle("blink")
  }
  
  document.getElementsByClassName("question")[0].innerHTML= questionsToAnswer[index].question
  
  }
  
  const checkAnswer = (ind, questionToAnswer, answer) =>{
        document.getElementsByClassName("user-Answer")[0].value = ""
        const changeColor = document.getElementsByClassName("letter")[index]
        changeColor.classList.toggle("blink")
  
        if (answer.toLowerCase() === questionToAnswer[ind].answer.toLowerCase()){
            firstRound === true ? changeColor.classList.replace("neutral", "right") : changeColor.classList.replace("passed", "right")
            points++
            questionToAnswer[ind].status = 1
            
        }
  
        else if (answer.toLowerCase() === 'pasapalabra'){
            changeColor.classList.replace("neutral", "passed")
        }
        else{
          firstRound === true ? changeColor.classList.replace("neutral", "wrong") : changeColor.classList.replace("passed", "wrong")
          questionToAnswer[ind].status = 2
            
      }
        
        if (index < 26){
          const changeBlinker = document.getElementsByClassName("letter")[index+1]
          changeBlinker.classList.toggle("blink")
      }
        if (firstRound === true){
            index ++
            document.getElementsByClassName("points")[0].innerHTML = points
            return nextQuestion ()
      }
        else{
  
            index ++
            document.getElementsByClassName("points")[0].innerHTML = points
            return secondChance()
      }
  

  }
  
  const nextQuestion = () => {
  
    if (index <27){
        
        pickQuestionsArray()
        questionsAsked.push(questionsToAnswer[index])
        return showQuestion(index, questionsToAnswer)
    }
    else if (!questionsAsked.some(checkPassed)){
      index = 26
      gameOver()
    }
    else{
      
  
          index = 0
          firstRound = false
          return secondChance()
        }
    
  }
  
  const secondChance = () => {
    if (questionsAsked.some(checkPassed)){
        if (index <27 && questionsAsked[index].status === 0){
            
            return showQuestion(index, questionsAsked)
        }
  
        else if (index === 27){
            index = 0
            return secondChance()
        }
        else {
            index ++
            counter ++
            return secondChance()
        }
    }
    else{
        gameOver ()
    }
  
  }
  
  const gameOver =() =>{
  
    hideGame()
    rankingShow()
    document.getElementsByClassName("gameOver")[0].hidden = false
  
  
    clearInterval(timeOut) 
    
  }
  
  const tryAgain = () => {
    rank.splice(0,rank.length)
    ranking.splice(0,ranking.length)
    ranking = structuredClone (rankedCopy)
    document.getElementsByClassName("ranking")[0].innerHTML = ""
    document.getElementsByClassName("ranking")[0].hidden = true
    document.getElementsByClassName("user-Answer")[0].disabled = false
    const letters = document.getElementsByClassName("letter")
    for (let i = 0; i < letters.length; i++){
    let letter = document.getElementsByClassName("letter")[i]
    letter.classList.replace("right", "neutral")
    letter.classList.replace("passed", "neutral")
    letter.classList.replace("wrong", "neutral")
    letter.classList.remove("blink")
    }
    index = 0
    firstRound = true
    hideEnding()
    showGame()
    nextQuestion()
    countDown()
    
    index = 0
    firstRound = true
    points = 0
    document.getElementsByClassName("points")[0].innerHTML = points
  
    timeLeft = originalTimer
    document.getElementsByClassName("stopwatch")[0].innerHTML = timeLeft
  
  }
  
  
  const start = document.querySelector(".EMPEZAR")
  start.addEventListener("click", (event) =>{
    event.preventDefault
    hideBeggining()
    showGame()
    nextQuestion()
    countDown()
  })
  
  
  const send = document.querySelector(".enviar")
  send.addEventListener("click", (event) =>{
    event.preventDefault
    const answer = document.getElementsByClassName("user-Answer")[0].value
  
    if (firstRound === true){
        return checkAnswer(index, questionsToAnswer, answer)
    }
  
    else{
        return checkAnswer(index, questionsAsked, answer)
    }
  
  })
  
  const input = document.querySelector(".user-Answer")
  input.addEventListener("keydown", (event) =>{
    if (event.keyCode == 13){
    const answer = document.getElementsByClassName("user-Answer")[0].value
        if (firstRound === true){
            return checkAnswer(index, questionsToAnswer, answer)
        }
  
        else{
            return checkAnswer(index, questionsAsked, answer)
        }
    }
  })
  
  
  const pasapalabra = document.querySelector(".pasapalabra")
  pasapalabra.addEventListener("click", (event) => {
    event.preventDefault
    const changeColor = document.getElementsByClassName("letter")[index]
    const changeBlinker = document.getElementsByClassName("letter")[index+1]
        changeColor.classList.toggle("blink")
        changeBlinker.classList.toggle("blink")
    changeColor.classList.replace("neutral", "passed")
  
    index++
    if (firstRound === true){
        return nextQuestion ()
    }
    else {
        return secondChance()
    }
  })
  
  const repeatPlay = document.querySelector(".playAgain")
  repeatPlay.addEventListener("click", (event) =>{
    event.preventDefault
    clearInterval(timeOut)
    tryAgain()
  })
  
  const countDown = () => {
  
    if(timeLeft>0){
        timeLeft --
        document.getElementsByClassName("stopwatch")[0].innerHTML = timeLeft
        timeLeft = parseInt(timeLeft, 10)
        timeOut = setTimeout(countDown, 1000)
    
        }
      else{
        document.getElementsByClassName("stopwatch")[0].innerHTML = 0
        return gameOver()
        
        
    }
      
  }