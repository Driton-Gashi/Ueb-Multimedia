    document.getElementById('textToImageForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const textInput = document.getElementById('textInput').value;
        const checkedImageType = document.querySelector('input[name="imageType"]:checked').value;

        const url = `https://ai-text-to-image-generator-api.p.rapidapi.com/${checkedImageType}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': '17d4d31e58msh87ab998e045b207p1d5a6ejsnda38f38aafb7',
                'X-RapidAPI-Host': 'ai-text-to-image-generator-api.p.rapidapi.com'
            },
            body: JSON.stringify({
                inputs: textInput
            })
        };

        try {
            document.getElementById('resultContainer').innerHTML = `
                <img src="../assets/images/loading.gif">
    `;
    const response = await fetch(url, options);
    const result = await response.json(); // Parse JSON string into object
    // Access the 'url' property of the result object
    const imageUrl = result.url;

    // Display the generated image
    document.getElementById('resultContainer').innerHTML = `
    <a href="${imageUrl}" target="_blank" download="Foto_Gjeneruar_me_AI.jpg" class="download" >
                    <i class="bi bi-download" title="Kliko per te shkarkuar foton"></i>
                </a>
                <a href="${imageUrl}" target="_blank" class="viewMore">
                    <i class="bi bi-eye-fill " title="Kliko per te pare imazhin e plote"></i>
                </a>
                <img src="${imageUrl}" class="GeneratedImage" alt="Generated Image">
    `;
} catch (error) {
    console.error(error);
}

    });