const api =
  "https://opentdb.com/api.php?amount=25&category=9&difficulty=easy&type=multiple";

async function quiz() {
  try {
    let initProg = await fetch(api);
    let response = await initProg.json();
    let quizQuestion = document.querySelector(".question");
    let quizOptions = document.querySelectorAll(".options");
    let nextButton = document.querySelector(".next-btn");

    console.log(response);

    let score = 0;
    let i = 0;
    nextFunction();

    function mainProgram() {
      if (i < response.results.length) {
        quizQuestion.innerHTML = response.results[i].question;
        let answerArr = [
          response.results[i].correct_answer,
          ...response.results[i].incorrect_answers,
        ];
        let shuffledArray = shuffleArray(answerArr);

        function shuffleArray(array) {
          for (var j = array.length - 1; j > 0; j--) {
            // Generate random number
            var k = Math.floor(Math.random() * (j + 1));

            var temp = array[j];
            array[j] = array[k];
            array[k] = temp;
          }

          return array;
        }

        quizOptions.forEach((element, index) => {
          element.innerHTML = shuffledArray[index];
          element.style.backgroundColor = "";
          element.style.pointerEvents = "auto";
        });

        backgroundColor();

        document
          .querySelectorAll(".options")[0]
          .onclick= () => {
            if (
              document.querySelectorAll(".options")[0].innerHTML ==
              response.results[i].correct_answer
            ) {
              score++;
              console.log(score)
            } else {
              score = score + 0;
              console.log(score)
            }
          };
        document
          .querySelectorAll(".options")[1]
          .onclick= () => {
            if (
              document.querySelectorAll(".options")[1].innerHTML ==
              response.results[i].correct_answer
            ) {
              score++;
              console.log(score)
            } else {
              score = score + 0;
              console.log(score)
            }
          };
        document
          .querySelectorAll(".options")[2]
          .onclick= () => {
            if (
              document.querySelectorAll(".options")[2].innerHTML ==
              response.results[i].correct_answer
            ) {
              score++;
              console.log(score)
            } else {
              score = score + 0;
              console.log(score)
            }
          };
        document
          .querySelectorAll(".options")[3]
          .onclick= () => {
            if (
              document.querySelectorAll(".options")[3].innerHTML ==
              response.results[i].correct_answer
            ) {
              score++;
              console.log(score)
            } else {
              score = score + 0;
              console.log(score)
            }
          };
          document.querySelector(".correct").innerHTML=`SCORE:${score}`
      } else {
        alert(`QUIZ COMPLETED and YOUR SCORE IS ${score}`);
      }
    }

    function backgroundColor() {
      quizOptions.forEach((element, index) => {
        element.addEventListener("click", () => {
          if (element.innerHTML == response.results[i].correct_answer) {
            element.style.backgroundColor = "green";
          } else {
            element.style.backgroundColor = "red";
          }

          quizOptions.forEach((options) => {
            if (options.innerHTML == response.results[i].correct_answer) {
              options.style.backgroundColor = "green";
            }
            options.style.pointerEvents = "none";
          });
        });
      });
    }

    function nextFunction() {
      nextButton.addEventListener("click", () => {
        i++;

        mainProgram();
      });
    }

    mainProgram();
  } catch (error) {
    console.log("error bhayo ni solti", error);
  }
}
quiz();
