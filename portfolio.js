let icon = document.querySelector('.icon');

icon.addEventListener('click',function() {
    document.querySelector('.right').classList.toggle('show');
});

let cf_name = document.getElementById('name');

// if(cf_name.value ==="")
// {
//     $("#errortxt").text("Name is required"); 
// }