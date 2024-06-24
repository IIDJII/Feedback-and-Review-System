document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const formMessage = document.getElementById('formMessage');
    const fetchSummaryButton = document.getElementById('fetchSummary');
    const totalReviewsElement = document.getElementById('totalReviews');
    const averageRatingElement = document.getElementById('averageRating');

    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const courseId = document.getElementById('courseId').value;
        const rating = document.getElementById('rating').value;
        const review = document.getElementById('review').value;

        // Here you would typically send the data to your backend
        console.log('Review Submitted:', { courseId, rating, review });

        formMessage.textContent = 'Review submitted successfully!';
        reviewForm.reset();
    });

    fetchSummaryButton.addEventListener('click', () => {
        const courseId = document.getElementById('courseSummaryId').value;

        // Here you would typically fetch the summary data from your backend
        console.log('Fetching summary for course:', courseId);

        // Dummy data for demonstration purposes
        const dummySummary = {
            totalReviews: 10,
            averageRating: 4.2,
            ratingsDistribution: {
                1: 1,
                2: 1,
                3: 2,
                4: 3,
                5: 3,
            }
        };

        totalReviewsElement.textContent = dummySummary.totalReviews;
        averageRatingElement.textContent = dummySummary.averageRating.toFixed(2);

        const ctx = document.getElementById('ratingsChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(dummySummary.ratingsDistribution),
                datasets: [{
                    label: 'Number of Ratings',
                    data: Object.values(dummySummary.ratingsDistribution),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
});
