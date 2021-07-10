import Seeder from "./Seeder";

export default class SongSeeder extends Seeder {
    name = 'SongSeeder'

    async up(numberOfDocs: number = 10): Promise<void> {
        const batch = this.firestore.batch()
            batch.set(this.firestore.collection('songs').doc(), {title: 'Cô gái mở đường'})
        await batch.commit()
    }
}