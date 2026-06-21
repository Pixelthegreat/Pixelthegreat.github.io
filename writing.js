const elem_section_list = document.getElementById('section-list');
const elem_section_area = document.getElementById('section-area');
const elem_section_area_paragraph = document.getElementById('section-area-paragraph');

const sections = {
	'fiction': 'Fiction',
	'folklore': 'Folklore',
	'music': 'Music',
	'pitches': 'Pitches',
	'programming': 'Programming',
};

/* Build section list */
let section_list_html = '<ul>';

for (section in sections) {

	var proper_name = sections[section];

	section_list_html += `<li><a href="writing.html?page=${section}/index">${proper_name}</a></li>`;
}

section_list_html += '</ul>';

elem_section_list.innerHTML = section_list_html;

/* Determine page to load */
const url_params = new URLSearchParams(window.location.search);
const page = url_params.get('page');

/* Load markdown page */
if (page !== null) {

	var request = new XMLHttpRequest();

	request.addEventListener('load', () => {
		elem_section_area_paragraph.innerHTML = marked.parse(request.responseText);
	});
	request.open('GET', `writing/${page}.md`);
	request.send();
}
