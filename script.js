//your code here
/ Define the song name and YouTube URL
const songName = "Blinding Lights"; // Replace with your favorite song
const youtubeLink = "https://www.youtube.com/watch?v=4NRx8G3h9Hk"; // Replace with the official YouTube link of your song

// Find the song text element by its ID
const songTextElement = document.getElementById("song-text");

// Create the display text
const displayText = `My current favourite song is <a href="${youtubeLink}" target="_blank">${songName}</a>`;

// Insert the text into the HTML
songTextElement.innerHTML = displayText;