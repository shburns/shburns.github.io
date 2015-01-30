//*************************************************************************************************
// setContentNode
//		A bit of a redundant wrapper function used to run the xhr.load function and
//		define the standard callback.
//	contentName: String
//		The name of the file to be loaded by the xhr call
//*************************************************************************************************
function setContentNode(contentName) {
	xhr.load("/content/" + contentName + ".html", addResultToDom);
}

//********************************************************************************************
//	addResultToDom
//		Straight forward function used to populate the 'dynamicBody' div
//		of the main page with the currently loaded dynamic content.
//	xhr: XMLHttpRequest
//		The XMLHttpRequest object whose response will be used to populate the main page.
//********************************************************************************************
function addResultToDom(xhr) {
	var contentText;

	//Testing property availability for IE9 support.
	if (xhr.response) {
		contentText = xhr.response;
	} else {
		contentText = xhr.responseText;
	}
	document.getElementById('dynamicBody').innerHTML = contentText;
};

//********************************************************************************************
// setBlogNavigationButtons
//		Toggles the display of the 'next' and 'prev' buttons based on whether or not there is
//		another blog in that direction of the list of blog entries. Then it sets the on-click
//		handlers to load the next blog entry.
// selectedEntry: String
//		The name of the currently selected blog entry.
//********************************************************************************************
function setBlogNavigationButtons(selectedEntry) {
	document.getElementById('nextBlogEntry').style.visibility = 'hidden';
	document.getElementById('prevBlogEntry').style.visibility = 'hidden';
	for (var i = 0; i < entriesLinkedList.length; i++) {
		if (entriesLinkedList[i].name == selectedEntry) {
			if (entriesLinkedList[i].next_entry != null) {
				document.getElementById('nextBlogEntry').style.visibility = 'visible';
			}
			if (entriesLinkedList[i].prev_entry != null) {
				document.getElementById('prevBlogEntry').style.visibility = 'visible';
			}
		}
	}
}

//********************************************************************************************
// getNextBlogEntry(evt)
//		Navigate the page to the next blog entry in the list of entries.
//********************************************************************************************
function getNextBlogEntry(evt) {
	console.log('entering: getNextBlogEntry');
	var locationRoot = window.location.href.split('#')[0],
		currentEntryName = parseUrlForBlogName(),
		nextEntryName = "";
	for (var i = 0; i < entriesLinkedList.length; i++) {
		if (entriesLinkedList[i].name == currentEntryName) {
			nextEntryName = entriesLinkedList[i].next_entry;
		}
	}
	window.location = locationRoot + '#/' + nextEntryName;
}

//********************************************************************************************
// getPrevBlogEntry(evt)
//		Navigate the page to the previous blog entry in the list of entries.
//********************************************************************************************
function getPreviousBlogEntry(evt) {
	console.log('entering: getPreviousBlogEntry');
	var locationRoot = window.location.href.split('#')[0],
		currentEntryName = parseUrlForBlogName(),
		prevEntryName = "";
	for (var i = 0; i < entriesLinkedList.length; i++) {
		if (entriesLinkedList[i].name == currentEntryName) {
			nextEntryName = entriesLinkedList[i].prev_entry;
		}
	}
	window.location = locationRoot + '#/' + prevEntryName;
}