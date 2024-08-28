import { openDB } from 'idb';

const dbPromise = openDB('language-cards-db', 1, {
    upgrade(db) {
        db.createObjectStore('cards', {
            keyPath: 'id',
            autoIncrement: true,
        });
    },
});

export const addCard = async (card) => {
    const db = await dbPromise;
    await db.add('cards', card);
};

export const getCards = async () => {
    const db = await dbPromise;
    return await db.getAll('cards');
};

export const deleteCard = async (id) => {
    const db = await dbPromise;
    await db.delete('cards', id);
};
