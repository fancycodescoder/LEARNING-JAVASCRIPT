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


var elgrandTotal = document.getElementById ('grandTotal');
elgrandTotal.textContent = grandTotal


