/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Playlists {

	/**
	 * Returns all playlists a user is allowed to play.
	 * @param   {object} auth     Authenticate Object.
	 * @param   {string} username (Since 1.8.0) If specified, return playlists for this user rather than for the authenticated user. The authenticated user must have admin role if this parameter is used.
	 * @returns {object} Returns a <subsonic-response> element with a nested <playlists> element on success.
	 */
	getPlaylists(auth, username) {
		var result;
		return result;
	}

	/**
	 * Returns a listing of files in a saved playlist.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   ID of the playlist to return, as obtained by getPlaylists.
	 * @returns {object} Returns a <subsonic-response> element with a nested <playlist> element on success.
	 */
	getPlaylist(auth, id) {
		var result;
		return result;
	}

	/**
	 * Creates (or updates) a playlist.
	 * @param   {object} auth       Authenticate Object.
	 * @param   {number} playlistId The playlist ID.
	 * @param   {string} name       The human-readable name of the playlist.
	 * @param   {number} songId     ID of a song in the playlist. Use one songId parameter for each song in the playlist.
	 * @returns {object} Since 1.14.0 the newly created/updated playlist is returned. In earlier versions an empty <subsonic-response> element is returned.
	 */
	createPlaylist(auth, playlistId, name, songId) {
		var result;
		return result;
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
	 * @returns {object}  Returns an empty <subsonic-response> element on success.
	 */
	updatePlaylist(auth, playlistId, name, comment, publicPlaylist, songIdToAdd, songIndexToRemove) {
		var result;
		return result;
	}

	/**
	 * Deletes a saved playlist.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   ID of the playlist to delete, as obtained by getPlaylists.
	 * @returns {object} Returns an empty <subsonic-response> element on success.
	 */
	deletePlaylist(auth, id) {
		var result;
		return result;
	}
}
