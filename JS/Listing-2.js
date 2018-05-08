$(document).ready(function() {
    var $button_prev = $(".prev");
    var $button_next = $(".next");

    var $currentIndex = 0;
    // $items is basically a variable array that holds those divs
    var $items = $(".mySlides");
    var $itemAmt = $items.length;

    // This function hides all the other items except the chosen one
    cycleItems() 
    {
        var $the_one = $(".mySlides").eq($currentIndex);
        $items.hide();
        $the_one.css('display', 'inline-block');
    }

    // A variable for automatic slide
    var autoSlide = setInterval(function() {
        $currentIndex += 1;
        if ($currentIndex > $itemAmt - 1) {
          $currentIndex = 0;
        }
        cycleItems();
    }, 3000);

    //The following functions are almost the same as the autoslide,
    //but only runs when clicked
    $button_next.click(function() {
        // This cancels the autoslide
        clearInterval(autoSlide);
        $currentIndex += 1;
        if ($currentIndex > $itemAmt - 1) {
        $currentIndex = 0;
        }
        cycleItems();
    });
    
    $button_prev.click(function() {
        // This cancels the autoslide
        clearInterval(autoSlide);
        $currentIndex -= 1;
        if ($currentIndex < 0) {
        $currentIndex = $itemAmt - 1;
        }
        cycleItems();
    });
})