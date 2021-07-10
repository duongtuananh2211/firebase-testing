import Seeder from "./Seeder";
import * as faker from 'faker'

export default class SongSeeder extends Seeder {
    name = 'SongSeeder'

    async up(numberOfDocs: number = 100): Promise<void> {
        const batch = this.firestore.batch()
            for (let i = 0; i < numberOfDocs; i++) {
                const ref = this.firestore.collection('songs').doc()
                batch.set(ref, {title: faker.lorem.sentence()})
                this.cleanUp(ref)
        }
        await batch.commit()
    }
}