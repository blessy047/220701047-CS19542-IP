let score = 0;

$(document).ready(function() {
    // Animate the game object to move randomly
    function animateObject() {
        $('#gameObject').animate({
            top: Math.random() * $(window).height(),
            left: Math.random() * $(window).width()
        }, 1000, animateObject);
    }

    // Start the animation
    animateObject();

    // Event for clicking on the game object
    $('#gameObject').click(function() {
        score += 10;
        $('#score').text(score);
        // Add additional animations upon click
        $(this).fadeOut(100).fadeIn(100);
    });
});
