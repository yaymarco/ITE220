var calender = {
	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
	displayCalender: function() {
		var ele = document.getElementById("calender");
		var calenderText = "<table class='table table-condensed'>";
		calenderText += this.header;
		for(var i = 1 ; i <= 31; i++){
			//stuff
			calenderText += "<td>"+i+"</td>";
			if (i == 7) {
				calenderText += "</tr>";
			}
			if (i == 14) {
				calenderText += "</tr>";
			}
			if (i == 21) {
				calenderText += "</tr>";
			}
			if (i == 28) {
				calenderText += "</tr>";
			}
		}
		calenderText += "</table"
		ele.innerHTML = calenderText;
	}
}
calender.displayCalender();