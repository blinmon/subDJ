/* jshint -W138 */
/* globals console, XMLHttpRequest */
/* TODO Complete JSDocs */
/* TODO Implement Functions */

/**
 * Used to test connectivity with the server. Takes no extra parameters.
 * @param {object}   auth     Authenticate Object.
 * @param {function} callback The callback function.
 */
function ping(auth, callback) {
	'use strict';
	var result = null,
		call = auth.generateApiCall("ping", ""),
		xhr = new XMLHttpRequest();
	xhr.open("GET", call, true);
	xhr.send();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			callback.apply(xhr.responseXML.getElementsByTagName("subsonic-response")[0].outerHTML.valueOf());
		};
	}
}


//https://stackoverflow.com/questions/14220321/how-do-i-return-the-response-from-an-asynchronous-call?rq=1

/**
 * Get details about the software license. Takes no extra parameters. Please note that access to the REST API requires that the server has a valid license (after a 30-day trial period). To get a license key you must upgrade to Subsonic Premium.
 * @param {object} auth Authenticate Object.
 */
function getLicense(auth) {
	'use strict';
	var license = {
			valid: false,
			email: "",
			licenseExpires: "",
			trialExpires: ""
		},
		call = auth.generateApiCall("getLicense", ""),
		xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			if (!auth.getResponseStatus(xhr)) {
				auth.getErrorCode(xhr);
				console.log("[API] getLicense: License Failed to Retreive!");
			} else {
				console.log("[API] getLicense: License Retreived!");
				var xmlDoc = xhr.responseXML,
					node = xmlDoc.getElementsByTagName("license")[0];
				if (node !== null) {
					license.valid = node.attributes[0].nodeValue;
					license.email = node.attributes[1].nodeValue;
					license.licenseExpires = node.attributes[2].nodeValue;
					license.trialExpires = node.attributes[3].nodeValue;
				}
				//console.log(license);
				//return license;
			}
		}
	};
	xhr.open("GET", call, true);
	xhr.send();
}
