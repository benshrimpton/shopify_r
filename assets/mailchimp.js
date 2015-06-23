$(document).ready(function() {



    $('.mc-embedded-subscribe-form input[type="submit"]').on('click', function ( event ) {
        event.preventDefault();

        var $form = $(this).parents('.mc-embedded-subscribe-form')

        if ( validate_input($form) )
        	{ register($form); }
    });




    $('*').on('click', function() {
        $('.mc-response').fadeOut('slow');
    });



	function validate_input($form) {
		if ( $form.find('input').val() == "" )
			return false; 
		else 
			return true;
	}

	function register($form) {
	    $.ajax({
	        type: $form.attr('method'),
	        url: $form.attr('action'),
	        data: $form.serialize(),
	        cache       : false,
	        dataType    : 'jsonp',
	        jsonp : 'c', 
	        contentType: "application/json; charset=utf-8",
			error: function(err) {
			    alert("Could not connect to the server. Please try again later.");
			},
			success: function(data) {
				//console.log(data);
				if(data.result=='error'){
					var msg = data.msg;
					if (msg.indexOf("already") >= 0){
						msg = 'This email is already subscribed';
					}
					else{
						msg = 'Error';
					}
					$form.find('.mc-response').fadeIn('slow').html(msg);
				}
				else{
					$form.find('.mc-response').fadeIn('slow').html('Thank you');

					if($('body').hasClass('subscribe-open')){

						setTimeout(function() {
						      $('body').removeClass('subscribe-open');
						}, 2000);
												
					}
			
				}
			    
			    // console.log(data);
			}
	    });
	}

    });
