	// Replace ./data.json with your JSON feed
fetch('https://jain10gunjan.github.io/ijnoapi/api.json').then(response => {
	return response.json();
  }).then(data => {
	// Work with JSON data here

	const countryStateInfo = data.practice;
	window.onload = function () {

		//Get html elements
		var countySel = document.getElementById("examName");
		var stateSel = document.getElementById("subjectName");
		var citySel = document.getElementById("chapterName");
		var zipSel = document.getElementById("sheetNumber");
	
		//Load countries
		for (var country in countryStateInfo) {
			countySel.options[countySel.options.length] = new Option(country, country);
		}
	
		//County Changed
		countySel.onchange = function () {
	
			stateSel.length = 1; // remove all options bar first
			citySel.length = 1; // remove all options bar first
			zipSel.length = 1; // remove all options bar first
	
	
			if (this.selectedIndex < 1)
				return; // done
	
			for (var state in countryStateInfo[this.value]) {
				stateSel.options[stateSel.options.length] = new Option(state, state);
			}
		}
	
		//State Changed
		stateSel.onchange = function () {
	
			citySel.length = 1; // remove all options bar first
			zipSel.length = 1; // remove all options bar first
	
			if (this.selectedIndex < 1)
				return; // done
	
			for (var city in countryStateInfo[countySel.value][this.value]) {
				citySel.options[citySel.options.length] = new Option(city, city);
			}
		}
	
		//City Changed
		citySel.onchange = function () {
			zipSel.length = 1; // remove all options bar first
	
			if (this.selectedIndex < 1)
				return; // done
	
			var zips = countryStateInfo[countySel.value][stateSel.value][this.value];
			for (var zips in countryStateInfo[countySel.value][stateSel.value][this.value]) {
				zipSel.options[zipSel.options.length] = new Option(zips, zips);
			}
			//for (var i = 0; i < zips.length; i++) {
			//	zipSel.options[zipSel.options.length] = new Option(zips, zips);
			//}
		}
		


    function handleClick() {
	var examName = document.getElementById('examName').value;
	var subjectName = document.getElementById('subjectName').value;
	var chapterName = document.getElementById('chapterName').value;
	var sheetNumber = document.getElementById('sheetNumber').value;
	console.log(countryStateInfo[examName][subjectName][chapterName][sheetNumber]);
	var sheetId = countryStateInfo[examName][subjectName][chapterName][sheetNumber];
	//var subjectName = document.getElementById('stateSel').value.replace(/ /g, "-").toLowerCase();;
	//var chapterName = document.getElementById('citySel').value.replace(/ /g, "-").toLowerCase();;
	//var sheetNumber = document.getElementById('zipSel').value.replace(/ /g, "-").toLowerCase();;
	//var dropValue = dropDown.options[dropDown.selectedIndex].value;
	
	//window.open('https://cutt.ly/' + dropValue)
	//window.open('' + subjectName + '/' + chapterName + '/' + sheetNumber + '.pdf');
  
	var driveValueS1 = 'https://drive.google.com/file/d/' + sheetId + '/view';
	document.getElementById('detailswindow').href = driveValueS1;
	/**if(subjectName == 'physics'){
	  document.getElementById('detailswindow').href = driveValueS1;
	}else if(subjectName == 'chemistry'){
	  document.getElementById('detailswindow').href = driveValueS2;
	}else if(subjectName == 'mathematics'){
	  document.getElementById('detailswindow').href = driveValueS3;
	}else if(subjectName == 'biology'){
	  document.getElementById('detailswindow').href = driveValueS4;
	}**/
  }
		
	}
	
	/*var i = "JEE Mains / Advance";
	var j = "Physics";
	var g = "Units And Measurement";
	var p = "Sheet-02";
	console.log(countryStateInfo[i][j][g][p]);*/
	
	




	console.log(data.practice);
  }).catch(err => {
	// Do something for an error here
  });




/*window.onload = function () {

	//Get html elements
	var countySel = document.getElementById("examName");
	var stateSel = document.getElementById("subjectName");
	var citySel = document.getElementById("chapterName");
	var zipSel = document.getElementById("sheetNumber");

	//Load countries
	for (var country in countryStateInfo) {
		countySel.options[countySel.options.length] = new Option(country, country);
	}

	//County Changed
	countySel.onchange = function () {

		stateSel.length = 1; // remove all options bar first
		citySel.length = 1; // remove all options bar first
		zipSel.length = 1; // remove all options bar first


		if (this.selectedIndex < 1)
			return; // done

		for (var state in countryStateInfo[this.value]) {
			stateSel.options[stateSel.options.length] = new Option(state, state);
		}
	}

	//State Changed
	stateSel.onchange = function () {

		citySel.length = 1; // remove all options bar first
		zipSel.length = 1; // remove all options bar first

		if (this.selectedIndex < 1)
			return; // done

		for (var city in countryStateInfo[countySel.value][this.value]) {
			citySel.options[citySel.options.length] = new Option(city, city);
		}
	}

	//City Changed
	citySel.onchange = function () {
		zipSel.length = 1; // remove all options bar first

		if (this.selectedIndex < 1)
			return; // done

		var zips = countryStateInfo[countySel.value][stateSel.value][this.value];
		for (var zips in countryStateInfo[countySel.value][stateSel.value][this.value]) {
			zipSel.options[zipSel.options.length] = new Option(zips, zips);
		}
		//for (var i = 0; i < zips.length; i++) {
		//	zipSel.options[zipSel.options.length] = new Option(zips, zips);
		//}
	}
}*/

/*var i = "JEE Mains / Advance";
var j = "Physics";
var g = "Units And Measurement";
var p = "Sheet-02";
console.log(countryStateInfo[i][j][g][p]);*/
