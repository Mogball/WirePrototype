const fields = ['email_address', 'phone_number', 'first_name', 'last_name', 'country', 'state', 'city'];

export default class UserSession {
    constructor(uid, email, phone, firstName, lastName, country, state, city) {
        this.uid = uid;
        this.emailAddress = email;
        this.phoneNumber = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.state = state;
        this.city = city;
        this.getUID = this.getUID.bind(this);
    }

    constructor(uid, data) {
        this.uid = uid;
    }

    getUID() {
        return this.uid;
    }
}