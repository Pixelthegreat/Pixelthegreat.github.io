const elem_album_info = document.getElementById('album-info');

/* album information */
const album_info = {
	'ep-01': {'name': 'Autumn EP', 'date': 'September 1st, 2022'},
	'ep-02': {'name': 'on the other side of the unknown', 'date': 'October 27th, 2022'},
	'lp-01': {'name': 'NULL', 'date': 'November 24th, 2022'}
};

/* parse url */
const url = new URL(window.location.href);

const album_id = url.searchParams.get('id');

/* stuff */
if (album_id in album_info) {

	elem_album_info.innerHTML = '<img style="width: 50%; border 1px solid #999; border-radius: 5%;" src="' + album_id + '.png"/><b><br>' + album_info[album_id]['name'] + '</b><br><i>' + album_info[album_id]['date'] + '</i>';
}
