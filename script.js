const dentro = document.getElementById('dentro');
const body = document.body;

dentro.onclick = function(){
    this.classList.toggle('ativo');
    body.classList.toggle('ativo');
}

