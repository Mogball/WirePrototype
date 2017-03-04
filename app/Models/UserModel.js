const fields = ['email_address', 'phone_number', 'first_name', 'last_name', 'country', 'state', 'city', 'birthdate', 'funds', 'points'];

export default class UserSession {

    constructor(uid, data) {
        this.uid = uid;
        this.getUID = this.getUID.bind(this);
        const $this = this;
        fields.forEach(function (field) {
           $this[field] = data[field];
        });
    }

    getUID() {
        return this.uid;
    }
}