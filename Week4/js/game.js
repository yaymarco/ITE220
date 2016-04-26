(function(){
	var game = {
		randNumber: Math.floor((Math.random() * 100) + 1),
		init: function() {
			this.bindEvent();
		},
		bindEvent: function() {
			var self = this;

			var button1 = document.getElementById("one");
			button1.addEventListener("click", this.clickNumberButton);

			var button2 = document.getElementById("two");
			button2.addEventListener("click", this.clickNumberButton);

			var button3 = document.getElementById("three");
			button3.addEventListener("click", this.clickNumberButton);

			var button4 = document.getElementById("four");
			button4.addEventListener("click", this.clickNumberButton);

			var button5 = document.getElementById("five");
			button5.addEventListener("click", this.clickNumberButton);

			var button6 = document.getElementById("six");
			button6.addEventListener("click", this.clickNumberButton);

			var button7 = document.getElementById("seven");
			button7.addEventListener("click", this.clickNumberButton);

			var button8 = document.getElementById("eight");
			button8.addEventListener("click", this.clickNumberButton);

			var button9 = document.getElementById("nine");
			button9.addEventListener("click", this.clickNumberButton);

			var button0 = document.getElementById("zero");
			button0.addEventListener("click", this.clickNumberButton);

			var guessBtn = document.getElementById("guess");
			guessBtn.addEventListener("click", function(){
				self.guess(self);
			});
		},
		clickNumberButton: function(e){
			var userNumber = document.getElementById("randomnumber");
			userNumber.value += e.target.textContent;
		},
		guess: function(self){
			var userNumber = document.getElementById("randomnumber");
			var alertMsg = document.getElementById("alertContainer");
			if(userNumber.value == self.randNumber) {
				alertMsg.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Congratulations!</strong> Your guess is correct.</div>';
			} else if(userNumber.value < self.randNumber) {
				alertMsg.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Oh no!</strong> Your guess is too low.</div>';
				userNumber.value = "";
			} else if(userNumber.value > self.randNumber) {
				alertMsg.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Oh no!</strong> Your guess is too high.</div>';
				userNumber.value = "";
			}
		}
	};

	game.init();
})();