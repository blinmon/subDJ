/* jshint -W138 */
/* TODO Complete JSDocs */
/* TODO Implement Functions */

/**
 * Returns a list of random, newest, highest rated etc. albums. Similar to the album lists on the home page of the Subsonic web interface.
 * @param {object}   auth          Authenticate object
 * @param {string}   type          The list type. Must be one of the following: random, newest, highest, frequent, recent. Since 1.8.0 you can also use alphabeticalByName or alphabeticalByArtist to page through all albums alphabetically, and starred to retrieve starred albums. Since 1.10.1 you can use byYear and byGenre to list albums in a given year range or genre.
 * @param {number}   size          = 10     The number of albums to return. Max 500.
 * @param {number}   offset        = 0    The list offset. Useful if you for example want to page through the list of newest albums.
 * @param {number}   fromYear      The first year in the range. If fromYear > toYear a reverse chronological list is returned.
 * @param {number}   toYear        The last year in the range.
 * @param {string}   genre         The name of the genre, e.g., "Rock".
 * @param {number}   musicFolderId (Since 1.11.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <albumList> element on success.
 */
function getAlbumList(auth, type, size = 10, offset = 0, fromYear, toYear, genre, musicFolderId, callback) {
    var parameters = "&type=" + type;
    if (type === "byYear") {
        parameters += "&fromYear=" + fromYear + "&toYear=" + toYear;
    }
    if (type === "genre") {
        parameters += "&genre=" + genre;
    }
    if (size !== "") {
        parameters += "&size=" + size;
    }
    if (offset !== "") {
        parameters += "&offset=" + offset;
    }
    if (musicFolderId !== "") {
        parameters += "&musicFolderId=" + musicFolderId;
    }
    getResponseNode(auth, callback, "getAlbumList", parameters);
}

/**
 * Similar to getAlbumList, but organizes music according to ID3 tags.
 * @param {object}   auth          Authenticate object
 * @param {string}   type          The list type. Must be one of the following: random, newest, frequent, recent, starred, alphabeticalByName or alphabeticalByArtist. Since 1.10.1 you can use byYear and byGenre to list albums in a given year range or genre.
 * @param {number}   size          = 10     	The number of albums to return. Max 500.
 * @param {number}   offset        = 0    	The list offset. Useful if you for example want to page through the list of newest albums.
 * @param {number}   fromYear      The first year in the range. If fromYear > toYear a reverse chronological list is returned.
 * @param {number}   toYear        The last year in the range.
 * @param {string}   genre         The name of the genre, e.g., "Rock".
 * @param {number}   musicFolderId (Since 1.12.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @param {function} callback      Returns a <subsonic-response> element with a nested <albumList2> element on success.
 */
function getAlbumList2(auth, type, size = 10, offset = 0, fromYear, toYear, genre, musicFolderId, callback) {
    var parameters = "&type=" + type;
    if (type === "byYear") {
        parameters += "&fromYear=" + fromYear + "&toYear=" + toYear;
    }
    if (type === "genre") {
        parameters += "&genre=" + genre;
    }
    if (size !== "") {
        parameters += "&size=" + size;
    }
    if (offset !== "") {
        parameters += "&offset=" + offset;
    }
    if (musicFolderId !== "") {
        parameters += "&musicFolderId=" + musicFolderId;
    }
    getResponseNode(auth, callback, "getAlbumList2", parameters);
}

/**
 * Returns random songs matching the given criteria.
 * @param   {object} auth          Authenticate object
 * @param   {number} size          = 10     The maximum number of songs to return. Max 500.
 * @param   {string} genre         Only returns songs belonging to this genre.
 * @param   {number} fromYear      Only return songs published after or in this year.
 * @param   {number} toYear        Only return songs published before or in this year.
 * @param   {number} musicFolderId Only return songs in the music folder with the given ID. See getMusicFolders.
 * @returns {object} Returns a <subsonic-response> element with a nested <randomSongs> element on success.
 */
function getRandomSongs(auth, size = 10, genre, fromYear, toYear, musicFolderId) {
    var result;
    return result;
}

/**
 * Returns songs in a given genre.
 * @param   {object} auth          Authenticate Object
 * @param   {string} genre         The genre, as returned by getGenres.
 * @param   {number} count         = 10    The maximum number of songs to return. Max 500.
 * @param   {number} offset        = 0    The offset. Useful if you want to page through the songs in a genre.
 * @param   {number} musicFolderId (Since 1.12.0) Only return albums in the music folder with the given ID. See getMusicFolders.
 * @returns {object} Returns a <subsonic-response> element with a nested <songsByGenre> element on success
 */
function getSongsByGenre(auth, genre, count = 10, offset = 0, musicFolderId) {
    var result;
    return result;
}

/**
 * Returns what is currently being played by all users. Takes no extra parameters.
 * @param   {object} auth Authenticate Object
 * @returns {object} Returns a <subsonic-response> element with a nested <nowPlaying> element on success.
 */
function getNowPlaying(auth) {
    var result;
    return result;
}

/**
 * Returns starred songs, albums and artists.
 * @param   {object} auth          Authenticate Object
 * @param   {number} musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @returns {object} Returns a <subsonic-response> element with a nested <starred> element on success.
 */
function getStarred(auth, musicFolderId) {
    var result;
    return result;
}

/**
 * Similar to getStarred, but organizes music according to ID3 tags.
 * @param   {object} auth          Authenticate Object
 * @param   {number} musicFolderId (Since 1.12.0) Only return results from the music folder with the given ID. See getMusicFolders.
 * @returns {object} Returns a <subsonic-response> element with a nested <starred2> element on success.
 */
function getStarred2(auth, musicFolderId) {
    var result;
    return result;
}
