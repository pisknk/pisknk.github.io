document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");
    const resultElement = document.getElementById("result");
    const errorList = document.getElementById("errorList");
	const correctMathAnswer = 30;
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
	const fruitSaladEmojis = [
    "🍇", // Grapes
    "🍈", // Melon
    "🍉", // Watermelon
    "🍊", // Orange
    "🍋", // Lemon
    "🍌", // Banana
    "🍍", // Pineapple
    "🍎", // Apple
    "🍏", // Green Apple
    "🍐", // Pear
    "🍑", // Peach
    "🍒", // Cherries
    "🍓", // Strawberry
    "🥝", // Kiwi Fruit
    "🍅", // Tomato
    "🥭", // Mango
    "🍆", // Eggplant
    "🥬", // Leafy Green
    "🥕", // Carrot
	];
    let currentErrorIndex = 0;
    let currentErrors = [];

    showPasswordCheckbox.addEventListener("change", function() {
        if (showPasswordCheckbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    passwordInput.addEventListener("input", function() {
        // Clear any previous messages
        resultElement.textContent = "";
        errorList.innerHTML = "";

        const password = passwordInput.value;
        currentErrors = checkPasswordSecurity(password);
        currentErrorIndex = 0;
        showNextError();
    });

    function showNextError() {
    if (currentErrors.length > 0 && currentErrorIndex < currentErrors.length) {
        resultElement.textContent = "Try again, babes.";
        errorList.innerHTML = "";

        const error = currentErrors[currentErrorIndex];
        const listItem = document.createElement("li");
        listItem.textContent = error;
        errorList.appendChild(listItem);
    } else {
        resultElement.textContent = "Congrats! Now Logging in...";
        errorList.innerHTML = "";

        // Redirect after 3 seconds
        setTimeout(function() {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Replace with your desired website URL
        }, 3000); // 3 seconds in milliseconds
    }
}

    passwordInput.addEventListener("change", function() {
        currentErrorIndex++;
        showNextError();
    });

    function checkPasswordSecurity(password) {
		
		function includesFruitSaladEmoji(password) {
    	return fruitSaladEmojis.some(emoji => password.includes(emoji));
		}
		
		function includesNaAndCl(password) {
        const lowercasePassword = password.toLowerCase();
        return lowercasePassword.includes("na") && lowercasePassword.includes("cl");
    	}
		
		function includesScooterBraun(password) {
    	const lowercasePassword = password.toLowerCase();
    	return lowercasePassword.includes("scooter braun");
		}
		
        const errors = [];
		const album1989Songs = [
    	"Welcome To New York",
    	"Blank Space",
    	"Style",
    	"Out Of The Woods",
		"All You Had To Do Was Stay",
		"Shake It Off",
		"I Wish You Would",
		"Bad Blood",
		"Wildest Dreams",
		"How You Get The Girl",
		"This Love",
		"I Know Places",
		"Clean"
    	// Add other song titles here
		];

        if (password.length < 8) {
            errors.push("Password must be at least 8 characters long");
        }

        if (!/[A-Z]/.test(password)) {
            errors.push("Password must include at least one uppercase letter");
        }

        if (!/[a-z]/.test(password)) {
            errors.push("Password must include at least one lowercase letter");
        }

        if (!/\d/.test(password)) {
            errors.push("Password must include at least one number");
        }

        if (!/[^A-Za-z0-9]/.test(password)) {
            errors.push("Password must include at least one special character");
        }
		
		if (!album1989Songs.some(song => password.includes(song))) {
    		errors.push("Password must include at least one song title from Taylor Swift's 1989 album");
		}
		
		if (!password.includes(correctMathAnswer.toString())) {
    		errors.push("Password must include the correct answer this math question: 3×(4+2)−8÷2+(5−1)²");
		}
		
		if (!password.includes(currentMonth.toString())) {
    		errors.push("Password must include the current month as a number");
		}
		
		if (!includesFruitSaladEmoji(password)) {
    		errors.push("Password must include at least one emoji representing a fruit salad");
		}
		
		if (!includesNaAndCl(password)) {
        errors.push("Password must include the elements that make up salt");
    	}
		
		if (!includesScooterBraun(password)) {
    	errors.push("Password must include the person who stole Taylor Swift's Music");
		}
		
        return errors;
    }
});
