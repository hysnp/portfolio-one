$('document').ready(function(){

	$('a[class="a-link"]').click(function () { 
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$('body, html').animate( { scrollTop: destination }, 1500 );
	});


	var btn = $('#button-top');

	$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
    	btn.css('display', 'block')
    } else {
    	btn.css('display', 'none')
    }
    });

	btn.click(function () { 
	elementClick = $(this).attr("href");
	destination = $(elementClick).offset().top;
	$('body, html').animate( { scrollTop: destination }, 1500 );
	});

	if(navigator.userAgent.search(/Firefox/) > 0) {
		$('.links').css('background', 'rgba(255, 255, 255, 0.5)');
	};

	if(navigator.userAgent.search(/Chrome/) < 0) {
		alert('Версия сайта тестировалась в браузере Google Chrome (79) , возможны баги в других браузерах.');
	};

});