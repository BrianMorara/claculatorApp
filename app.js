const input=document.querySelector('#input');
const btn=document.querySelectorAll('.btn');

btn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let target=e.target.dataset.num;
        
        input.value+=target;

        //Will work on this button later.
        
       /*  function del(){
            let digits=[...input.value];
            if(input.value!=='+'|| input.value!=='-'||input.value!=='*'||input.value!=='/'){
                input.value=digits.join('');
            }
            console.log(digits);
            const deletBtn=document.querySelector('.delete').addEventListener('click',()=>{
                digits.pop();
            });
        }
        del(); */
})
});

const equal=document.querySelector('.equal').addEventListener('click',()=>{
    if(input.value===''){
        alert('Please Enter a valid operation');
    }else{
       input.value=eval(input.value);
    }
});

const clear=document.querySelector('.clear').addEventListener('click',()=>{
    input.value='';
});