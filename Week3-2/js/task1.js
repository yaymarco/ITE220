(function(){

var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
		
	},
	resize: function() {
		window.addEventListener("resize", this.render);
	},
	devInfo: function() {
		var btnDev = document.getElementById("dev-info");
		var btnBoo = document.getElementById("dev-info-container");
		var everything = "Marco Susilo" + "<br>" + "Student" + "<br>" + "<a href='http://www.github.com/yaymarco/'' target='_blank'>www.github.com/yaymarco</a>";
		btnDev.addEventListener("click", function() {
			btnBoo.innerHTML = everything;
		});
	}
}
task1.render();
task1.resize();
task1.devInfo();

})();