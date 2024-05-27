// This event listener waits for the HTML document to be fully loaded and parsed before executing its code
document.addEventListener('DOMContentLoaded', function() {
  var videoLinks = document.querySelectorAll('#videoNav a');  // This selects all <a> elements inside an element with the id 'videoNav'
  videoLinks.forEach(function(link) {   // This loop iterates through each selected <a> element
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior
          var videoId = link.getAttribute('data-video-id'); // This retrieves the value of the 'data-video-id' attribute from the clicked <a> element
          var videoUrl = 'https://www.youtube.com/watch?v=' + videoId;
          window.open(videoUrl, '_blank'); // Open link in a new window or tab
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "🤜 Mental health and fitness are like a garden - they require care, nurturing, and regular attention to flourish 🤛",
    "🤜 Mental health is just as important as physical health. Nurture both with self-care and self-love. 🤛",
    "🤜 Sweat out the doubts in your mind as you sweat it out in the gym. Mental and physical fitness go hand in hand. 🤛",
    "🤜 Feed your mind with positive thoughts and nourish your body with physical activity. That's the recipe for mental and fitness success. 🤛",
    "🤜 In a world where you can be anything, be kind to your mind. 🤛",
    "🤜 Never apologize for putting yourself first when it comes to your mental health. 🤛", 
    "🤜 Laughing decreases blood pressure and increases blood flow. 🤛"
    ];

  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById('quoteText');
    quoteText.textContent = quotes[randomIndex];
    }

  generateRandomQuote();
});

// This function shows the popup by changing its display style to 'block'
function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

// This function hides the popup by changing its display style to 'none'
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// This event listener listens for the 'submit' event on the form with id 'myForm'
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  showPopup(); 
});

// This event listener listens for a click event on an element with class 'close'
document.querySelector('.close').addEventListener('click', function() {
  hidePopup(); // This calls the function to hide the popup
});

