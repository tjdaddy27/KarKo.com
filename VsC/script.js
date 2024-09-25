document.getElementById('contactForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    // Check if the email field is empty
    if (emailInput.value === '') {
        emailError.style.display = 'block'; // Show the custom error message
        emailInput.focus(); // Set focus to the email field
        event.preventDefault(); // Prevent form submission
    } else {
        emailError.style.display = 'none'; // Hide the error message if the field is not empty
    }
});

document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const originalUrl = document.getElementById('originalUrl').value;
    const shortUrl = generateShortUrl(); // Generate a short URL

    // Store in Local Storage
    const urls = JSON.parse(localStorage.getItem('urls')) || [];
    urls.push({ originalUrl, shortUrl });
    localStorage.setItem('urls', JSON.stringify(urls));

    // Display the result
    document.getElementById('result').innerHTML = `Shortened URL: <a href="#" onclick="alert('${originalUrl}')">${shortUrl}</a>`;
});

// Function to generate a short URL (this is a simple example)
function generateShortUrl() {
    return Math.random().toString(36).substring(2, 7); // Random 5-character string
}

const categories = [
    { name: "Category1", url: "category1.html" },
    { name: "Category2", url: "category2.html" },
    { name: "Category3", url: "category3.html" },
    { name: "Category4", url: "category4.html" },
    { name: "Category5", url: "category5.html" },
    { name: "Category6", url: "category6.html" },
    { name: "Category7", url: "category7.html" },
    { name: "Category8", url: "category8.html" },
    { name: "Category9", url: "category9.html" },
    { name: "Category10", url: "category10.html" },
    { name: "Category11", url: "category11.html" },
    { name: "Category12", url: "category12.html" },
    { name: "Category13", url: "category13.html" },
    { name: "Category14", url: "category14.html" },
    { name: "Category15", url: "category15.html" },
    { name: "Category16", url: "category16.html" },
    { name: "Category17", url: "category17.html" },
    { name: "Category18", url: "category18.html" },
    { name: "Category19", url: "category19.html" },
    { name: "Category20", url: "category20.html" },
    { name: "Category21", url: "category21.html" },
    { name: "Category22", url: "category22.html" },
    { name: "Category23", url: "category23.html" },
    { name: "Category24", url: "category24.html" },
];
