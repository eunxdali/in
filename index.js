const questions = [

    {
        question: "Для чего используется оператор NEW?",
        optionA: "Для создания экземпляра класса",
        optionB: "Для объявления нового класса",
        optionC: "Это антагонист оператора OLD",
        optionD: "Для объявления нового указателя",
        correctOption: "optionA"
    },


    {
        question: "Как объявить класс в коде на Java?",
        optionA: " new class MyClass {}",
        optionB: "class MyClass {}",
        optionC: "select * from class MyClass {}",
        optionD: "MyClass extends class {}",
        correctOption: "optionB"
    },

    {
        question: "Укажите правильный вариант объявления указателя в С ++",
        optionA: "int & x",
        optionB: "int x",
        optionC: "ptr x",
        optionD: "int * x",
        correctOption: "optionD"
    },

    {
        question: "Укажите, в котором выражении языке С + неправильно применяются операции с действительными типов?",
        optionA: "float a = 2, b = 0x24, c; c = a + b% a",
        optionB: "double mychar = 2; float s = 3; mychar / = s;",
        optionC: "float x = 0, y = 2; uf (в> = x) f...y",
        optionD: "long double c = 2",
        correctOption: "optionA"
    },

    {
        question: "В программе на языке С ++ есть два объявления переменных int qwerty; int QWERTY; Какое из утверждений верно?",
        optionA: "Переменные описываются не по такому принципу",
        optionB: "Такие объявления недопустимы, потому что мы пытаемся создать две переменные с одинаковыми идентификаторами",
        optionC: "Объявления правильные",
        optionD: "Такие имена переменных недопустимы",
        correctOption: "optionC"
    },

    {
        question: "Как средствами языка С ++ выполняется потоковое чтение из двоичного (бинарного) файла? Название потока a_file.",
        optionA: "a_file.read ((char *) & Z, sizeof z)",
        optionB: "a_file >> z",
        optionC: "a_file.in (z)",
        optionD: "z = a_file.read",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "В каком из вариантов объявлен двумерный массив в С ++?",
        optionA: "char array 20",
        optionB: "array anarray [20] [20]",
        optionC: "int array [20, 20]",
        optionD: "int anarray [20] [20]",
        correctOption: "optionD"
    },

    {
        question: "В одном из следующих строк, записанных на языке С +, выполняется обращение к седьмого элемента массива, размер массива равен 10?",
        optionA: "mas [6]",
        optionB: "mas (7)",
        optionC: "mas (8)",
        optionD: "mas [2]",
        correctOption: "optionA"
    },

    {
        question: "Для чего в Python используется встроенная функция enumerate() ?",
        optionA: "Чтобы организовать цикл",
        optionB: "Для сортировки элементов по значениям id",
        optionC: "Для определения количества элементов последовательности.",
        optionD: "Для одновременного итерирования по самим элементам и их индексам",
        correctOption: "optionD"
    },

    {
        question: "Зачем в С ++ используют оператор return??",
        optionA: "Чтобы задержать работу программы",
        optionB: "Функция, в которой он содержится, завершает свое выполнение и управление возвращается в то место программы, из которого вызывалась данная функция",
        optionC: "Чтобы организовать цикл",
        optionD: "Чтобы ввести в программу новые значения",
        correctOption: "optionB"
    },

    {
        question: "Необходимо собрать и вывести все уникальные слова из строки рекламного текста. Какой из перечисленных типов данных Python подходит лучше всего ? ",
        optionA: "словарь (dict)",
        optionB: "множество (set)",
        optionC: "список (list)",
        optionD: "кортеж (tuple)",
        correctOption: "optionB"
    },

    {
        question: "Как вывести список методов и атрибутов объекта ×  на Python?",
        optionA: "help(x)",
        optionB: "info(x)",
        optionC: "dir(x)",
        optionD: "? x",
        correctOption: "optionC"
    },

    {
        question: "Укажите оператор выбора в языке С ++",
        optionA: "choice",
        optionB: "case",
        optionC: "switch … case",
        optionD: "default",
        correctOption: "optionC"
    }

]



let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Новичок."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Средний уровень."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Отлично."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}