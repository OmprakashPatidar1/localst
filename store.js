const my_form=document.querySelector('#myform');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const users=document.querySelector('#users');

my_form.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput===''){
        msg.innerHTML='Please enter all field';
        setTimeout(()=>msg.remove(),3000);
    }else{
        var obj={
            name:nameInput.value,
            email:emailInput.value
        }
        var obj_serialized=JSON.stringify(obj);
       localStorage.setItem('obj',obj_serialized)


    }
}
