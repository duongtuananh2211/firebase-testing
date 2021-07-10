import {firestore} from "firebase-admin/lib/firestore";
import * as admin from 'firebase-admin'

export default class Seeder {
    name: string = 'Seeder'
    refs: firestore.DocumentReference[] = []
    firestore: firestore.Firestore
    app: admin.app.App

    constructor() {
        console.log('Seeding ' + this.name)
        this.app = admin.initializeApp({
            projectId: 'spotify-clone-5ed36'
        })
        this.firestore = this.app.firestore()
        this.firestore.settings({
            host: 'localhost:8080',
            ssl: false
        })
    }

    cleanUp(ref: firestore.DocumentReference) {
        this.refs.push(ref)
    }

    async up(numberOfDocs: number = 10) {
    }

    async down() {
        const batch = this.firestore.batch()
        this.refs.forEach((ref) => batch.delete(ref))
        await batch.commit()
    }

    getRefs() {
        return this.refs
    }
}
