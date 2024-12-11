document.addEventListener('DOMContentLoaded', () => {
   const trashcan = document.getElementById('trashcan');
   const figmaItems = document.querySelectorAll('.figma-info');

   // 드래그 시작 시 이벤트
   figmaItems.forEach(item => {
      item.addEventListener('dragstart', (e) => {
         // 드래그된 항목에 data-id 추가하여 식별
         e.dataTransfer.setData('text/plain', item.getAttribute('data-id'));
         e.target.style.opacity = 0.5; // 드래그 중에 항목의 투명도 변경
      });

      item.addEventListener('dragend', (e) => {
         e.target.style.opacity = 1; // 드래그가 끝난 후 투명도 복원
      });
   });

   // 쓰레기통에 드래그된 항목을 놓을 때
   trashcan.addEventListener('dragover', (e) => {
      e.preventDefault(); // 기본 동작 방지 (드롭을 가능하게 만듦)
   });

   trashcan.addEventListener('drop', (e) => {
      e.preventDefault();

      // 드래그된 항목의 data-id 가져오기
      const itemId = e.dataTransfer.getData('text/plain');

      // 해당 data-id 값을 가진 figma-info 항목을 숨기기
      const itemToRemove = document.querySelector(`.figma-info[data-id="${itemId}"]`);
      if (itemToRemove) {
         itemToRemove.style.display = 'none'; // 항목을 화면에서 숨김
      }
   });
});
