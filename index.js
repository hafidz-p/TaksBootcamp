function getData(e) {
    e.preventDefault();
    console.log("getData function triggered"); // Debugging log

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let message = document.getElementById("message").value
    let subject = document.getElementById("subject").value

    console.log(`Hello my name is ${name} ,my email is ${email} , my phone number is ${phone} and my message is ${message}. Subject: ${subject}` );

    // alert()
    // changeElement()
}

// function selectSubject(value) {
//     // Update the visible dropdown text
//     document.getElementById('selected-subject').innerText = value;

//     // Update the hidden input value
//     document.getElementById('subject').value = value;
// }

function selectSubject(value) {
    const subjectElement = document.getElementById('selected-subject');
    subjectElement.innerText = value;
    subjectElement.style.color = 'black';
    subjectElement.classList.remove('text-secondary');
    document.getElementById('subject').value = value;
}