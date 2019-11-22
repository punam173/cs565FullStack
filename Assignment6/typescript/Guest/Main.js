var Codelab = /** @class */ (function () {
    function Codelab(guests) {
        this.guests = guests;
    }
    Codelab.prototype.getGuestsComing = function () {
        return this.guests.filter(function (guest) { return guest.coming; });
    };
    return Codelab;
}());
// Use this file for reference.
var guests = [
    {
        coming: true,
        name: "Sir Isaac Newton"
    },
    {
        coming: true,
        name: "Marie Curie"
    },
    {
        coming: true,
        name: "Albert Einstein"
    },
    {
        coming: false,
        name: "Charles Darwin"
    }
];
var codelab = new Codelab(guests);
// Angular is so much better than this:
document.body.innerHTML = '<ul>' +
    codelab.getGuestsComing().map(function (guest) { return "<li>" + guest.name + "</li>"; }).join('') +
    '</ul>';
