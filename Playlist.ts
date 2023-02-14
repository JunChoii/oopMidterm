import { Album } from "./Album";
import { Song } from "./Song";

export class Playlist {
    private _name: string;
    private _listOfSong: Song[];

    constructor(name: string) {
        this._name = name;
        this._listOfSong = [];
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get listOfSong(): Song[] {
        return this._listOfSong;
    }

    set listOfSong(value: Song[]) {
        this._listOfSong = value;
    }
}