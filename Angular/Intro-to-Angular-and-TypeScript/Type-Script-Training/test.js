var isEven = false;
var num = 4;
var str = '';
var peshoUser = {
    name: 'Pesho',
    age: 22,
};
//API call
var anotherUserList = [
    { firstName: 'Ivan', id: 1 },
    { firstName: 'Mitko', id: 2 },
    { firstName: 'Maria', id: 3 }
];
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    AnotherUserClass.prototype.getUserName = function () {
        return this.firstName;
    };
    ;
    return AnotherUserClass;
}());
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName));
});
peshoUser.age = 23;
