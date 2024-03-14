let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}

function showComments (){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
        out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
        out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }




  document.querySelector('#comment-body').oninput = function () { 
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.comment-field p');
    if (val != ' ') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) { 
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else{
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }    
}
    function insertMark (string, pos )
    { // hello world
    // hello <mark>wo</mark>rld // hello+<mark>+wo+</mark>+rld
    return string.slice(0, pos);
}
