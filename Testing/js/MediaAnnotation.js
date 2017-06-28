/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class MediaAnnotation {

	/**
	 * Attaches a star to a song, album or artist.
	 * @param   {object} auth     Authenticate Object.
	 * @param   {number} id       The ID of the file (song) or folder (album/artist) to star. Multiple parameters allowed.
	 * @param   {number} albumId  The ID of an album to star. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
	 * @param   {number} artistId The ID of an artist to star. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	star(auth, id, albumId, artistId) {
		var result;
		return result;
	}

	/**
	 * Removes the star from a song, album or artist.
	 * @param   {object} auth     Authenticate Object.
	 * @param   {number} id       The ID of the file (song) or folder (album/artist) to unstar. Multiple parameters allowed.
	 * @param   {number} albumId  The ID of an album to unstar. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
	 * @param   {number} artistId The ID of an artist to unstar. Use this rather than id if the client accesses the media collection according to ID3 tags rather than file structure. Multiple parameters allowed.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	unstar(auth, id, albumId, artistId) {
		var result;
		return result;
	}

	/**
	 * Sets the rating for a music file.
	 * @param   {object} auth   Authenticate Object.
	 * @param   {number} id     A string which uniquely identifies the file (song) or folder (album/artist) to rate.
	 * @param   {number} rating The rating between 1 and 5 (inclusive), or 0 to remove the rating.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	setRating(auth, id, rating) {
		var result;
		return result;
	}

	/**
	 * Registers the local playback of one or more media files. Typically used when playing media that is cached on the client. This operation includes the following: 
	 * -"Scrobbles" the media files on last.fm if the user has configured his/her last.fm credentials on the Subsonic server (Settings > Personal).
	 * -Updates the play count and last played timestamp for the media files. (Since 1.11.0)
	 * -Makes the media files appear in the "Now playing" page in the web app, and appear in the list of songs returned by getNowPlaying (Since 1.11.0)-
	 * Since 1.8.0 you may specify multiple id (and optionally time) parameters to scrobble multiple files.
	 * @param   {object}  auth       Authenticate Object.
	 * @param   {number}  id         A string which uniquely identifies the file to scrobble.
	 * @param   {number}  time       (Since 1.8.0) The time (in milliseconds since 1 Jan 1970) at which the song was listened to.
	 * @param   {boolean} submission Whether this is a "submission" or a "now playing" notification.
	 * @returns {object}  Returns an empty <subsonic-response> element on success.
	 */
	scrobble(auth, id, time, submission) {
		var result;
		return result;
	}
}
