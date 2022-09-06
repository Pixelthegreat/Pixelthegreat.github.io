/* main script for loading image data into music.html */
const albums = {
	'showbiz': {'name': 'Showbiz', 'band': 'Muse', 'band-lower': 'muse'},
	'originofsymmetry': {'name': 'Origin of Symmetry', 'band': 'Muse', 'band-lower': 'muse'},
	'theresistance': {'name': 'The Resistance', 'band': 'Muse', 'band-lower': 'muse'},
	'thebends': {'name': 'The Bends', 'band': 'Radiohead', 'band-lower': 'radiohead'},
	'okcomputer': {'name': 'OK Computer', 'band': 'Radiohead', 'band-lower': 'radiohead'},
	'inrainbows': {'name': 'In Rainbows', 'band': 'Radiohead', 'band-lower': 'radiohead'},
	'allweknowisfalling': {'name': 'All We Know Is Falling', 'band': 'Paramore', 'band-lower': 'paramore'},
	'brandneweyes': {'name': 'Brand New Eyes', 'band': 'Paramore', 'band-lower': 'paramore'},
	'fanfavoritessofar': {'name': 'Fan Favorites So Far', 'band': 'Wendy Ip', 'band-lower': 'wendyip'},
	'adifferentkindoflife': {'name': 'A Different Kind of Life', 'band': 'Wendy Ip', 'band-lower': 'wendyip'},
	'theipep': {'name': 'The Ip EP', 'band': 'Wendy Ip', 'band-lower': 'wendyip'},
	'acoustics': {'name': 'Acoustics EP', 'band': 'Yvette Young', 'band-lower': 'yvetteyoung'},
	'currents': {'name': 'Currents', 'band': 'Covet', 'band-lower': 'covet'},
	'marvins': {'name': 'Marvin\'s Marvelous Mechanical Museum', 'band': 'Tally Hall', 'band-lower': 'tallyhall'},
	'goodandevil': {'name': 'Good & Evil', 'band': 'Tally Hall', 'band-lower': 'tallyhall'},
	'hawaiipartii': {'name': 'Hawaii: Part II', 'band': 'Miracle Musical', 'band-lower': 'miraclemusical'},
	'joehawleyjoehawley': {'name': 'Joe Hawley Joe Hawley', 'band': 'Joe Hawley', 'band-lower': 'joehawley'},
	'thefamilyjewels': {'name': 'The Family Jewels', 'band': 'MARINA', 'band-lower': 'marina'},
};

/* get element */
const elem_albums = document.getElementById('albums');
const elem_popup = document.getElementById('popup');

/* open popup */
function popup_open(name) {
	elem_popup.style.height = '100%';
	elem_popup.innerHTML = '<br><a href="javascript:void(0)" onclick="popup_close()">close</a><br><br><img style="width: 20%; border-radius: 10%;" src="images/music/albums/' + name + '.png"/><h3>' + albums[name]['name'] + '</h3>by <a href="music/' + albums[name]['band-lower'] + '.html"><i>' + albums[name]['band'] + '</i></a>';
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
