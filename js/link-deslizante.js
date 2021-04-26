const $doc = $('html, body')
$('a').click(e => {
	$doc.animate({
		scrollTop: $($.attr(e.target, 'href')).offset().top
	}, 500)
	return false
})
