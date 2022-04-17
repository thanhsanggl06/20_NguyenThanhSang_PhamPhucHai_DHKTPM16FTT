// bắt sự kiện

var btn_login = document.querySelector('.btn__login')
var modal = document.querySelector('.modal')
var btn_footer_login = document.querySelector('.modal__footer button')
var icon_close = document.querySelector('.modal__header i')

function toggleModal(e){
    modal.classList.toggle('hide') // thêm class hide vào modal
}


//đăng ký sự kiện
btn_login.addEventListener('click', toggleModal)
btn_footer_login.addEventListener('click', toggleModal)
icon_close.addEventListener('click', toggleModal)
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget)
        toggleModal()
})

function kiemTraTenDN(){
    var mauEmail = /(^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$)|^0[0-9]{9}$/gm;
    var emailDN = document.getElementById("txtEmail").value;
    if(mauEmail.test(emailDN)==true){
        spEmail.innerText = "";
    }else{
                spEmail.innerText = "Phải nhập email hoặc số điện thoại";
    }
}

function kiemTraMK(){
    var mauMK = /\w{6,32}/;
    var MK = document.getElementById("txtMK").value;
    if(mauMK.test(MK)==true){
        spMK.innerText = "";
    }else{
        spMK.innerText = "Mật khẩu không hợp lệ";
    }
}

