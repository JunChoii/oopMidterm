import { IImportable } from './Interface';
import {readFileSync} from "fs"
export class CloudImport implements IImportable {

    url!: string;;

    constructor(url: string) {
        this.url = url;
    }
}