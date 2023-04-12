$(function(){
	$('.tabcontents > div').hide();
	$('.event_tab a').click(function () {
		$('.tabcontents > div').hide().filter(this.hash).fadeIn();
		$('.event_tab a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
  });
