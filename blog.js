/* elements */
const elem_popups = document.getElementById('popups');

var i = 0;
var string = '';

/* years */
for (year in article_list) {

	string += '<h2>' + year + '</h2>';
	
	/* months */
	for (month in article_list[year]) {

		string += '<h3>' + month + '</h3><a id="popup-button-' + i + '" href="javascript:void(0)" onclick="popup_open(' + i + ')">show</a><br><br><div class="popup" id="popup-' + i + '">';
		for (day in article_list[year][month]) {

			string += '<a href="article.html?y=' + year + '&m=' + month + '&d=' + day + '">' + day + '-' + month + '-' + year + ': ' + article_list[year][month][day] + '</a><br>';
		}
		string += '</div>';
		i += 1;
	}
}

/* set text */
elem_popups.innerHTML = string;

/* open popup */
function popup_open(i) {

	var elem_popup = document.getElementById('popup-' + i);
	var elem_popup_button = document.getElementById('popup-button-' + i);

	/* open */
	if (elem_popup.style.maxHeight) {

		elem_popup.style.maxHeight = null;
		elem_popup_button.innerHTML = 'show';
	}
	
	/* closed */
	else {

		elem_popup.style.maxHeight = elem_popup.scrollHeight + 'px';
		elem_popup_button.innerHTML = 'hide';
	}
}
