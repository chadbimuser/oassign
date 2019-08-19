$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Continue",
            previous: "Back",
            finish: 'Proceed to checkout'
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(1) a img').attr('src','images/step1-assign-writer.png');
            } else {
                $('.steps ul li:nth-child(1) a img').attr('src','images/step1-assign-writer.png');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step2-ask-questions.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','images/step2-ask-questions.png');
            }
			
			 if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step3-schedule.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','images/step3-schedule.png');
            }

            if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step4-writing.png');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src','images/step4-writing.png');
            }			

            return true; 
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Click to see password 
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    }) 
    // Create Steps Image
    $('.steps ul li:nth-child(1)').append('<img src="images/arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step1-assign-writer.png" alt="">').append('<span class="step-order">First Step</span>');
    $('.steps ul li:nth-child(2)').append('<img src="images/arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step2-ask-questions.png" alt="">').append('<span class="step-order">Second Step</span>');
	$('.steps ul li:nth-child(3)').append('<img src="images/arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/step3-schedule.png" alt="">').append('<span class="step-order">Third Step</span>');
    $('.steps ul li:last-child a').append('<img src="images/step4-writing.png" alt="">').append('<span class="step-order">Last Step</span>');
    // Count input 
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
})
