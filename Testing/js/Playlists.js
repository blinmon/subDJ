/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns all playlists a user is allowed to play.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username (Since 1.8.0) If specified, return playlists for this user rather than for the authenticated user. The authenticated user must have admin role if this parameter is used.
 * @param {function} callback Returns a <subsonic-response> element with a nested <playlists> element on success.
 */
function getPlaylists(auth, username, callback) {
	var parameters = null;
	if (username !== "") {
		parameters += "&username=" + username;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getPlaylists", parameters);
}

/**
 * Returns a listing of files in a saved playlist.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the playlist to return, as obtained by getPlaylists.
 * @param {function} callback Returns a <subsonic-response> element with a nested <playlist> element on success.
 */
function getPlaylist(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "getPlaylist", parameters);
}

/**
 * Creates (or updates) a playlist.
 * @param   {object} auth       Authenticate Object.
 * @param   {number} playlistId The playlist ID.
 * @param   {string} name       The human-readable name of the playlist.
 * @param   {number} songId     ID of a song in the playlist. Use one songId parameter for each song in the playlist.
 * @param {function} callback Since 1.14.0 the newly created/updated playlist is returned. In earlier versions an empty <subsonic-response> element is returned.
 */
function createPlaylist(auth, playlistId, name, songId, callback) {
	var parameters = "&name=" + name;
	if (playlistId !== "") {
		parameters += "&playlistId=" + playlistId;
	}
	if (songId !== "") {
		parameters += "&songId=" + songId;
	}
	parameters += "&";
	getResponseNode(auth, callback, "createPlaylist", parameters);
}

/**
 * Updates a playlist. Only the owner of a playlist is allowed to update it.
 * @param   {object}  auth              Authenticate Object.
 * @param   {number}  playlistId        The playlist ID.
 * @param   {string}  name              The human-readable name of the playlist.
 * @param   {string}  comment           The playlist comment.
 * @param   {boolean} publicPlaylist    true if the playlist should be visible to all users, false otherwise.
 * @param   {number}  songIdToAdd       Add this song with this ID to the playlist. Multiple parameters allowed.
 * @param   {number}  songIndexToRemove Remove the song at this position in the playlist. Multiple parameters allowed.
 * @param {function} callback  Returns an empty <subsonic-response> element on success.
 */
function updatePlaylist(auth, playlistId, name, comment, publicPlaylist, songIdToAdd, songIndexToRemove, callback) {
	var parameters = "&playlistId=" + playlistId;
	if (name !== "") {
		parameters += "&name=" + name;
	}
	if (comment !== "") {
		parameters += "&comment=" + comment;
	}
	if (publicPlaylist !== "") {
		parameters += "&publicPlaylist=" + publicPlaylist;
	}
	if (songIdToAdd !== "") {
		parameters += "&songIdToAdd=" + songIdToAdd;
	}
	if (songIndexToRemove !== "") {
		parameters += "&songIndexToRemove=" + songIndexToRemove;
	}
	parameters += "&";
	getResponseNode(auth, callback, "updatePlaylist", parameters);
}

/**
 * Deletes a saved playlist.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   ID of the playlist to delete, as obtained by getPlaylists.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deletePlaylist(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getResponseNode(auth, callback, "deletePlaylist", parameters);
}
