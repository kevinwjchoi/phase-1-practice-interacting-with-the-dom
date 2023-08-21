document.addEventListener('DOMContentLoaded', function() {
    let timer = 0;
    const timerElement = document.getElementById('counter');
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const heartBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const submitBtn = document.getElementById('submit');
  
    let isPaused = false;
  
    setInterval(function() {
      if (!isPaused) {
        timer++;
        timerElement.textContent = timer;
      }
    }, 1000);
  
    plusBtn.addEventListener('click', function(event) {
      timer += 1;
      timerElement.textContent = timer;
    });
  
    minusBtn.addEventListener('click', function(event) {
      timer -= 1;
      timerElement.textContent = timer;
    });
  
    heartBtn.addEventListener('click', function(event) {
      const likesList = document.querySelector('.likes');
      const newLike = document.createElement('li');
      newLike.textContent = timer + ' has been liked';
      likesList.appendChild(newLike);
    });
  
    pauseBtn.addEventListener('click', function(event) {
      isPaused = !isPaused;
  
      const buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] !== pauseBtn) {
          buttons[i].disabled = isPaused;
        }
      }
    });

    submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    const commentList = document.querySelector('.comments');
    const newComment = document.createElement('li');
    const commentInput = document.getElementById('comment-input')
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);

    });
  });