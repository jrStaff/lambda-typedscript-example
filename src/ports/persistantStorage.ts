export default interface PersistantStorage {
    storeRawMailgun(data: object): Promise<void>;
}
