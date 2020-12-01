const navigation = document.querySelector(".navigation");
// const linkHome = document.querySelector('[data-navLink="Home"]');
// const linkProducts = document.querySelector('[data-navLink="Products"]');
// const linkProfile = document.querySelector('[data-navLink="Profile"]');
// const linkCart = document.querySelector('[data-navLink="Cart"]');
// const body = document.querySelector("body");
// body.addEventListener("click", () => console.log("body"));
// navigation.addEventListener("click", () => console.log("navigation"));
// linkHome.addEventListener("click", (event) =>
//   console.log(event.target.dataset.navlink)
// );
// linkProducts.addEventListener("click", (event) =>
//   console.log(event.target.dataset.navlink)
// );
// linkProfile.addEventListener("click", (event) =>
//   console.log(event.target.dataset.navlink)
// );
// linkCart.addEventListener("click", (event) =>
//   console.log(event.target.dataset.navlink)
// );
navigation.addEventListener("click", (event) => {
  if (event.target === event.currentTarget || event.target.nodeName !== "A") {
    return;
  }
  console.log(event.target.dataset.navLink);
});
