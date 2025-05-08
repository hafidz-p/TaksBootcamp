function getData(e) {
    e.preventDefault();

    // Get form values
    const projectName = document.getElementById("projectName").value;
    const dateStart = document.getElementById("dateStart").value;
    const dateEnd = document.getElementById("dateEnd").value;
    const description = document.getElementById("message").value;

    // Create a new card
    const card = `
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${projectName}</h5>
                    <p class="card-text"><strong>Start Date:</strong> ${dateStart}</p>
                    <p class="card-text"><strong>End Date:</strong> ${dateEnd}</p>
                    <p class="card-text"><strong>Description:</strong> ${description}</p>
                </div>
            </div>
        </div>
    `;

    // Append the card to the project list
    document.getElementById("projectList").insertAdjacentHTML("beforeend", card);

    // Clear the form
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
    // Initialize Date Start picker
    $('#datepicker input').datepicker({
        format: 'mm/dd/yyyy', // Adjust the format as needed
        autoclose: true,      // Close the picker after selecting a date
        todayHighlight: true  // Highlight today's date
    });

    // Initialize Date End picker
    $('#datepicker2 input').datepicker({
        format: 'mm/dd/yyyy', // Adjust the format as needed
        autoclose: true,      // Close the picker after selecting a date
        todayHighlight: true  // Highlight today's date
    });
});