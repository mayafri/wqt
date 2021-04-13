function parseLinks(file_content) {
	let entries_array_of_lines = file_content.split('\n\n');
	let entries_array_of_dict = [];
	
	entries_array_of_lines.forEach(
		function(entry_as_lines) {
			let entry = parseEntryAsDict(entry_as_lines);
			entries_array_of_dict.push(entry);
		}
	);

	return entries_array_of_dict;
}

function parseEntryAsDict(entry_as_lines) {
	entry_as_array = entry_as_lines.split('\n');
	entry_as_dict = {
		'date': entry_as_array[0],
		'title': entry_as_array[1],
		'url': entry_as_array[2]
	}
	if(entry_as_array[3] != undefined) {
		entry_as_dict['tags'] = parseTagsAsArray(entry_as_array[3]);
	}
	return entry_as_dict;
}

function parseTagsAsArray(tags) {
	return tags.split(' ');
}
