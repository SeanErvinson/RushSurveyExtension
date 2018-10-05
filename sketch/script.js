document.addEventListener('DOMContentLoaded', function () {

    // Div
    var minmaxDiv = document.getElementById("minmax");
    var valueDiv = document.getElementById("value");

    // Default state
    minmaxDiv.style.display = 'none';

    var toggle = document.getElementById("toggleRandom");

    toggle.addEventListener('click', function () {
        if (toggle.checked) {
            document.getElementById('ratingValue').value = null;
            valueDiv.style.display = "none";
            minmaxDiv.style.display = 'block';
        } else {
            document.getElementById('minValue').value = null;
            document.getElementById('maxValue').value = null;
            minmaxDiv.style.display = 'none';
            valueDiv.style.display = 'block';
        }
    });

    var link = document.getElementById('submit');

    link.addEventListener('click', function () {

        let minNumber = document.getElementById('minValue').value;
        let maxNumber = document.getElementById('maxValue').value;
        let ratingValue = document.getElementById('ratingValue').value;
        let randomToggle = document.getElementById('toggleRandom').checked;

        let params = {
            active: true,
            currentWindow: true
        }
        if(chrome){
            chrome.tabs.query(params, gotTabs);
        }else{
            browser.tabs.query(params, gotTabs);
        }

        function gotTabs(tabs) {
            let ratingMessage =
                {
                    isRandom: randomToggle,
                    rateValue: ratingValue,
                    minValue: minNumber,
                    maxValue: maxNumber
                }
            if(chrome){
                chrome.tabs.sendMessage(tabs[0].id, ratingMessage);
            }else{
                browser.tabs.sendMessage(tabs[0].id, ratingMessage);
            }
        }
    });
});

