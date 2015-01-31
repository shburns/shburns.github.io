/*********************************************************************************************
*	parseUrlForBlogName
*		Looks into the url for the hash-separated blog name to navigate directly to the selected
*		blog entry. This will allow for crude link-sharing/bookmarking of specific blog entries.
*********************************************************************************************/
function parseUrlForBlogName() {
	if (window.location.hash && window.location.hash.split("/")[1]) {
		return window.location.hash.split("/")[1];
	} else {
		return false;
	}
}

/********************************************************************************************
*	getLocationRoot
*		Gets the root URL for the location (basically, everything before the 'hash' delimiter)
********************************************************************************************/
function getLocationRoot() {
	return window.location.href.split('#')[0];
}

/********************************************************************************************
*	setUrlToCurrentContent
*		Sets the window.location property (the url) to the root url plus the current entry name
*@param currentContent
*		The content title to append to the root url after the hash delimiter.
*********************************************************************************************/
function setUrlToCurrentContent(currentContent) {
	window.location = getLocationRoot() + '#/' + currentContent;
}