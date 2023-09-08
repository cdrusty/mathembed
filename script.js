function evaluateEquation() {
    const equationInput = document.getElementById("equationInput");
    const equation = equationInput.value.trim();

    if (!equation) {
        alert("Please enter a valid equation.");
        return;
    }

    // Fetch the result from the server
    fetch(`/math/${encodeURIComponent(equation)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.text(); // Read the response as text
        })
        .then(data => {
            try {
                const resultObject = JSON.parse(data);
                if (resultObject && resultObject.hasOwnProperty("result")) {
                    // Display the result on the website
                    const resultElement = document.getElementById("result");
                    resultElement.textContent = `Result: ${resultObject.result}`;
                } else if (resultObject && resultObject.hasOwnProperty("error")) {
                    // Handle server error
                    alert(`Server Error: ${resultObject.error}`);
                } else {
                    // Handle unexpected response
                    throw new Error("Unexpected response from the server");
                }
            } catch (error) {
                // Handle JSON parsing error
                console.error("Error parsing JSON response:", error);
                alert("Error parsing server response. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching and processing result:", error);
            alert("Error fetching and processing result. Please try again.");
        });
}
