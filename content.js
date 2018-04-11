chrome.runtime.onMessage.addListener(executeMessage);

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
        rating = document.getElementById(`spnRating-${currentId.slice(currentId.length - 3, currentId.length)}-${questions[i].value}`);
        rating.parentElement.click();
    }
}