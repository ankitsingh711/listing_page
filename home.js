function loadcoupon(){
    document.getElementById("coupon").style.visibility="visible"
}

function closecoupon(){
    document.getElementById("coupon").style.visibility="hidden"
}

function changemode(){
    var mybody = document.body
    mybody.classList.toogle("mydarkmode")
}
