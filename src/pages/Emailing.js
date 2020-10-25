import emailjs from "emailjs-com";

export function Emailing(props){
	
	for(var i = 0; i < props.length; i++){
		var emailInfo = {
			sperson: props[i][0].name,
			reciever: props[i][1].name,
			sendto: props[i][0].email,
			wishlist: props[i][1].wishlist
		}
		emailjs.send('gmail', 'template_qrgsrcs', emailInfo, 'user_TC1eDHZJTSVS8cZQXe46Q')
			.then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
			}, function(error) {
			alert("Error: An email was entered incorrectly!");
			console.log('FAILED...', error);
			});
	}
}

