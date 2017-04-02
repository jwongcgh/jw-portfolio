$(document).ready(function() {

    $(".header").sticky();

    // Add smooth scrolling to all links
    $("#navigation a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('body').animate({
                scrollTop: $(hash).offset().top - 40
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // change section title as scrolls
    $(document).scroll(function() {

        var top = $('#portfolio').offset().top - $(document).scrollTop();
        if (top < -40) {
            $("#logo").attr("src", "assets/images/portfolio-web.png");

            var top2 = $('#animation').offset().top - $(document).scrollTop();
            if (top2 < -40) {
                $("#logo").attr("src", "assets/images/portfolio-anim.png");

                var top3 = $('#contact').offset().top - $(document).scrollTop();
                if (top3 < 80) {
                    $("#logo").attr("src", "assets/images/name.png");
                }
                if (top3 > 80) {
                    $("#logo").attr("src", "assets/images/portfolio-anim.png");
                }
            }
            if (top2 > -40) {
                $("#logo").attr("src", "assets/images/portfolio-web.png");
            }
        }
        if (top > -40) {
            $("#logo").attr("src", "assets/images/name.png");
        }
    });

// carousel slider
    $("#myCarousel").carousel();

});
