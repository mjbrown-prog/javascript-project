



let countArticle = document.getElementsByTagName('article').length; 
document.querySelector('#display').textContent="You have " + countArticle + " notes";

let modal=document.querySelector('#add-note-modal');
let btn = document.querySelector('#add-btn');
let span = document.querySelector('.close-button'); 
let cancel = document.querySelector('#cancel');

btn.onclick = function(){
    modal.style.display ="block";
}

span.onclick =function(){
    modal.style.display="none";
}
cancel.onclick = function(){
    modal.style.display="none";
}

function addNote(){
  let  noteTitle=document.querySelector('#new-note-title').value;
  let noteContent=document.querySelector('#new-note-content').value;
    if(!noteTitle || !noteContent){
        document.querySelector('#alert').textContent= "Note title or content is not added";
    }
    else{
        var d = new Date();
        dayPosted=d.getDate(); 
        monthPosted=d.getMonth();
        yearPosted=d.getFullYear();
        yearPosted=yearPosted.toString().substr(-2);

        let article = document.createElement('article');
        let Title =document.createElement('h2');
        let Content =document.createElement('p');
    
        Title.textContent= dayPosted + '/' + monthPosted + '/' + yearPosted  + ': '+ noteTitle;
        Content.textContent=noteContent;
        article.appendChild(Title);
        article.appendChild(Content).style.textAlign="left";
        document.getElementById('main').appendChild(article);

        let countArticle= document.getElementsByTagName('article').length;
        document.querySelector('#display').textContent="You have " + countArticle + " notes";
        document.querySelector('#add-note-modal').style.display="none";
    
    }
}                                                                                                                                                                                                                                                                                                                                    