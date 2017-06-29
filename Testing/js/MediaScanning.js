/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Returns the current status for media library scanning. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <scanStatus> element on success.
 */
function getScanStatus(auth, callback) {
	getResponseNode(auth, callback, "getScanStatus", "");
}

/**
 * Initiates a rescan of the media libraries. Takes no extra parameters.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <scanStatus> element on success.
 */
function startScan(auth, callback) {
	getResponseNode(auth, callback, "startScan", "");
}
