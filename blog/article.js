/* constants */
const day_endings = [
	'th',
	'st',
	'nd',
	'rd',
	'th',
	'th',
	'th',
	'th',
	'th',
	'th',
];

/* get elements */
const elem_undefined = document.getElementById('undefined');
const elem_contents = document.getElementById('contents');

/* get url parameters */
const url = new URL(window.location.href);

const year = url.searchParams.get('y');
const month = url.searchParams.get('m');
const day = url.searchParams.get('d');

/* formal title */
const formal_title = month + ' ' + day + day_endings[day.charAt(day.length - 1)] + ', ' + year + ': ' + article_list[year][month][day];

console.log(formal_title);

/* load file */
const path = 'year/' + year + '/' + month + '/' + day + '.md';

console.log(path);

$(function() {
	$('#undefined').load(path, '', function (res, st) {
		/* error */
		if (st == 'error') { alert('Failed to load article \'' + formal_title + '\''); }

		else {

			/* convert basic "markdown" to html */
			let html = markdown2html(elem_undefined.innerHTML);
			elem_contents.innerHTML = '<h2>' + formal_title + '</h2>' + html;
		}
	});
});
