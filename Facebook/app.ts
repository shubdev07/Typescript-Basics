class Profile {
  constructor(
    private _firstName: string,
    private _lastName: string,
    private _gender: string,
    private _birthday: string,
    private _about: string,
    private _education: string[],
    private _languages: string[],
    private _interestedIn: string[],
    private _contactNo: number[],
    private _familyMembers: string[],
    private readonly _facebookId: string,
    private _checkIns: string[],
    private _address: string[],
    private _relationshipStatus: string,
    private _bloodGroup: string,
    private _email: string[]
  ) {}

  getfullName = () => {
    return this._firstName + " " + this._lastName;
  };

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get gender() {
    return this._gender;
  }
  get about() {
    return this._about;
  }

  get education() {
    return this._education;
  }

  get birthday() {
    return this._birthday;
  }

  get languages() {
    return this._languages;
  }

  get interestedIn() {
    return this._interestedIn;
  }

  get contactNo() {
    return this._contactNo;
  }

  get familyMembers() {
    return this._familyMembers;
  }

  get facebookId() {
    return this._facebookId;
  }

  get checkIns() {
    return this._checkIns;
  }

  get address() {
    return this._address;
  }

  get relationshipStatus() {
    return this._relationshipStatus;
  }

  get bloodGroup() {
    return this._bloodGroup;
  }

  get email() {
    return this._email;
  }

  set firstName(name: string) {
    this._firstName = name;
  }
}

let profile = new Profile(
  "Shubham",
  "Karmakar",
  "male",
  "07-09-1996",
  "Hello ya all",
  ["edwisor trainee"],
  ["english, hindi"],
  ["coding", "movies"],
  [8638563970],
  ["John", "Jane", "Jene"],
  "5asdhjhadad",
  ["lots of places"],
  ["very secret street"],
  "single",
  "B+",
  ["shubworkmail@gmail.com"]
);

profile.firstName = "newName";
console.log(profile.firstName);
