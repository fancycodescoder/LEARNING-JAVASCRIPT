var greeting = 'Howdy ';
var name = 'Molly,';
var message = 'please check your order:';

// create  variables to hold details about the sign

var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;


// Get the element that has an id of greeting
var welcome = greeting + name + message;
var el = document.getElementById ('greeting');
el.textContent = welcome;

// Get the element for sign
var elSign = document.getElementById ('userSign');
elSign.textContent = sign;


// Get the element for tiles
var elTiles = document.getElementById ('tiles');
elTiles.textContent = tiles;

// Get the element for subtotal
var elSubTotal = document.getElementById ('subTotal');
elSubTotal.textContent = '$' + subTotal;

// Get the element for subtotal
var elShipping = document.getElementById ('shipping');
elShipping.textContent = '$' + shipping;

// Get the element for grandTotal
var elgrandTotal = document.getElementById ('grandTotal');
elgrandTotal.textContent = grandTotal



var msg = 'Sign up to receive a newsletter for 10% off!';
function updateMessage () {
    var el = document.getElementById ('message');
    el.textContent = msg;
}
updateMessage ();


function getSize (height, width, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}

var areaOne = getSize (3,2,3) [0];
var volumeOne = getSize (3,2,3)[1];






