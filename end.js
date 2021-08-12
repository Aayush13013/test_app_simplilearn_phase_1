const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//keyup provides which button is pressed on keyboard
username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save buttons");
    e.preventDefault(); // to show the data on console

    const score = {
        score : mostRecentScore,
        // score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score) // it is saying that if b.score is higher than a.score then put b before a in array

    highScores.splice(5); // it says that after 5th element start cutting off the elements

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");// when press save go back to home i.e. index page


};