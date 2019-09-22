$(document).ready(
		function() {
			$("#clickrandomkey").click(function(e) {

				var hexKey = encryptor.generateRandomHex(32);
            

						$('#encrandomkey').val(hexKey);
					
				});

			

			$("#encryptclicked").click(
					function(e) {
						event.preventDefault();
						var secrettext = $('#encrypttextarea').val();
						var randomkey = $('#encrandomkey').val();
						try{
										var output = encryptor.encryptData(secrettext, randomkey);
										$('#encryptedoutput').val(
												output);
						}catch(err)
						{alert(err.message)
						}

					});

			$("#submitdec").click(
					function(e) {
						event.preventDefault();
						var secrettext = $('#decrypttextarea').val();
						var randomkey = $('#decrandomsecrekey').val();
						try{
						var output= encryptor.decryptData(secrettext, randomkey);
						
										$('#decryptedoutput').val(
												output);

						}catch(err)
						{alert(err.message)
						}

					});

			$("#encryptclickedmd5").click(function(e) {
				event.preventDefault();
				
				var secrettext = $('#encmd5').val();
                 try{
				  var hash =  $.md5(secrettext);
				$('#cryptoutmd5').val(hash);
				 }catch(err) {
  alert(err.message)
}

			});

			
			
			$("#sha256submit").click(function(e) {
				event.preventDefault();
				var secrettext = $('#sha256textinput').val();
                try{
				
		        var hashText = CryptoJS.SHA256(secrettext);  
			    $('#sha256response').val(hashText);
				}catch(err)
				{
					alert(err.message)
				}
				

			});
			
			
			
			$("#sha512submit").click(function(e) {
				event.preventDefault();
				var secrettext = $('#sha512textinput').val();
                 try{
				var hashText=SHA512(secrettext)
				$('#sha512response').val(hashText);
				 }catch(err){alert(err.message)}

					

			});
		});