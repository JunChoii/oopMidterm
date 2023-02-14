import { Playlist } from "./Playlist";
import { IImportable } from "./Interface";

export class PlaylistImporter {
  importer: IImportable;

  constructor(importer: IImportable) {
    this.importer = importer;
  }

  importPlaylist(): Playlist {
    return this.importer.loadPlaylist();
  }
}