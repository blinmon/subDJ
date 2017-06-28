/* jshint -W138 */
/* globals console, XMLHttpRequest */
/* TODO [x] Complete JSDocs */
/* TODO [x] Implement Functions */

/**
 * Used to test connectivity with the server. Takes no extra parameters.
 * @param {object}   auth     The authenticate object.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function ping(auth, callback) {
    getResponseNode(auth, callback, "ping", "");
}

/**
 * Get details about the software license. Takes no extra parameters. Please note that access to the REST API requires that the server has a valid license (after a 30-day trial period). To get a license key you must upgrade to Subsonic Premium.
 * @param {object}   auth     The authenticate object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <license> element on success.
 */
function getLicense(auth, callback) {
    getResponseNode(auth, callback, "getLicense", "");
}
