/* TODO Complete JSDocs */
/* TODO Implement Functions */
class MediaRetrieval {

	/**
	 * Streams a given media file.
	 * @param   {object}  auth                  Authenticate Object.
	 * @param   {string}  id                    A string which uniquely identifies the file to stream. Obtained by calls to getMusicDirectory.
	 * @param   {number}  maxBitRate            (Since 1.2.0) If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If set to zero, no limit is imposed.
	 * @param   {string}  format                (Since 1.6.0) Specifies the preferred target format (e.g., "mp3" or "flv") in case there are multiple applicable transcodings. Starting with 1.9.0 you can use the special value "raw" to disable transcoding.
	 * @param   {number}  timeOffset            Only applicable to video streaming. If specified, start streaming at the given offset (in seconds) into the video. Typically used to implement video skipping.
	 * @param   {string}  size                  (Since 1.6.0) Only applicable to video streaming. Requested video size specified as WxH, for instance "640x480".
	 * @param   {boolean} estimateContentLength = false (Since 1.8.0). If set to "true", the Content-Length HTTP header will be set to an estimated value for transcoded or downsampled media.
	 * @param   {boolean} converted             = false             (Since 1.14.0) Only applicable to video streaming. Subsonic can optimize videos for streaming by converting them to MP4. If a conversion exists for the video in question, then setting this parameter to "true" will cause the converted video to be returned instead of the original.
	 * @returns {object}  Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
	 */
	stream(auth, id, maxBitRate, format, timeOffset, size, estimateContentLength = false, converted = false) {
		var result;
		return result;
	}

	/**
	 * Downloads a given media file. Similar to stream, but this method returns the original media data without transcoding or downsampling.
	 * @param   {object} auth Authenticate Object.
	 * @param   {string} id   A string which uniquely identifies the file to download. Obtained by calls to getMusicDirectory.
	 * @returns {object} Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
	 */
	download(auth, id) {
		var result;
		return result;
	}

	/**
	 * Creates an HLS (HTTP Live Streaming) playlist used for streaming video or audio. HLS is a streaming protocol implemented by Apple and works by breaking the overall stream into a sequence of small HTTP-based file downloads. It's supported by iOS and newer versions of Android. This method also supports adaptive bitrate streaming, see the bitRate parameter.
	 * @param   {object} auth       Authenticate Object.
	 * @param   {string} id         A string which uniquely identifies the media file to stream.
	 * @param   {string} bitRate    If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If this parameter is specified more than once, the server will create a variant playlist, suitable for adaptive bitrate streaming. The playlist will support streaming at all the specified bitrates. The server will automatically choose video dimensions that are suitable for the given bitrates. Since 1.9.0 you may explicitly request a certain width (480) and height (360) like so: bitRate=1000@480x360
	 * @param   {string} audioTrack The ID of the audio track to use. See getVideoInfo for how to get the list of available audio tracks for a video.
	 * @returns {object} Returns an M3U8 playlist on success (content type "application/vnd.apple.mpegurl"), or an XML document on error (in which case the HTTP content type will start with "text/xml").
	 */
	hls(auth, id, bitRate, audioTrack) {
		var result;
		return result;
	}

	/**
	 * Returns captions (subtitles) for a video. Use getVideoInfo to get a list of available captions.
	 * @param   {object} auth   Authenticate Object.
	 * @param   {number} id     The ID of the video.
	 * @param   {string} format Preferred captions format ("srt" or "vtt").
	 * @returns {object} Returns the raw video captions.
	 */
	getCaptions(auth, id, format) {
		var result;
		return result;
	}

	/**
	 * Returns a cover art image.
	 * @param   {object} auth Authenticate Object.
	 * @param   {number} id   The ID of a song, album or artist.
	 * @param   {string} size If specified, scale image to this size.
	 * @returns {object} Returns the cover art image in binary form.
	 */
	getCoverArt(auth, id, size) {
		var result;
		return result;
	}

	/**
	 * Searches for and returns lyrics for a given song.
	 * @param   {object} auth   Authenticate Object.
	 * @param   {string} artist The artist name.
	 * @param   {string} title  The song title.
	 * @returns {object} Returns a <subsonic-response> element with a nested <lyrics> element on success. The <lyrics> element is empty if no matching lyrics was found.
	 */
	getLyrics(auth, artist, title) {
		var result;
		return result;
	}

	/**
	 * Returns the avatar (personal image) for a user.
	 * @param   {object} auth     Authenticate Object.
	 * @param   {string} username The user in question.
	 * @returns {object} Returns the avatar image in binary form.
	 */
	getAvatar(auth, username) {
		var result;
		return result;
	}
}
