//***************************************************
// Testing the functionality of js on GitHub pages
//***************************************************

var loadContentFromFileToNode = function (fileRequested, domNodeId) {
	xhr.load(fileRequested, addResultToDom);
	function addResultToDom(xhr) {
		document.getElementById(domNodeId).innerHTML = xhr.response;
	};
};