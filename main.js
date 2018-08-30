$('nav a').click(function(e) {
	console.log('click');
	console.log(this);
	console.log(this.id);
	e.preventDefault();
	$('nav a').removeClass('active');
	$(this).addClass('active');
	if(this.id === !'exp'){
	  $('.exper').addClass('noshow');
	}
	else if(this.id === 'exp') {
	  $('.exper').removeClass('noshow');
	  $('.content').children().not('.exper').addClass('noshow');
	}
	else if (this.id === 'prof') {
	  $('.profile').removeClass('noshow');
	   $('.content').children().not('.profile').addClass('noshow');
	}
});