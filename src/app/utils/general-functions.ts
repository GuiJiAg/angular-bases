export class GeneralFunctions {
    static clone<T>(object: T): T {
        return Object.assign({}, object);
    }
}
