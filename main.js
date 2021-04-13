loadLinks();

function loadLinks() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'links.txt');
	xhr.send();
	xhr.onload = function() {
		if (xhr.status == 200) {
			let entries = parseLinks(xhr.response);
			insertEntriesInPage(entries);
			filterTagFromHash();
			window.addEventListener("hashchange", filterTagFromHash);
		}
	};
}
