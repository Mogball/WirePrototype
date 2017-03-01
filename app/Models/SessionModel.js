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
        this.userModel = true;
        this.historyModel = null;
        this.profilePictureModel = null;

        this.getUser = this.getUser.bind(this);
        this.getHistory = this.getHistory.bind(this);
        this.getProfilePicture = this.getProfilePicture.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setHistory = this.setHistory.bind(this);
        this.setProfilePicture = this.setProfilePicture.bind(this);

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

    setUser(user) {
        this.userModel = user;
    }

    setHistory(history) {
        this.historyModel = history;
    }

    setProfilePicture(profilePicture) {
        this.profilePictureModel = profilePicture;
    }

    reset() {
        this.userModel = null;
        this.historyModel = null;
        this.profilePictureModel = null;
    }

}

export default SessionModel();