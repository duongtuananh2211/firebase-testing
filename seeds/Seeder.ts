import {firestore} from "firebase-admin/lib/firestore";
import * as admin from 'firebase-admin'

export default class Seeder {
    name: string = 'Seeder'
    refs: firestore.DocumentReference[] = []
    firestore: firestore.Firestore
    app: admin.app.App

    constructor(app: admin.app.App) {
        console.log('Seeding ' + this.name)
        this.app = app
        this.firestore = this.app.firestore()
        this.firestore.settings({
            host: 'localhost:8080',
            ssl: false
        })
    }

    async cleanUp(ref: firestore.DocumentReference) {
        this.refs.push(ref)
    }

     async up(numberOfDocs: number = 10) {
    }

    async down() {
        // const batch = firestore().batch()
    }

    getRefs() {
        return this.refs
    }
}
