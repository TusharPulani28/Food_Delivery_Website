window.addEventListener('scroll', function(){
    let container = this.document.getElementById("container");
    if(this.window.scrollY >= 50){
        container.classList.add('sticky');
    }else{
        container.classList.remove('sticky');
    }
});