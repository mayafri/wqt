function insertEntriesInPage(entries_array_of_dict) {
	let dom_linkblock_model = document.querySelector(".linkblock");
	entries_array_of_dict.sort(sortEntriesByDateDesc);

	entries_array_of_dict.forEach(
		function(entry_dict) {
			let dom_linkblock = cloneDomElemFromModel(dom_linkblock_model);
			insertEntryInDiv(dom_linkblock, entry_dict);
		}
	);

	dom_linkblock_model.parentNode.removeChild(dom_linkblock_model);
}

function sortEntriesByDateDesc(entry_a, entry_b) {
	let date_a = entry_a['date'];
	let date_b = entry_b['date'];

	if(date_a < date_b) {
		return 1;
	}
	else if(date_a > date_b) {
		return -1;
	}
	else {
		return 0;
	}
}

function cloneDomElemFromModel(dom_model) {
	let dom_clone = dom_model.cloneNode(true);
	dom_model.before(dom_clone);
	dom_model.before(' ');
	return dom_clone;
}

function insertEntryInDiv(div, entry) {
	let dom_date_p = div.querySelector(".date");
	let dom_title_a = div.querySelector(".title a");
	let dom_url_p = div.querySelector(".url");

	dom_date_p.innerHTML = entry['date'];
	dom_title_a.innerHTML = entry['title'];
	dom_title_a.href = entry['url'];
	dom_url_p.innerHTML = entry['url'];

	if(entry['tags'] != undefined) {
		addClassesForTags(div, entry['tags']);
		insertTagsLinksInDiv(div, entry['tags']);
	}

}

function addClassesForTags(div, tags) {
	tags.forEach(
		function(tag) {
			div.classList.add('tag-' + tag);
		}
	);
}

function insertTagsLinksInDiv(div, tags) {
	let dom_tag_a_model = div.querySelector(".tags a");

	tags.forEach(
		function(tag) {
			let dom_tag_a = cloneDomElemFromModel(dom_tag_a_model);
			insertTagInA(dom_tag_a, tag);
		}
	);

	dom_tag_a_model.parentNode.removeChild(dom_tag_a_model);
}

function insertTagInA(a, tag) {
	a.innerHTML = tag;
	a.href = '#' + tag;
}
