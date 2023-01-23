let btns = document.querySelectorAll('button');

for(let i = 0; i < btns.length; i++){
    //console.log(btns[i].getAttribute('class').split('-')[1]);
    btns[i].onclick = function(){

        document.querySelector('body').style.backgroundColor = this.getAttribute('class').split('-')[1];

    };
}