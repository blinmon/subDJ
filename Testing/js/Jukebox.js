/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */
class Jukebox {

	/**
	 * Controls the jukebox, i.e., playback directly on the server's audio hardware. Note: The user must be authorized to control the jukebox (see Settings > Users > User is allowed to play files in jukebox mode).
	 * @param   {object} auth   Authenticate Object.
	 * @param   {string} action The operation to perform. Must be one of: get, status (since 1.7.0), set (since 1.7.0), start, stop, skip, add, clear, remove, shuffle, setGain
	 * @param   {number} index  Used by skip and remove. Zero-based index of the song to skip to or remove.
	 * @param   {number} offset (Since 1.7.0) Used by skip. Start playing this many seconds into the track.
	 * @param   {number} id     Used by add and set. ID of song to add to the jukebox playlist. Use multiple id parameters to add many songs in the same request. (set is similar to a clear followed by a add, but will not change the currently playing track.)
	 * @param   {number} gain   Used by setGain to control the playback volume. A float value between 0.0 and 1.0.
	 * @returns {object} Returns a <jukeboxStatus> element on success, unless the get action is used, in which case a nested <jukeboxPlaylist> element is returned. 
	 */
	jukeboxControl(auth, action, index, offset, id, gain) {
		var result;
		return result;
	}
}
