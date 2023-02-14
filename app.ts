import {Artist} from "./Artist";
import {User} from "./User";
import {Song} from "./Song";
import {Album} from "./Album";
import {Playlist} from "./Playlist";
import {LocalImporter} from "./LocalImporter";
import {PlaylistImporter} from "./PlaylistImporter";

let artist = new Artist("Muse");
let album = new Album("The 2nd Law", artist, 2012);
let song = new Song("Madness");

let playlist = new Playlist("Fun songs");
playlist.adddAlbum(album);

let localPlaylistImporter = new PlaylistImporter(
    new LocalImporter(myPlaylist.txt)
);

let cloudPlaylistImporter = new PlaylistImporter(
    new CloudImporter("www.youtube.com")
);

let localPlatlist = localPlaylistImporter.importPlaylist();
let cloudPlaylist = clouodPlaylistImporter.importPlaylist();

let uesr = new User("john123", "password123");

User.addPlaylist(localPlatlist);
User.addPlaylist(cloudPlaylist);

console.log("Getting Playlists...");
console.log(user.getPlaylists());

console.log("Getting Albums...");
console.log(user.getAlbums());

console.log("Getting Songs...");
console.log(user.getSongs);
