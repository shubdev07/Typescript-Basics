var Profile = /** @class */ (function () {
    function Profile(_firstName, _lastName, _gender, _birthday, _about, _education, _languages, _interestedIn, _contactNo, _familyMembers, _facebookId, _checkIns, _address, _relationshipStatus, _bloodGroup, _email) {
        var _this = this;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._gender = _gender;
        this._birthday = _birthday;
        this._about = _about;
        this._education = _education;
        this._languages = _languages;
        this._interestedIn = _interestedIn;
        this._contactNo = _contactNo;
        this._familyMembers = _familyMembers;
        this._facebookId = _facebookId;
        this._checkIns = _checkIns;
        this._address = _address;
        this._relationshipStatus = _relationshipStatus;
        this._bloodGroup = _bloodGroup;
        this._email = _email;
        this.getfullName = function () {
            return _this._firstName + " " + _this._lastName;
        };
    }
    Object.defineProperty(Profile.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "about", {
        get: function () {
            return this._about;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "education", {
        get: function () {
            return this._education;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "languages", {
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "interestedIn", {
        get: function () {
            return this._interestedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "contactNo", {
        get: function () {
            return this._contactNo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "familyMembers", {
        get: function () {
            return this._familyMembers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "facebookId", {
        get: function () {
            return this._facebookId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "checkIns", {
        get: function () {
            return this._checkIns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "address", {
        get: function () {
            return this._address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "relationshipStatus", {
        get: function () {
            return this._relationshipStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "bloodGroup", {
        get: function () {
            return this._bloodGroup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Profile.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}());
var profile = new Profile("Shubham", "Karmakar", "male", "07-09-1996", "Hello ya all", ["edwisor trainee"], ["english, hindi"], ["coding", "movies"], [8638563970], ["John", "Jane", "Jene"], "5asdhjhadad", ["lots of places"], ["very secret street"], "single", "B+", ["shubworkmail@gmail.com"]);
profile.firstName = "newName";
console.log(profile.firstName);
