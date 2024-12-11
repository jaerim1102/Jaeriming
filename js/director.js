document.addEventListener('DOMContentLoaded', function () {
   const bookLists = document.querySelectorAll('.poster-list');

   bookLists.forEach(bookList => {
      bookList.addEventListener('wheel', function (e) {
         if (e.deltaY !== 0) {
            e.preventDefault();
            bookList.scrollLeft += e.deltaY;
         }
      });
   });

   const books = document.querySelectorAll('.book');

   books.forEach(book => {
      book.addEventListener('click', function () {
         this.classList.toggle('flipped');
      });
   });
});


document.addEventListener('DOMContentLoaded', function () {
   const commentButton = document.getElementById('commentButton');
   const commentText = document.getElementById('commentText');
   const commentsSection = document.getElementById('commentsSection');

   // 로컬스토리지에서 기존 코멘트를 불러오기
   function loadComments() {
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      commentsSection.innerHTML = ''; // 기존 코멘트 초기화
      comments.forEach(comment => {
         const commentElement = document.createElement('div');
         commentElement.classList.add('comment');
         commentElement.textContent = comment;
         commentsSection.appendChild(commentElement);
      });
   }

   // 코멘트 추가 함수
   function addComment() {
      const comment = commentText.value.trim();
      if (comment) {
         const comments = JSON.parse(localStorage.getItem('comments')) || [];
         comments.push(comment); // 새로운 코멘트 추가
         localStorage.setItem('comments', JSON.stringify(comments)); // 로컬스토리지에 저장
         commentText.value = ''; // 텍스트 영역 비우기
         loadComments(); // 코멘트 표시 갱신
      }
   }

   // 버튼 클릭 시 코멘트 추가
   commentButton.addEventListener('click', addComment);

   // 페이지 로드 시 기존 코멘트 표시
   loadComments();
});
