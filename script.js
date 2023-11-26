// Replace 'YOUR_API_KEY' with the actual API key


async function query(data) {
    console.log("ramji1");
    try {
        const response = await fetch(
            "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
            {
                headers: { 
                    "Accept": "image/png",
                    "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM", 
                    "Content-Type": "application/json" 
                },
                method: "POST",
                body: JSON.stringify(data),
            }
            );
	const result = await response.blob();
    console.log("ramji");
    return result;
    } catch (error) {
        console.error("erroramji");
        displayError(error.message);
    }
}

function generateComic() {
    const formData = new FormData(document.getElementById('comicForm'));
    const textInputs = Array.from(formData.values());
    const joined = textInputs.join(" ")
    console.log(joined);
    query({"inputs": joined}).then((response) => {
        displayComic(response);
    });
}

function displayComic(image){
    const comicDisplay = document.getElementById('comicDisplay');
    comicDisplay.innerHTML = '';
    comicDisplay.appendChild(image);
}

function displayError(errorMessage) {
    const errorMessageElement = document.getElementById('errorMessage');
    errorMessageElement.textContent = errorMessage;
}
