import SongSeeder from "./seeders/SongSeeder";


async function main() {
    let startAt = new Date()

    const seeders: any[] = [
        SongSeeder
    ]

    for (let seeder of seeders) {
        const instance = new seeder()
        await instance.up()

    }

    console.log('Finished in ' + (new Date().getTime() - startAt.getTime()) + 'ms')

}


console.log("Start seeding...")
main().then(() => console.log("Good Job Boi!")).catch((err) => console.log("Lỗi",err.message))