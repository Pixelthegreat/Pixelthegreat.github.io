/* main script for loading image data into music.html */
const albums = {
	'showbiz': {'name': 'Showbiz', 'band': 'Muse'},
	'originofsymmetry': {'name': 'Origin of Symmetry', 'band': 'Muse'},
	'theresistance': {'name': 'The Resistance', 'band': 'Muse'},
	'thebends': {'name': 'The Bends', 'band': 'Radiohead'},
	'okcomputer': {'name': 'OK Computer', 'band': 'Radiohead'},
	'inrainbows': {'name': 'In Rainbows', 'band': 'Radiohead'},
	'allweknowisfalling': {'name': 'All We Know Is Falling', 'band': 'Paramore'},
	'brandneweyes': {'name': 'Brand New Eyes', 'band': 'Paramore'},
	'fanfavoritessofar': {'name': 'Fan Favorites So Far', 'band': 'Wendy Ip'},
	'adifferentkindoflife': {'name': 'A Different Kind of Life', 'band': 'Wendy Ip'},
	'theipep': {'name': 'The Ip EP', 'band': 'Wendy Ip'},
	'acoustics': {'name': 'Acoustics EP', 'band': 'Yvette Young'},
	'currents': {'name': 'Currents', 'band': 'Covet'},
	'marvins': {'name': 'Marvin\'s Marvelous Mechanical Museum', 'band': 'Tally Hall'},
	'goodandevil': {'name': 'Good & Evil', 'band': 'Tally Hall'},
	'hawaiipartii': {'name': 'Hawaii: Part II', 'band': 'Miracle Musical'},
	'joehawleyjoehawley': {'name': 'Joe Hawley Joe Hawley', 'band': 'Joe Hawley'},
	'thefamilyjewels': {'name': 'The Family Jewels', 'band': 'MARINA'},
};

/* get element */
const elem_albums = document.getElementById('albums');
const elem_popup = document.getElementById('popup');

/* open popup */
function popup_open(name) {
	elem_popup.style.height = '100%';
	elem_popup.innerHTML = '<br><a href="javascript:void(0)" onclick="popup_close()">close</a><br><br><img style="width: 20%; border-radius: 10%;" src="images/music/albums/' + name + '.png"/><h3>' + albums[name]['name'] + '</h3>by <i>' + albums[name]['band'] + '</i>';
}

/* close popup */
function popup_close() {

	elem_popup.style.height = '0';
}

/* set text */
var text = '';

for (key in albums) {

	/* set image */
	text += '<div onclick="popup_open(\'' + key + '\')"><img src="images/music/albums/' + key + '.png"/></div>';
}

elem_albums.innerHTML = text;
