// Get the form
const voteForm = document.getElementById("voteForm");

// Get the result box
const result = document.getElementById("result");


// When the user clicks "Check Eligibility"
voteForm.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();


    // Get values from input fields
    const name = document.getElementById("name").value.trim();

    const age = Number(
        document.getElementById("age").value
    );

    const country =
        document.getElementById("country").value;


    // Clear previous result
    result.className = "result";


    // Check whether name is entered
    if (name === "") {

        result.innerHTML =
            "⚠️ Please enter your full name.";

        result.classList.add("error");

        return;
    }


    // Check whether age is entered correctly
    if (!age || age < 1 || age > 120) {

        result.innerHTML =
            "⚠️ Please enter a valid age.";

        result.classList.add("error");

        return;
    }


    // Check country
    if (country === "") {

        result.innerHTML =
            "⚠️ Please select your country.";

        result.classList.add("error");

        return;
    }


    // Check voting eligibility
    if (age >= 18 && country === "India") {

        result.innerHTML = `
            ✅ <strong>${name}</strong>, you are eligible
            to vote.
        `;

        result.classList.add("success");

    }

    else {

        result.innerHTML = `
            ❌ <strong>${name}</strong>, you are not eligible
            based on the information entered.
        `;

        result.classList.add("error");

    }

});