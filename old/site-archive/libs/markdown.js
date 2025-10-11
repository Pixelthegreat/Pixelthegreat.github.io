/* markdown parser i guess (this is absolutely terrible i am just tired right now) */

/* todo: add support for links */

function markdown2html(markdown) {

	var html = '';
	var list = markdown.split('\n');
	
	for (index in list) {

		var line = list[index];
		
		/* header */
		if (line.startsWith('###')) {

			html += '<h4>' + line.slice(1).slice(1).slice(1) + '</h4>';
		}
		else if (line.startsWith('##')) {

			html += '<h3>' + line.slice(1).slice(1) + '</h3>';
		}
		else if (line.startsWith('#')) {

			html += '<h2>' + line.slice(1) + '</h2>';
		}
		else {

			if (html.endsWith('</h4>') || html.endsWith('</h3>') || html.endsWith('</h2>') || html.length == 0) {
				
				html += line;
			} else {

				html += '<br>' + line;
			}
		}
	}
	
	return html;
}
