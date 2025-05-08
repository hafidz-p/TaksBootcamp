function getData(e) {
    e.preventDefault();


    const projectName = document.getElementById("projectName").value;
    const dateStart = document.getElementById("dateStart").value;
    const dateEnd = document.getElementById("dateEnd").value;
    const description = document.getElementById("message").value;

    const technologies = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value)
        .join(", ");

    const cards = [
        {
            projectName,
            dateStart,
            dateEnd,
            description,
            technologies
        }
    ];



    for (let i = 0; i < cards.length; i++) {
        document.getElementById("projectList").innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${cards[i].projectName}</h5>
                        <p class="card-text"><strong>Start Date:</strong> ${cards[i].dateStart}</p>
                        <p class="card-text"><strong>End Date:</strong> ${cards[i].dateEnd}</p>
                        <p class="card-text"><strong>Description:</strong> ${cards[i].description}</p>
                        <p class="card-text"><strong>Technologies:</strong> ${cards[i].technologies}</p>
                    </div>
                </div>
            </div>
        `;
    }

    document.querySelector("form").reset();
}

function selectSubject(value) {
    const subjectElement = document.getElementById('selected-subject');
    subjectElement.innerText = value;
    subjectElement.style.color = 'black';
    subjectElement.classList.remove('text-secondary');
    document.getElementById('subject').value = value;
}

$(document).ready(function () {
    $('#datepicker input').datepicker({
        format: 'mm/dd/yyyy', 
        autoclose: true,      
        todayHighlight: true  
    });


    $('#datepicker2 input').datepicker({
        format: 'mm/dd/yyyy', 
        autoclose: true,     
        todayHighlight: true 
    });
});