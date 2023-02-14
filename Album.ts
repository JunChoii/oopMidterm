import {Song} from './Song';
import { Artist } from './Artist';
export class Album {
    private _albumTitle: string;
    artist: Artist;
    year: number;
    tracks: Song[];


    constructor(albumTitle:string, artist: Artist, year:number) {
        this._albumTitle = albumTitle;
        this.artist = artist;
        this.year = year;
        this.tracks = [];
    }

    get albumTitle() {
        return this._albumTitle;
    }

    set albumTitle(value: string) {
        this._albumTitle = value;
    }

    addTrack(songName: any) {
        this.tracks.push(songName);
      }
}