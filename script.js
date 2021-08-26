document.addEventListener('DOMContentLoaded',()=>{

    const r=document.querySelector("#red");
    const g=document.querySelector("#green");
    const b=document.querySelector("#blue");
    const btn=document.querySelector(".btn");

    document.addEventListener('input',()=>{
        document.body.style.backgroundColor=`rgb(${r.value},${g.value},${b.value})`;
        document.querySelector("#result").value=`rgb(${r.value},${g.value},${b.value})`;
    });

    btn.addEventListener("click",()=>{
        const result=document.querySelector("#result");
        result.focus();
        result.select();
        document.execCommand("copy");
        var old=btn.innerHTML;
        btn.innerHTML="Copied";

        setTimeout(()=>{
            btn.innerHTML=old;
            
        },2000)
        
    });

})