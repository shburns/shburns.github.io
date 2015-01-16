var xhr = {
	load: function (url, callback, method) {
		console.log("**entering xhr.load()**");

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = updateXhrState;

		function updateXhrState() {
			if (xhr.readyState < 4 || xhr.status !== 200) {
				return;
			} else {
				callback(xhr);
			}
		}

		xhr.open(method ? method : "GET", url, true);
		xhr.send();
	}
}