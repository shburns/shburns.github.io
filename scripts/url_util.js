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

/*******************************************************************************************
*	setUrlForCurrentBlogEntry
*		Sets the url for the site for the blog entry to allow
*		for direct navigation to a specific blog entry for link-sharing.
******************************************************************************************/
function setUrlToCurrentBlogTitle(currentBlogEntry) {
	//Only append the blog title if the url doesn't already contain it.
	if (!window.location.hash || window.location.hash.split('/').length <= 1) {
		window.location = window.location + "#/" + currentBlogEntry;
	}
}