//***************************************************
// Testing the functionality of js on GitHub pages
//***************************************************

var testFunction = function (fileRequested, domNodeId) {
	console.log("Stepped into test function");
	xhr.load(fileRequested, addResultToDom);
	function addResultToDom(xhr) {
		document.getElementById(domNodeId).innerHTML = xhr.response;
	};
};