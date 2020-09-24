export class SupertypeBase<T> {

    readonly value: T;

    constructor (rawValue: T) {
        this.value = rawValue;
    }

}