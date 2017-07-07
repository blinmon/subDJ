/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */
/* FIXME Return proper streams instead of xml response. */

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
 * @param {function} callback  Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function stream(auth, id, maxBitRate, format, timeOffset, size, estimateContentLength = false, converted = false, callback) {
	var parameters = "&id=" + id;
	if (maxBitRate !== "") {
		parameters += "&maxBitRate=" + maxBitRate;
	}
	if (format !== "") {
		parameters += "&format=" + format;
	}
	if (timeOffset !== "") {
		parameters += "&timeOffset=" + timeOffset;
	}
	if (size !== "") {
		parameters += "&size=" + size;
	}
	if (estimateContentLength !== "") {
		parameters += "&estimateContentLength=" + estimateContentLength;
	}
	if (converted !== "") {
		parameters += "&converted=" + converted;
	}
	parameters += "&";
	//getResponseNode(auth, callback, "stream", parameters);
	getDownload(auth, callback, "stream", parameters);
}

/**
 * Downloads a given media file. Similar to stream, but this method returns the original media data without transcoding or downsampling.
 * @param   {object} auth Authenticate Object.
 * @param   {string} id   A string which uniquely identifies the file to download. Obtained by calls to getMusicDirectory.
 * @param {function} callback Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function download(auth, id, callback) {
	var parameters = "&id=" + id + "&";
	getDownload(auth, callback, "download", parameters);
}

/**
 * Creates an HLS (HTTP Live Streaming) playlist used for streaming video or audio. HLS is a streaming protocol implemented by Apple and works by breaking the overall stream into a sequence of small HTTP-based file downloads. It's supported by iOS and newer versions of Android. This method also supports adaptive bitrate streaming, see the bitRate parameter.
 * @param   {object} auth       Authenticate Object.
 * @param   {string} id         A string which uniquely identifies the media file to stream.
 * @param   {string} bitRate    If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If this parameter is specified more than once, the server will create a variant playlist, suitable for adaptive bitrate streaming. The playlist will support streaming at all the specified bitrates. The server will automatically choose video dimensions that are suitable for the given bitrates. Since 1.9.0 you may explicitly request a certain width (480) and height (360) like so: bitRate=1000@480x360
 * @param   {string} audioTrack The ID of the audio track to use. See getVideoInfo for how to get the list of available audio tracks for a video.
 * @param {function} callback Returns an M3U8 playlist on success (content type "application/vnd.apple.mpegurl"), or an XML document on error (in which case the HTTP content type will start with "text/xml").
 */
function hls(auth, id, bitRate, audioTrack, callback) {
	var parameters = "&id=" + id;
	if (bitRate !== "") {
		parameters += "&bitRate=" + bitRate;
	}
	if (audioTrack !== "") {
		parameters += "&audioTrack=" + audioTrack;
	}
	parameters += "&";
	getResponseNode(auth, callback, "hls", parameters);
}

/**
 * Returns captions (subtitles) for a video. Use getVideoInfo to get a list of available captions.
 * @param   {object} auth   Authenticate Object.
 * @param   {number} id     The ID of the video.
 * @param   {string} format Preferred captions format ("srt" or "vtt").
 * @param {function} callback Returns the raw video captions.
 */
function getCaptions(auth, id, format, callback) {
	var parameters = "&id=" + id;
	if (format !== "") {
		parameters += "&format=" + format;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getCaptions", parameters);
}

/**
 * Returns a cover art image.
 * @param   {object} auth Authenticate Object.
 * @param   {number} id   The ID of a song, album or artist.
 * @param   {string} size If specified, scale image to this size.
 * @param {function} callback Returns the cover art image in binary form.
 */
function getCoverArt(auth, id, size, callback) {
	var parameters = "&id=" + id;
	if (size !== "") {
		parameters += "&size=" + size;
	}
	parameters += "&";
	getDownload(auth, callback, "getCoverArt", parameters);
}

/**
 * Searches for and returns lyrics for a given song.
 * @param   {object} auth   Authenticate Object.
 * @param   {string} artist The artist name.
 * @param   {string} title  The song title.
 * @param {function} callback Returns a <subsonic-response> element with a nested <lyrics> element on success. The <lyrics> element is empty if no matching lyrics was found.
 */
function getLyrics(auth, artist, title, callback) {
	var parameters = null;
	if (artist !== "") {
		parameters += "&artist=" + artist;
	}
	if (title !== "") {
		parameters += "&title=" + title;
	}
	parameters += "&";
	getResponseNode(auth, callback, "getLyrics", parameters);
}

/**
 * Returns the avatar (personal image) for a user.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username The user in question.
 * @param {function} callback Returns the avatar image in binary form.
 */
function getAvatar(auth, username, callback) {
	var parameters = "&username=" + username + "&";
	getDownload(auth, callback, "getAvatar", parameters);
}
