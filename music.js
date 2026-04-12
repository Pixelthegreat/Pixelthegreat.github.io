const elem_kator_fm_title = document.getElementById('kator-fm-title');
const elem_kator_fm_embed = document.getElementById('kator-fm-embed');

const kator_fm_tracks = [
	'dan-staniels',
	'nightingale-rag',
	'fiddler',
	'michael-1',
	'really-sharp',
	'its-cold-in-the-middle-of-june',
];

const kator_fm_names = {
	'dan-staniels': 'Dan Staniels',
	'nightingale-rag': 'Nightingale Rag',
	'fiddler': 'Fiddler',
	'michael-1': 'Michael #1',
	'really-sharp': 'Really Sharp',
	'its-cold-in-the-middle-of-june': 'It\'s Cold in the Middle of June?',
};

const kator_fm_iframes = {
	'dan-staniels': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3119638084/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/track/dan-staniels">Dan Staniels by kator</a></iframe>',
	'nightingale-rag': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2789975114/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/track=2677916560/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/album/gregor">Gregor by kator</a></iframe>',
	'fiddler': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2789975114/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/track=3991376375/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/album/gregor">Gregor by kator</a></iframe>',
	'michael-1': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=3829756370/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/track/michael-1">Michael #1 by kator</a></iframe>',
	'really-sharp': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2857735594/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/track=2825956668/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/album/joe">Joe by kator</a></iframe>',
	'its-cold-in-the-middle-of-june': '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2857735594/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/track=4294645635/transparent=true/" seamless><a href="https://katormusic.bandcamp.com/album/joe">Joe by kator</a></iframe>',
};

/* embed bandcamp track */
var index = Math.floor(Math.random() * kator_fm_tracks.length);
var track = kator_fm_tracks[index];

elem_kator_fm_embed.innerHTML = kator_fm_iframes[track];

/* update title text */
var kator_fm_title_index = 0;
var kator_fm_title = 'You\'re listening to ' + kator_fm_names[track] + ' ';

function updateKatorFMTitle() {

	let text = '[kator.fm -&nbsp;';

	for (let i = 0; i < 16; i++) {
		text += kator_fm_title[(kator_fm_title_index + i) % kator_fm_title.length];
	}

	text += ']';

	elem_kator_fm_title.innerHTML = text;
	kator_fm_title_index++;
}

updateKatorFMTitle();
setInterval(updateKatorFMTitle, 500);
