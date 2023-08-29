// JavaScript Document

const strengthIndicator = document.getElementById("passwordStrength");
    const weakColor = "red";
    const mediumColor = "orange";
    const strongColor = "green";

    if (password.length === 0) {
        strengthIndicator.textContent = "";
        strengthIndicator.style.color = "";
        return;
    }

    let strength = 0;

    // Check password length
    if (password.length >= 8) {
        strength++;
    }

    // Check uppercase letters
    if (/[A-Z]/.test(password)) {
        strength++;
    }

    // Check lowercase letters
    if (/[a-z]/.test(password)) {
        strength++;
    }

    // Check numbers
    if (/[0-9]/.test(password)) {
        strength++;
    }

    // Check special characters
    if (/[$@$!%*?&#]/.test(password)) {
        strength++;
    }

    const requirementsList = [
        "At least 8 characters",
        "Answer to 13*4/16",
        "Current month",
        "Year of the animal",
        "Valid ISBN-13",
        "Taylor Swift song from '1989'",
    ];

    let requirementsMet = [];
    let strength = 0;

    // Check password length
    if (password.length >= 8) {
        requirementsMet.push(requirementsList[0]);
        strength++;
    }

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed

    const mathAnswer = 13 * 4 / 16;
    const yearOfAnimal = getYearOfAnimal(currentYear); // You need to implement this function
    const taylorSwiftSongs1989 = ["Blank Space", "Shake It Off", "Bad Blood", "Welcome To New York", "Blank Space", "Style", "Out Of The Woods", "All You Had To Do Was Stay", "Shake It Off", "I Wish You Would", "Bad Blood", "Wildest Dreams", "How You Get The Girl", "This Love", "I Know Places", "Clean"]; // List of Taylor Swift songs from "1989"
	
	const strengthIndicator = document.getElementById("passwordStrength");
    const requirements = [
        "Password must have 8 characters",
        "Password must have the answer to this math question (13*4/16)",
        "Password must contain the current month",
        "Password must include the year of the animal",
        "Password must include a valid ISBN-13 number",
        "Password must contain a Taylor Swift song title from the album '1989'"
    ];
	
	let currentRequirement = 0;

    if (password.length >= 8) {
        currentRequirement = 1;
    }

    strengthIndicator.textContent = requirements[currentRequirement - 1];
    strengthIndicator.style.color = "black";

    let additionalRequirementsMet = false;

    // Check math answer
    if (password.includes(mathAnswer)) {
        strength++;
    }

    // Check current month
    if (password.includes(currentMonth)) {
        strength++;
    }

    // Check year of animal
    if (password.includes(yearOfAnimal)) {
        strength++;
    }

    // Check for valid ISBN-13
    if (isValidISBN13(password)) {
        strength++;
    }

    // Check for Taylor Swift song title from "1989"
    if (taylorSwiftSongs1989.some(song => password.includes(song))) {
        strength++;
    }

    if (strength === 1) {
        strengthIndicator.textContent = "Weak";
        strengthIndicator.style.color = weakColor;
    } else if (strength === 2 || strength === 3) {
        strengthIndicator.textContent = "Medium";
        strengthIndicator.style.color = mediumColor;
    } else if (strength >= 4) {
        strengthIndicator.textContent = "Strong";
        strengthIndicator.style.color = strongColor;
    }
}

// Implement the getYearOfAnimal and isValidISBN13 functions

function getYearOfAnimal(currentYear) {
    const startYear = 1900; // The start year of the Chinese zodiac cycle
    const animalYears = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

    // Calculate the offset from the start year
    const yearOffset = (currentYear - startYear) % 12;

    // Retrieve the corresponding animal for the offset
    const animal = animalYears[yearOffset];

    return animal;
}


function isValidISBN13(password) {
    // Remove any non-digit characters from the password
    const cleanedPassword = password.replace(/\D/g, '');

    // Check if the cleaned password is exactly 13 digits long
    if (cleanedPassword.length !== 13) {
        return false;
    }

    // Calculate the ISBN-13 check digit
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        const digit = parseInt(cleanedPassword[i]);
        sum += (i % 2 === 0) ? digit : digit * 3;
    }
    const calculatedCheckDigit = (10 - (sum % 10)) % 10;

    // Compare the calculated check digit with the last digit of the password
    return calculatedCheckDigit === parseInt(cleanedPassword[12]);
}

    // Display the requirements met
    displayRequirements(requirementsMet);
}

function displayRequirements(requirements) {
    const requirementsDiv = document.getElementById("requirementsDiv");
    requirementsDiv.innerHTML = "";

    requirements.forEach((requirement, index) => {
        const requirementElement = document.createElement("p");
        requirementElement.textContent = `${index + 1}. ${requirement}`;
        requirementsDiv.appendChild(requirementElement);
    });
}
