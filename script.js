// =========================
// Music Vault
// =========================

let songs = [];

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", init);

async function init() {

    await loadSongs();

    renderSongs();

}

async function loadSongs() {

    try {

        const response = await fetch("songs.json");

        songs = await response.json();

        console.log("Songs Loaded:", songs);

    }

    catch(error){

        console.error(error);

    }

}
