$('button').on('click', function(){
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
			'key': '',
			'message': {
				'to': [
					{}
				],
				'autotext': 'true',
				'subject': 'YOUR SUBJECT HERE',
				'html': 'YOUR EMAIL CONTENT HERE'
			}
		}
	}).done(function(response){
		console.log(response);
	});
});