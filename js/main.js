// スライドショーの動作を制御する関数
function initializeCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".indicator");
  let currentSlide = 0;
  const intervalTime = 5000; // 5秒ごとに自動切り替え
  let carouselInterval;

  // 特定のスライドを表示する関数
  function showSlide(index) {
    // 現在のアクティブなスライドとインジケーターの 'active' クラスを削除
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // 新しいスライドとインジケーターに 'active' クラスを追加
    slides[index].classList.add("active");
    indicators[index].classList.add("active");

    currentSlide = index;
  }

  // 次のスライドに進む関数（自動切り替え用）
  function nextSlide() {
    // 現在のスライド番号を更新（最後のスライドなら最初に戻る）
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // インジケーターがクリックされたときのためのグローバル関数
  window.goToSlide = function (index) {
    // 手動で切り替えたら、インターバルをリセット
    clearInterval(carouselInterval);
    showSlide(index);
    startCarousel();
  };

  // 自動再生を開始する関数
  function startCarousel() {
    carouselInterval = setInterval(nextSlide, intervalTime);
  }

  // 初期化と自動再生の開始
  showSlide(currentSlide);
  startCarousel();
}

// ページが完全に読み込まれた後にカルーセルを初期化
document.addEventListener("DOMContentLoaded", initializeCarousel);
