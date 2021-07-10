import SongSeeder from "./SongSeeder";
import * as admin from 'firebase-admin'

process.env['FIRESTORE_EMULATOR_HOST'] = 'localhost:8080'

async function main() {
    const app = admin.initializeApp({
        projectId: 'spotify-clone-5ed36'
    })
    const seeders: any[] = [
        SongSeeder
    ]

    for (let seeder of seeders) {
        const instance = new seeder(app)
        await instance.up()
    }

}


console.log("Start seeding...")
main().then(() => console.log("Good Job Boi!")).catch((err) => console.log("Lỗi",err.message))