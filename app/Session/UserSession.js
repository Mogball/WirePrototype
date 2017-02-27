export default class UserSession {
    constructor(uid, email, phone, firstName, lastName, country, state, city) {
        this.uid = uid;
        this.email = email;
        this.phone = phone;
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.state = state;
        this.city = city;
        this.getUID = this.getUID.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getPhone = this.getPhone.bind(this);
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
        this.getCountry = this.getCountry.bind(this);
        this.getState = this.getState.bind(this);
        this.getCity = this.getCity.bind(this);
        this.setUID = this.setUID.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhone = this.setPhone.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setCountry = this.setCountry.bind(this);
        this.setState = this.setState.bind(this);
        this.setCity = this.setCity.bind(this);
    }

    getUID() {
        return this.uid;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getCountry() {
        return this.country;
    }

    getState() {
        return this.state;
    }

    getCity() {
        return this.city;
    }

    setUID(uid) {
        this.uid = uid;
    }

    setEmail(email) {
        this.email = email;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }

    setCountry(country) {
        this.country = country;
    }

    setState(state) {
        this.state = state;
    }

    setCity(city) {
        this.city = city;
    }
}