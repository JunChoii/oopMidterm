export class Song {
    private _songtitle: string;

    constructor(songtitle: string) {
    this._songtitle = songtitle;
    }

    get songtitle(): string {
        return this.songtitle;
    }

    set songtitle(songtitle: string) {
        this.songtitle = songtitle;
        }

}