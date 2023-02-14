eport class user {
    private _username: string;
    private _password: string;
    playlists: Playlist[];
    albums: Album[];

    constructor(_username: string, _password: string) {
        this._username = _username;
        this._password = _password;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
        
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    addPlaylist (playlist: Playlist) {
        this.playlists.push(playlist);
    }

    addAlbum (album: Album) {
        this.albums.push(album);
    }

    getSong (song: Song) {
        return this.playlists;
    }

    getAlbum (album: Album) {
        return this.albums;
    }

    getPlaylist (playlist: Playlist) {
        return this.playlists;
    }
}

