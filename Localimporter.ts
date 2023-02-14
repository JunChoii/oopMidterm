import { IImportable } from './Interface';
import {readFileSync} from "fs"
export class LocalImporter {
    database!: "JSONalbum.json";

    constructor(database: "JSONalbum.json") {
        this.database = database;
    }
        let database = JSON.parse(
            readFileSync(this.database, { encoding: "utf8"})
            );
            importPlaylist(): Playlist {
                return this.importer.loadPlaylist();
              }

}

// importPlaylist() {
// }