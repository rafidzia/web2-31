function myfun() {
    var pass = document.getElementById("password").value;
    var cnfrm_pass = document.getElementById("confirm_pass").value;

    if(pass == "") {
        document.getElementById("msg_password").innerHTML = "Password harus diisi";
        return false;
    }
    if (pass.length < 8) {
        document.getElementById("msg_password").innerHTML = "Password harus lebih dari 8 karakter";
        return false;
    }

    if (cnfrm_pass == "") {
        var str = "Confirm Password harus diisi";
        var msg_false = str.fontcolor("red");
        document.getElementById("msg_confirm").innerHTML = msg_false;
        document.getElementById("msg_password").innerHTML = "";
        return false;
    } else if (pass != cnfrm_pass) {
        var str = "Password tidak cocok";
        var msg_false = str.fontcolor("red");
        document.getElementById("msg_confirm").innerHTML = msg_false;
        document.getElementById("msg_password").innerHTML = "";
        return false;
    } else {
        var str = "Password cocok";
        var msg_false = str.fontcolor("green");
        document.getElementById("msg_confirm").innerHTML = msg_false;
        document.getElementById("msg_password").innerHTML = "";
        return false;
    }

}

function btnLogin() {
    var form = document.getElementById("login_form");
    var close = "Close"
    var login = "Login"
    document.getElementById("txt_login").innerHTML = login;
    if (form.style.display == "block") {
        document.getElementById("txt_login").innerHTML = login;
        form.style.display = "none";
    } else {
        document.getElementById("txt_login").innerHTML = close;
        form.style.display = "block";
    }
}

function btnDivide() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    var hasil = parseInt(angka1) / parseInt(angka2);
    document.getElementById("hasil").innerHTML = hasil;
}

function btnAdd() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    var hasil = parseInt(angka1) + parseInt(angka2);
    document.getElementById("hasil").innerHTML = hasil;
}

function btnMul() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    var hasil = parseInt(angka1) * parseInt(angka2);
    document.getElementById("hasil").innerHTML = hasil;
}

function btnSub() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;

    var hasil = parseInt(angka1) - parseInt(angka2);
    document.getElementById("hasil").innerHTML = hasil;
}

function kecamatan() {
    var kecamatan = document.getElementById("kecamatan").value;
    if(kecamatan === "Kenjeran"){
        var kelurahan = ["Bulak Banteng", "Tambakwedi", "Kedinding", "Sidotopo Wetan"];
    } else if (kecamatan === "Tambaksari") {
        var kelurahan = ["Ploso", "Rangkah", "Pacar Kembang", "Gading", "Dukuh Setro"];
    }else {
        var kelurahan = [];
    }

    var string = "";
    for (let index = 0; index < kelurahan.length; index++) {
        string = string + '<option>' + kelurahan[index] + '</option>';
    }
    string = '<select class="input">' + string + '</select>';
    document.getElementById("kelurahan").innerHTML = string;
}

var date = new Date();
var bln = [1,2,3,4,5,6,7,8,9,10,11,12];
var bulan = bln[date.getMonth()]
var tahun = date.getFullYear();
var sekarang = date.getDate();
function format(butVal){
    if(butVal === 1){
    	document.getElementById("d_data").innerHTML='(dd/mm/yyyy) : ' + sekarang + '/' + bulan + '/' + tahun;
    }
    else{
    	document.getElementById("d_data").innerHTML="(mm/dd/yyyy) : " + bulan + '/' + sekarang + '/' + tahun;
    }
}