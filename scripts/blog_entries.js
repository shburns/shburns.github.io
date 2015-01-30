//The string for the latest blog entry to be fetched on initial page load.
var latestEntry = 'on_software_ancestry',
	currentEntry = latestEntry;

/*
*	A linked list of blog entries. Since there's no support for server site request handling, the logic for
*	determining navigation between html content of individual blogs will just be appended to the list of entries
*	stored in this array. Pretty straight forward implementation though, admittedly not the most elegent
*	solution. Though, for the purposes of a lightweight, client-side-only blog, it's suitable. No sense over-engineering
*	something this simple (which will only ever be maintained by me).
*/
var entriesLinkedList = [
	{
		next_entry: null,
		prev_entry: 'on_interviews',
		name: 'on_software_ancestry'
	},
	{
		next_entry: 'on_software_ancestry',
		prev_entry: 'initial_entry',
		name: 'on_interviews'
	},
	{
		next_entry: 'on_interviews',
		prev_entry: null,
		name: 'initial_entry'
	}
];