

$(document).ready(function() {

	


	var enerPick = Math.floor(Math.random() * 102) + 19; 
	
		$(".randNum").html(enerPick); 

		var shOne, shTwo, shThree, shFour 

	 shOne = Math.floor(Math.random() * 12) + 1; 
	
		$("#img1").html("<img src=" + "assets/images/sh1.jpg" + " value=" + shOne + ">"); 

	 shTwo = Math.floor(Math.random() * 12) + 1; 

		$("#img2").html("<img src=" + "assets/images/sh2.jpg" + " value=" + shTwo + ">"); 

	 shThree = Math.floor(Math.random() * 12) + 1; 
	
		$("#img3").html("<img src=" + "assets/images/sh3.jpg" + " value=" + shThree + ">");
	
	 shFour = Math.floor(Math.random() * 12) + 1; 
	
		$("#img4").html("<img src=" + "assets/images/sh4.jpg" + " value=" + shFour + ">");

		
	var wins = 0; 
	var losses = 0; 
	var score = 0; 
	

	function reset () {
		enerPick = Math.floor(Math.random() * 102) + 19; 
		
		$(".randNum").html(enerPick); 

		score = 0; 
		$(".enDisplay").html(score); 

		shOne = Math.floor(Math.random() * 12) + 1;  
		 
		$("#img1").html("<img src=" + "assets/images/sh1.jpg" + " value=" + shOne + ">"); 

		shTwo = Math.floor(Math.random() * 12) + 1; 
		
		$("#img2").html("<img src=" + "assets/images/sh2.jpg" + " value=" + shTwo + ">"); 

		shThree = Math.floor(Math.random() * 12) + 1; 
	
		$("#img3").html("<img src=" + "assets/images/sh3.jpg" + " value=" + shThree + ">");
	
		shFour = Math.floor(Math.random() * 12) + 1; 

		$("#img4").html("<img src=" + "assets/images/sh4.jpg" + " value=" + shFour + ">");

		$("img").on("click", function () {
			var newEnScore = score += parseInt($(this).attr("value")); 
				
			$(".enDisplay").html(newEnScore); 

			if(newEnScore === enerPick) { 
				wins++ ; 
				$(".wins").html("Wins: " + wins); 
				alert('You Guessed it right!');
					reset(); 
			
			} 

			else if(newEnScore > enerPick) {
				losses++ ; 
				alert('You Guessed it wrong!');
				$(".losses").html("Losses: " + losses); 
				
					reset(); 
				
			}

		}); 



	}

	$("img").on("click", function () {
		var newEnScore = score += parseInt($(this).attr("value")); 
			// console.log("New Score: " + newEnScore); 
		$(".enDisplay").html(newEnScore); 

		if(newEnScore === enerPick) { 
			wins++ ; 
			alert('You Guessed it right!');
			$(".wins").html("Wins: " + wins); 
				// console.log("Wins: " + wins); 
				
				reset(); 
				
		} 

		else if(newEnScore > enerPick) {
			losses++ ; 
			alert('You Guessed it wrong!');
			$(".losses").html("Losses: " + losses); 
		
				reset(); 
		}

	}); 

}); 
