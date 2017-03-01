const SessionModel = (function () {
    let model;

    function newInstance() {
        return new Model();
    }

    return {
        get: function() {
            if (!model) {
                model = newInstance();
            }
            return model
        },
        reset: function() {
            model = null;
        }
    }

});

class Model {

    constructor() {
        this.userModel = null;
        this.historyModel = null;
        this.profilePictureModel = null;
        this.firebaseModel = null;

        this.getUser = this.getUser.bind(this);
        this.getHistory = this.getHistory.bind(this);
        this.getProfilePicture = this.getProfilePicture.bind(this);
        this.getFirebase = this.getFirebase.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setHistory = this.setHistory.bind(this);
        this.setProfilePicture = this.setProfilePicture.bind(this);
        this.setFirebase = this.setFirebase.bind(this);

        this.reset = this.reset.bind(this);
    }

    getUser() {
        return this.userModel;
    }

    getHistory() {
        return this.historyModel;
    }

    getProfilePicture() {
        return this.profilePictureModel;
    }

    getFirebase() {
        return this.firebaseModel;
    }

    setUser(user) {
        this.userModel = user;
    }

    setHistory(history) {
        this.historyModel = history;
    }

    setProfilePicture(profilePicture) {
        this.profilePictureModel = profilePicture;
    }

    setFirebase(firebase) {
        this.firebaseModel = firebase;
    }

    reset() {
        this.userModel = null;
        this.historyModel = null;
        this.profilePictureModel = null;
        this.firebaseModel = null;
    }

}

export default SessionModel();