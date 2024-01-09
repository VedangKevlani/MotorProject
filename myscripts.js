let keywords = [
   'take',
   'learn',
   'practice',
   'test',
   'learner test',
   'driver test',
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

    inputBox.addEventListener('input', function() {
        let input = inputBox.value;
        let result = [];
        if(input.length) {
            result = keywords.filter(keyword => keyword.toLowerCase().includes(input.toLowerCase()));
        }
        display(result);

        if(!result.length){
            resultsBox.innerHTML = '';
        }
    });

    function display(result) {
        const content = result.map(list => {
            return "<li onclick='selectInput(\"" + list + "\")'>" + list + "</li>";
        });
        resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }

    function selectInput(selectedText) {
        inputBox.value = selectedText;
        resultsBox.innerHTML = '';
    }
});
