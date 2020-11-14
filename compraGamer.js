//xoxecoc300@patmui.com
var script = document.createElement('script');
	script.onload = function () {
	
		emailjs.init('user_Kep0hoaF2dRpD12YXhzg2')
	
		var verificarDisponibilidad = function () {
			console.log("--------------------------");
			console.log("Verificando disponibilidad");
			$.ajax({ url: window.location.href, success: function(data) { 
				var indice = data.indexOf('card-btns__add'); 
				var finalText = data.substring(indice, indice + 200);
				var tieneStock = finalText.indexOf("Sumar al carrito") > 0;
				
				if(tieneStock){
					console.log("* * * * * * * * * * * * * * * * *")
					console.log("SEEEEEE, AHÍ TE VA EL MAIL AMIGO");
					console.log("* * * * * * * * * * * * * * * * *")
					enviarMensaje();
				} else {
					console.log("Todavia no hay suerte");
				}
				
				console.log("--------------------------");
			} });
		}

		var enviarMensaje = function(){
		
			var form = document.createElement("form");
			var element1 = document.createElement("input"); 
			var element2 = document.createElement("input");   

			element1.value="ESTÁ LA PLACA PERRITOOOO.. \n\n EL LINK QUE PROBÉ FUE: " + window.location.href;
			element1.name="message";
			form.appendChild(element1);  

			element2.value="martinsebastianluna@gmail.com";
			element2.name="to_mail";
			form.appendChild(element2);

			//document.body.appendChild(form);
		
			const serviceID = 'default_service';
			const templateID = 'template_uz8o25k';

			emailjs.sendForm(serviceID, templateID, form)
				.then(() => {
				}, (err) => {
					alert(JSON.stringify(err));
				});
		}
	
		verificarDisponibilidad();
		setInterval(verificarDisponibilidad, 90000);
	};
	script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js";

	document.head.appendChild(script);