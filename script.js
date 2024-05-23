document.addEventListener('DOMContentLoaded', function() {
  var videoLinks = document.querySelectorAll('#videoNav a');
  videoLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior
          var videoId = link.getAttribute('data-video-id');
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

function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';
}

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  showPopup(); 
});

document.querySelector('.close').addEventListener('click', function() {
  hidePopup();
});

