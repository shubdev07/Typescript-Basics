class YVideo {
  constructor(
    private _name: string,
    private _description: string,
    private readonly _published: string,
    private _likes: number = 0,
    private _dislikes: number = 0,
    private _views: number = 0,
    private _comments: string[] = [],
    private _noOfComments: number = 0
  ) {}
  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get likes() {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get dislikes() {
    return this._dislikes;
  }

  set dislikes(value: number) {
    this._dislikes = value;
  }

  get views() {
    return this._likes;
  }
  incrementViews() {
    //some algorithms to detect new views and
    this._views++;
  }

  get published() {
    return this._published;
  }

  get comments() {
    return this._comments;
  }

  get noOfComments() {
    return this._comments.length;
  }

  addComments(comment: string) {
    if (comment === "") {
      throw new Error("Comment cant be empty");
    } else {
      this._comments.push(comment);
    }
  }
}

let video = new YVideo(
  "My first Typescript Program",
  "It was very fun",
  "24th Jun 2018"
);

video.addComments("Very nice");
video.incrementViews();
video.likes = 5;
console.log(video);
