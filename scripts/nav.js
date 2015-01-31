//********************************************************************************************
// setContentAndNavigationInfo
//		Initializes the page to load and look for any specified content directly onto the page
//		and toggles visibility of navigational buttons as necessary. Used to handle initialization
//		of the page as well as navigational behavior.
//********************************************************************************************
function setContentAndNavigationInfo() {
	var requestedContent = parseUrlForBlogName();
	var currentContent;

	//If there is a specified blog entry or tab in the url, then load that entry and set the callbacks
	//for the next/prev buttons to load the appropriate entries.
	//Otherwise, just load the latest blog entry.

	currentContent = (requestedContent != null && requestedContent != '') ? requestedContent : latestEntry;
	setUrlToCurrentContent(currentContent);
	setContentNode(currentContent);
	setBlogNavigationButtons(currentContent);
}

//********************************************************************************************
//	setNavigationButtonEventHandlers
//		This will set all of the necessary event handlers for the 'onclick' events of different
//		navigational buttons (blog navigation and tab navigation).
//********************************************************************************************
function setNavigationButtonEventHandlers() {
	document.getElementById("prevBlogEntry").addEventListener("click", getPreviousBlogEntry);
	document.getElementById("nextBlogEntry").addEventListener("click", getNextBlogEntry);
	document.getElementById("aboutMeButton").addEventListener("click", loadAboutMe);
	document.getElementById("codeDescButton").addEventListener("click", loadAboutCode);
	document.getElementById("blogButton").addEventListener("click", loadBlogContent);

	document.getElementById("cur_date").innerHTML = new Date().getFullYear();
}

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
	var currentEntryName = parseUrlForBlogName(),
		nextEntryName = "";
	for (var i = 0; i < entriesLinkedList.length; i++) {
		if (entriesLinkedList[i].name == currentEntryName) {
			nextEntryName = entriesLinkedList[i].next_entry;
		}
	}
	if (nextEntryName != null) {
		setUrlToCurrentContent(nextEntryName);
	}
	setContentAndNavigationInfo();
}

//********************************************************************************************
// getPrevBlogEntry(evt)
//		Navigate the page to the previous blog entry in the list of entries.
//********************************************************************************************
function getPreviousBlogEntry(evt) {
	console.log('entering: getPreviousBlogEntry');
	var currentEntryName = parseUrlForBlogName(),
		prevEntryName = "";
	for (var i = 0; i < entriesLinkedList.length; i++) {
		if (entriesLinkedList[i].name == currentEntryName) {
			prevEntryName = entriesLinkedList[i].prev_entry;
		}
	}
	if (prevEntryName != null && prevEntryName != "") {
		setUrlToCurrentContent(prevEntryName);
	}
	setContentAndNavigationInfo();
}

//********************************************************************************************
// loadAboutMe
//		Sets the url to navigate to the About Me tab.
//********************************************************************************************
function loadAboutMe() {
	setUrlToCurrentContent('about_me');
	setContentAndNavigationInfo();
}

//********************************************************************************************
// loadAboutCode
//		click handler for the Code tab button. Sets the url to navigate to the Code tab.
//********************************************************************************************
function loadAboutCode() {
	setUrlToCurrentContent('about_the_code');
	setContentAndNavigationInfo();
}

//********************************************************************************************
//	loadBlogContent
//		click handler for the Blog tab button. Loads the latest blog entry.
//********************************************************************************************
function loadBlogContent() {
	setUrlToCurrentContent(latestEntry);
	setContentAndNavigationInfo();
}