document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review-box');
    let currentIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        });
    }

    function showNextReview() {
        currentIndex++;
        if (currentIndex >= reviews.length) {
            currentIndex = 0;
        }
        showReview(currentIndex);
    }

    function showPreviousReview() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = reviews.length - 1;
        }
        showReview(currentIndex);
    }

    // Show the first review initially
    showReview(currentIndex);

    // Automatic slideshow
    setInterval(showNextReview, 5000);

    // Event listeners for next and previous buttons
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', showNextReview);
    prevButton.addEventListener('click', showPreviousReview);
});
