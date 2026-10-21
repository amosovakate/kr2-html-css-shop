const scrollTopButton = document.querySelector(".scroll-top");

// показываем кнопку, когда страницу прокрутили больше чем на 300px
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("scroll-top--visible");
  } else {
    scrollTopButton.classList.remove("scroll-top--visible");
  }
});

// по клику возвращаемся наверх
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});