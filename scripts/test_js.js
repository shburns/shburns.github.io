//***************************************************
// Testing the functionality of js on GitHub pages
//***************************************************

var testFunction = function () {
	console.log("Stepped into test function");
	setTimeout(function () {
		document.getElementById("testDynamicFunctionality").innerHTML = "We've successfully modified the DOM on our GitHub pages.";
	}, 5000);
};