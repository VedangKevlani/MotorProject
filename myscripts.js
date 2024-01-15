let keywords = [
   'practice for the learner test',
   'practice for the driver test',
   'learn how to drive',
   'take the learner test',
   'take the driver test',
   'apply for learner permit',
   'apply for driver licence',
   'apply for driver licence renewal',
   'apply for driver test resit',
   'find certified driving instructors',
   'find nearest examination centres',
   'learn road safety regulations',
   'buy the driver guide book',
   'buy the automotive guide book',
   'learn road statistics',
   'view road statistics',
   'display road statistics',
];

document.addEventListener('DOMContentLoaded', function() {
    const resultsBox = document.querySelector(".resultsbox");
    const inputBox = document.getElementById("input-box");
    const searchForm = document.getElementById(".search-bar")

    resultsBox.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            selectInput(event.target.textContent);
        }
    });

    inputBox.addEventListener('input', function() {
        let input = inputBox.value;
        let result = [];
        if(input.length) {
            result = keywords.filter(keyword => keyword.toLowerCase().includes(input.toLowerCase()));
            if(!result.length) {
                result = ['Nothing typed or no matching suggestions.'];
            }
        }
        else {
            result = ['Popular search suggestions will appear here.'];
        }
        display(result);
    });

    searchForm.addEventListener('submit', function (event) {
        // Prevent the form from submitting and refreshing the page
        event.preventDefault();
    });

    function display(result) {
        const content = result.map((list) => {
                return "<li onclick='selectInput(\'" + list + "\")'>" + list + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }

    function selectInput(selectedText) {
        inputBox.value = selectedText;

        const lowerCaseInput = inputBox.value.toLowerCase();
        if(lowerCaseInput.includes("take") || lowerCaseInput.includes("practice") && lowerCaseInput.includes("learner")) {
            window.location.href = 'learnertest.html?query=' + encodeURIComponent(selectedText.toLowerCase().replace(/\s/g, '-'));
        }
        else if (lowerCaseInput.includes("take") || lowerCaseInput.includes("practice") && lowerCaseInput.includes("driver")){
            window.location.href = 'drivertest.html?query=' + encodeURIComponent(selectedText.toLowerCase().replace(/\s/g, '-'));
        }
        resultsBox.innerHTML = '';
    }

});
