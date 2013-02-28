$( document ).ready( function() {

	// re-size the stage to full browser size
	$('#stage').height($(document).height());
	$('#stage').width($(document).width());

	// remove the welcome message
	$('#stage h1, #stage p').remove();


	// read the config and add an ifrome for each of the sources
	for (var i = 0; i < screenSources.length; i++) {
		screenSource = screenSources[i];

		$('#stage').append('<iframe src="' + screenSource + '" class="meIsAPanel"></iframe>');

		// add index markers
		var indexWidth = 99.5 / screenSources.length;
		$('#index').append('<div class="meIsAnIndexFooBar"></div>');
		$('#index div').width(indexWidth +'%');
	}

	// hide all iframes for the first moment
	$('iframe').hide();

	// add active class to the first ones
	$('iframe:first').addClass('active');
	$('#index div:first').addClass('active');

	// loop over the index markers and panels and activate them one-by-one
	(function(){

		// first the indexes
		$('#index .active').addClass('current');
		if ($('#index .active').next().hasClass('meIsAnIndexFooBar')) {
			$('#index .active').next().addClass('active');
		} else {
			$('#index div:first').addClass('active');
		}
		$('#index .current').removeClass('active current');


		// then the panels
		$('#stage .active').addClass('current');
		if ($('#stage .active').next().hasClass('meIsAPanel')) {
			$('#stage .active').next().addClass('active').show();
		} else {
			$('#stage iframe:first').addClass('active').show();
		}
		$('#stage .current').removeClass('active current').hide();


		// set timeout, before switching to the next one
		setTimeout(arguments.callee, displayDuration);
	})();
});