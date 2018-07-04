var YVideo = /** @class */ (function () {
    function YVideo(_name, _description, _published, _likes, _dislikes, _views, _comments, _noOfComments) {
        if (_likes === void 0) { _likes = 0; }
        if (_dislikes === void 0) { _dislikes = 0; }
        if (_views === void 0) { _views = 0; }
        if (_comments === void 0) { _comments = []; }
        if (_noOfComments === void 0) { _noOfComments = 0; }
        this._name = _name;
        this._description = _description;
        this._published = _published;
        this._likes = _likes;
        this._dislikes = _dislikes;
        this._views = _views;
        this._comments = _comments;
        this._noOfComments = _noOfComments;
    }
    Object.defineProperty(YVideo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        set: function (value) {
            this._likes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "dislikes", {
        get: function () {
            return this._dislikes;
        },
        set: function (value) {
            this._dislikes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "views", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    YVideo.prototype.incrementViews = function () {
        //some algorithms to detect new views and
        this._views++;
    };
    Object.defineProperty(YVideo.prototype, "published", {
        get: function () {
            return this._published;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "comments", {
        get: function () {
            return this._comments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YVideo.prototype, "noOfComments", {
        get: function () {
            return this._comments.length;
        },
        enumerable: true,
        configurable: true
    });
    YVideo.prototype.addComments = function (comment) {
        if (comment === "") {
            throw new Error("Comment cant be empty");
        }
        else {
            this._comments.push(comment);
        }
    };
    return YVideo;
}());
var video = new YVideo("My first Typescript Program", "It was very fun", "24th Jun 2018");
video.addComments("Very nice");
video.incrementViews();
video.likes = 5;
console.log(video);
