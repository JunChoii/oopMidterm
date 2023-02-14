import {Album} from "./Album";
export class Artist {
    name: String;
    albums: string[];

    constructor(name: String) {
        this.name = name;
        this.albums = [];
    }

    addAlbum(albumName: string) {
        this.albums.push(albumName);
      }
}