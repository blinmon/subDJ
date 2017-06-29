/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Searching.js */

/**
 * Deprecated since 1.4.0, use search2 instead.
 * Returns a listing of files matching the given search criteria. Supports paging through the result.
 * @param {object}   auth      Authenticate Object.
 * @param {string}   artist    Artist to search for.
 * @param {string}   album     Album to searh for.
 * @param {string}   title     Song title to search for.
 * @param {boolean}  any       Searches all fields.
 * @param {number}   count     = 20 Maximum number of results to return.
 * @param {number}   offset    = 0 Search result offset. Used for paging.
 * @param {number}   newerThan Only return matches that are newer than this. Given as milliseconds since 1970.
 * @param {function} callback  Returns a <subsonic-response> element with a nested <searchResult> element on success.
 */
function search(auth, artist, album, title, any, count = 20, offset = 0, newerThan, callback) {
	var parameters = null;
	if (artist !== "") {
		parameters += "&artist=" + artist;
	}
	if (album !== "") {
		parameters += "&album=" + album;
	}
	if (title !== "") {
		parameters += "&title=" + title;
	}
	if (any !== "") {
		parameters += "&any=" + any;
	}
	if (count !== "") {
		parameters += "&count=" + count;
	}
	if (offset !== "") {
		parameters += "&offset=" + offset;
	}
	if (newerThan !== "") {
		parameters += "&newerThan=" + newerThan;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search", parameters);
}

/**
 * Returns albums, artists and songs matching the given search criteria. Supports paging through the result.
 * @param   {object}   auth          Authenticate Object.
 * @param   {string}   query         Search query.
 * @param   {number}   artistCount   = 20 	Maximum number of artists to return.
 * @param   {number}   artistOffset  = 0 Search result offset for artists. Used for paging.
 * @param   {number}   albumCount    = 20  	Maximum number of albums to return.
 * @param   {number}   albumOffset   = 0  Search result offset for albums. Used for paging.
 * @param   {number}   songCount     = 20   Maximum number of songs to return.
 * @param   {number}   songOffset    = 0   	Search result offset for songs. Used for paging.
 * @param   {number}   musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @param {function} callback	      Returns a <subsonic-response> element with a nested <searchResult2> element on success. 
 */
function search2(auth, query, artistCount = 20, artistOffset = 0, albumCount = 20, albumOffset = 0, songCount = 20, songOffset = 0, musicFolderId, callback) {
	var parameters = "&query=" + query;
	if (artistCount !== "") {
		parameters += "&artistCount=" + artistCount;
	}
	if (artistOffset !== "") {
		parameters += "&artistOffset=" + artistOffset;
	}
	if (albumCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (albumOffset !== "") {
		parameters += "&albumOffset=" + albumOffset;
	}
	if (songCount !== "") {
		parameters += "&songCount=" + songCount;
	}
	if (songOffset !== "") {
		parameters += "&songOffset=" + songOffset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search2", parameters);
}

/**
 * Similar to search2, but organizes music according to ID3 tags.
 * @param   {object} auth          Authenticate Object.
 * @param   {string} query         Search query.
 * @param   {number} artistCount   = 20 	Maximum number of artists to return.
 * @param   {number} artistOffset  = 0 Search result offset for artists. Used for paging.
 * @param   {number} albumCount    = 20  	Maximum number of albums to return.
 * @param   {number} albumOffset   = 0  Search result offset for albums. Used for paging.
 * @param   {number} songCount     = 20   	Maximum number of songs to return.
 * @param   {number} songOffset    = 0   	Search result offset for songs. Used for paging.
 * @param   {number} musicFolderId (Since 1.12.0) Only return results from music folder with the given ID. See getMusicFolders.
 * @param {function} callback Returns a <subsonic-response> element with a nested <searchResult3> element on success. 
 */
function search3(auth, query, artistCount = 20, artistOffset = 0, albumCount = 20, albumOffset = 0, songCount = 20, songOffset = 0, musicFolderId, callback) {
	var parameters = "&query=" + query;
	if (artistCount !== "") {
		parameters += "&artistCount=" + artistCount;
	}
	if (artistOffset !== "") {
		parameters += "&artistOffset=" + artistOffset;
	}
	if (albumCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (albumOffset !== "") {
		parameters += "&albumOffset=" + albumOffset;
	}
	if (songCount !== "") {
		parameters += "&albumCount=" + albumCount;
	}
	if (songOffset !== "") {
		parameters += "&songOffset=" + songOffset;
	}
	if (musicFolderId !== "") {
		parameters += "&musicFolderId=" + musicFolderId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "search3", parameters);
}
