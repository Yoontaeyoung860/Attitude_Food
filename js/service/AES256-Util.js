/**
 * @author lk_wss
 * AES 256 암/복호화
 * 
 */
var encode_data = function(pwd){
	key = CryptoJS.enc.Utf8.parse("abcdefghijklmnopqrstuvxyz0123456");
	iv = CryptoJS.enc.Utf8.parse("!\"#$%&'()0123456");
	var encrypted = CryptoJS.AES.encrypt(pwd, key, { iv: iv, mode:CryptoJS.mode.CBC});
	return encrypted.toString();
}
		  //복호화
var decode_data = function(encrypted){
	key = CryptoJS.enc.Utf8.parse("abcdefghijklmnopqrstuvxyz0123456");
	iv = CryptoJS.enc.Utf8.parse("!\"#$%&'()0123456");
	var decrypted = CryptoJS.AES.decrypt(encrypted,key,{iv:iv,padding:CryptoJS.pad.NoPadding}); 
	return decrypted.toString(CryptoJS.enc.Utf8);
}

var dataEncode = function(message, key, iv){
   var encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv, mode:CryptoJS.mode.CBC});
   return encrypted.toString();
}

var dataDecode = function(encrypted, key, iv){
   var decrypted = CryptoJS.AES.decrypt(encrypted,key,{iv:iv,padding:CryptoJS.pad.NoPadding}); 
   return decrypted.toString(CryptoJS.enc.Utf8);
}

//Hex to Base64
function hexToBase64(str) {
    return btoa(String.fromCharCode.apply(null,
      str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
    );
}

// Base64 to Hex
function base64ToHex(str) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, "")), hex = []; i < bin.length; ++i) {
        let tmp = bin.charCodeAt(i).toString(16);
        if (tmp.length === 1) tmp = "0" + tmp;
        hex[hex.length] = tmp;
    }
    return hex.join("");
}


function A_B_H(pwd){
	return base64ToHex(encode_data(pwd));
}

/*
var dataEncode = function(message, key, iv){
   var encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
   return encrypted.toString();
 }
var dataDecode = function(encrypted, key, iv){
   var decrypted = CryptoJS.AES.decrypt(encrypted,key,{iv:iv,padding:CryptoJS.pad.ZeroPadding}); 
   return decrypted.toString(CryptoJS.enc.Utf8);
}
*/