/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Browsing {

	/**
	 * Returns all configured top-level music folders. Takes no extra parameters.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <musicFolders> element on success
	 */
	getMusicFolders(auth) {
		var result;
		return result;
	}

	/**
	 * Returns an indexed structure of all artists.
	 * @param   {object} auth            Authenticate Object.
	 * @param   {number} musicFolderId   If specified, only return artists in the music folder with the given ID. See getMusicFolders
	 * @param   {number} ifModifiedSince o		If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).
	 * @returns {object} Returns a <subsonic-response> element with a nested <indexes> element on success.
	 */
	getIndexes(auth, musicFolderId, ifModifiedSince) {
		var result;
		return result;
	}

	/**
	 * Returns a listing of all files in a music directory. Typically used to get list of albums for an artist, or list of songs for an album.
	 * @param   {object} auth Authenticate Object.
	 * @param   {string} id   A string which uniquely identifies the music folder. Obtained by calls to getIndexes or getMusicDirectory.
	 * @returns {object} Returns a <subsonic-response> element with a nested <directory> element on success.
	 */
	getMusicDirectory(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns all genres.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <genres> element on success.
	 */
	getGenres(auth) {
		var result;
		return result;
	}

	/**
	 * Similar to getIndexes, but organizes music according to ID3 tags.
	 * @param   {object} auth          Authenticate Object.
	 * @param   {number} musicFolderId If specified, only return artists in the music folder with the given ID. See getMusicFolders.
	 * @returns {object} Returns a <subsonic-response> element with a nested <artists> element on success.
	 */
	getArtists(auth, musicFolderId) {
		var result;
		return result;
	}

	/**
	 * Returns details for an artist, including a list of albums. This method organizes music according to ID3 tags.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The artist ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <artist> element on success.
	 */
	getArtist(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns details for an album, including a list of songs. This method organizes music according to ID3 tags.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The album ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <album> element on success.
	 */
	getAlbum(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns details for a song.
	 * @param   {object} auth Auhtenticate Object.
	 * @param   {number} id   The song ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <song> element on success.
	 */
	getSong(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns all video files.
	 * @param   {object} auth Authenticate Object.
	 * @returns {object} Returns a <subsonic-response> element with a nested <videos> element on success.
	 */
	getVideos(auth) {
		var result;
		return result;
	}

	/**
	 * Returns details for a video, including information about available audio tracks, subtitles (captions) and conversions.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The video ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <videoInfo> element on success.
	 */
	getVideoInfo(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns artist info with biography, image URLs and similar artists, using data from last.fm.
	 * @param   {object}  auth              Authenticate Object.
	 * @param   {number}  id                The artist, album or song ID.
	 * @param   {number}  count             = 20                Max number of similar artists to return.
	 * @param   {boolean} includeNotPresent = false Whether to return artists that are not present in the media library.
	 * @returns {object}  Returns a <subsonic-response> element with a nested <artistInfo> element on success.
	 */
	getArtistInfo(auth, id, count = 20, includeNotPresent = false) {
		var result;
		return result;
	}

	/**
	 * Similar to getArtistInfo, but organizes music according to ID3 tags.
	 * @param   {object}  auth              Authenticate Object.
	 * @param   {number}  id                The artist ID.
	 * @param   {number}  count             = 20                Max number of similar artists to return.
	 * @param   {boolean} includeNotPresent = false Whether to return artists that are not present in the media library.
	 * @returns {object}  Returns a <subsonic-response> element with a nested <artistInfo2> element on success
	 */
	getArtistInfo2(auth, id, count = 20, includeNotPresent = false) {
		var result;
		return result;
	}

	/**
	 * Returns album notes, image URLs etc, using data from last.fm.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The album or song ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <albumInfo> element on success. 
	 */
	getAlbumInfo(auth, id) {
		var result;
		return result;
	}

	/**
	 * Similar to getAlbumInfo, but organizes music according to ID3 tags.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The album ID.
	 * @returns {object} Returns a <subsonic-response> element with a nested <albumInfo> element on success.
	 */
	getAlbumInfo2(auth, id) {
		var result;
		return result;
	}

	/**
	 * Returns a random collection of songs from the given artist and similar artists, using data from last.fm. Typically used for artist radio features.
	 * @param   {object} auth  Authenticate Object.
	 * @param   {number} id    The artist, album or song ID.
	 * @param   {number} count = 20 	Max number of songs to return.
	 * @returns {object} Returns a <subsonic-response> element with a nested <similarSongs> element on success.
	 */
	getSimilarSongs(auth, id, count = 20) {
		var result;
		return result;
	}

	/**
	 * Similar to getSimilarSongs, but organizes music according to ID3 tags.
	 * @param   {object} auth  Authenticate Object.
	 * @param   {number} id    The artist ID.
	 * @param   {number} count = 20 	Max number of songs to return.
	 * @returns {object} Returns a <subsonic-response> element with a nested <similarSongs2> element on success.
	 */
	getSimiliarSongs2(auth, id, count = 20) {
		var result;
		return result;
	}

	/**
	 * Returns top songs for the given artist, using data from last.fm.
	 * @param   {object} auth   Authenticate Object.
	 * @param   {string} artist The artist name.
	 * @param   {number} count  = 50 Max number of songs to return.
	 * @returns {object} Returns a <subsonic-response> element with a nested <topSongs> element on success. 
	 */
	getTopSongs(auth, artist, count = 50) {
		var result;
		return result;
	}
}