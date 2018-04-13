chrome.runtime.onMessage.addListener(executeMessage);
console.log("Content Ready");

function executeMessage(message, sender, sendResponse) {
    automateSurvey(message.rateValue, message.minValue, message.maxValue, message.isRandom);
}

function generateRandom(min = 1, max = 4) {
    return Math.floor(Math.random() * (max - min + 1) + min) + 1;
}

function automateSurvey(value = null, min = null, max = null, isRandom = false) {
    let questions = document.getElementsByClassName("questionrating");
    for (var i = 0; i < questions.length; i++) {
        if (isRandom)
            questions[i].value = generateRandom(min, max);
        else
            questions[i].value = value;
        var currentId = questions[i].id;
        currentId = currentId.slice(currentId.lastIndexOf("-") + 1, currentId.length);
        rating = document.getElementById(`spnRating-${currentId}-${questions[i].value}`);
        rating.parentElement.click();
    }
}