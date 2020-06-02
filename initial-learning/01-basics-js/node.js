console.log('simple coonsole logging');

//how variable works.
var var1 = 1;
var var2 = 'string';
var var3 = true;
var var4 = [1,2,'string'];
var var5 = [1,2,3];
var var6 = {
    name:'test',
    valid:true
};

// function declaration
function var7() {
    console.log('function var7 log in console')
}

// function is declared and assigned in var8
var var8 = function () {
    return 'check function in var8';
}
var var9 = var8(); // returned value from function is saved in var9
var var10 = var8; // function is saved in var10

console.log(var1+' is of type : '+typeof var1);
console.log(var2+' is of type : '+typeof var2);
console.log(var3+' is of type : '+typeof var3);
console.log(var4+' is of type : '+typeof var4);
console.log(var5+' is of type : '+typeof var5);
console.log(var6.name+' is of type : '+typeof var6);
console.log(var7());
console.log(var8());
console.log(var9+' is of type : '+typeof var9);