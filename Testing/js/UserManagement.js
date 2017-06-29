/* jshint -W138 */
/* TODO [x] Complete JSDocs */
/* TODO [] Implement Functions */

/**
 * Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username The name of the user to retrieve. You can only retrieve your own user unless you have admin privileges.
 * @param {function} callback Returns a <subsonic-response> element with a nested <user> element on success.
 */
function getUser(auth, username, callback) {}

/**
 * Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.
 * @param   {object} auth Authenticate Object.
 * @param {function} callback Returns a <subsonic-response> element with a nested <users> element on success.
 */
function getUsers(auth, callback) {}

/**
 * Creates a new Subsonic user, using the following parameters:
 * @param   {object}  auth                Authenticate Object.
 * @param   {string}  username            The name of the new user.
 * @param   {string}  password            The password of the new user, either in clear text of hex-encoded (see above).
 * @param   {string}  email               The email address of the new user.
 * @param   {boolean} ldapAuthenticated   = false   Whether the user is authenicated in LDAP.
 * @param   {boolean} adminRole           = false           Whether the user is administrator.
 * @param   {boolean} settingsRole        = true         Whether the user is allowed to change personal settings and password.
 * @param   {boolean} streamRole          = true           Whether the user is allowed to play files.
 * @param   {boolean} jukeboxRole         = false         Whether the user is allowed to play files in jukebox mode.
 * @param   {boolean} downloadRole        = false        	Whether the user is allowed to download files.
 * @param   {boolean} uploadRole          = false          	Whether the user is allowed to upload files.
 * @param   {boolean} playlistRole        = false        Whether the user is allowed to create and delete playlists. Since 1.8.0, changing this role has no effect.
 * @param   {boolean} coverArtRole        = false        	Whether the user is allowed to change cover art and tags.
 * @param   {boolean} commentRole         = false         Whether the user is allowed to create and edit comments and ratings.
 * @param   {boolean} podcastRole         = false         Whether the user is allowed to administrate Podcasts.
 * @param   {boolean} shareRole           = false           	(Since 1.8.0) Whether the user is allowed to share files with anyone.
 * @param   {boolean} videoConversionRole = false (Since 1.15.0) Whether the user is allowed to start video conversions.
 * @param   {number}  musicFolderId       (Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.
 * @param {function} callback  Returns an empty <subsonic-response> element on success.
 */
function createUser(auth, username, password, email, ldapAuthenticated = false, adminRole = false, settingsRole = true, streamRole = true, jukeboxRole = false, downloadRole = false, uploadRole = false, playlistRole = false, coverArtRole = false, commentRole = false, podcastRole = false, shareRole = false, videoConversionRole = false, musicFolderId, callback) {}

/**
 * Modifies an existing Subsonic user, using the following parameters:
 * @param   {object}  auth                Authenticate Object.
 * @param   {string}  username            The name of the user.
 * @param   {string}  password            The password of the user, either in clear text of hex-encoded (see above).
 * @param   {string}  email               The email address of the user.
 * @param   {boolean} ldapAuthenticate    Whether the user is authenicated in LDAP.
 * @param   {boolean} adminRole           Whether the user is administrator.
 * @param   {boolean} settingsRole        Whether the user is allowed to change personal settings and password.
 * @param   {boolean} streamRole          Whether the user is allowed to play files.
 * @param   {boolean} jukeboxRole         Whether the user is allowed to play files in jukebox mode.
 * @param   {boolean} downloadRole        Whether the user is allowed to download files.
 * @param   {boolean} uploadRole          Whether the user is allowed to upload files.
 * @param   {boolean} coverArtRole        Whether the user is allowed to change cover art and tags.
 * @param   {boolean} commentRole         Whether the user is allowed to create and edit comments and ratings.
 * @param   {boolean} podcastRole         Whether the user is allowed to administrate Podcasts.
 * @param   {boolean} shareRole           Whether the user is allowed to share files with anyone.
 * @param   {boolean} videoConversionRole (Since 1.15.0) Whether the user is allowed to start video conversions.
 * @param   {number}  musicFolderId       (Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.
 * @param   {number}  maxBitRate          (Since 1.13.0) The maximum bit rate (in Kbps) for the user. Audio streams of higher bit rates are automatically downsampled to this bit rate. Legal values: 0 (no limit), 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320.
 * @param {function} callback  Returns an empty <subsonic-response> element on success.
 */
function updateUser(auth, username, password, email, ldapAuthenticate, adminRole, settingsRole, streamRole, jukeboxRole, downloadRole, uploadRole, coverArtRole, commentRole, podcastRole, shareRole, videoConversionRole, musicFolderId, maxBitRate, callback) {}

/**
 * Deletes an existing Subsonic user, using the following parameters:
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username The name of the user to delete.
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function deleteUser(auth, username, callback) {}

/**
 * Changes the password of an existing Subsonic user, using the following parameters. You can only change your own password unless you have admin privileges.
 * @param   {object} auth     Authenticate Object.
 * @param   {string} username The name of the user which should change its password.
 * @param   {string} password The new password of the new user, either in clear text of hex-encoded (see above).
 * @param {function} callback Returns an empty <subsonic-response> element on success.
 */
function changePassword(auth, username, password, callback) {}
