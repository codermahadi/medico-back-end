export interface IWrite<T> {
    create(item: T, callback): void;

    update(id: string, item: T): Promise<boolean>;

    delete(id: string): Promise<boolean>;
}
