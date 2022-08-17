"use strict";

class MouseEffect {
  constructor() {
    this._vars();
    this._setUpEvents();
  }

  _vars() {
    this.hexagon = document.querySelector(".mouse-effect");
    this.images = document.querySelectorAll(".team-member-photo");

    this.imgSrcs = new Map();
    this.imgSrcs
      .set("product designer", "images/product.gif")
      .set("developer", "images/code.gif")
      .set("tech lead", "images/boss.gif")
      .set("art director", "images/art.gif")
      .set("ux designer", "images/ux.gif");
  }

  _setUpEvents() {
    this.images.forEach((img) => {
      img.addEventListener("mousemove", this._displayEffect.bind(this));
      img.addEventListener("mouseleave", this._hideEffect.bind(this));
    });
  }

  _displayEffect(e) {
    const { pageX: x, pageY: y } = e;
    this.hexagon.style.left = `${x}px`;
    this.hexagon.style.top = `${y}px`;

    //prettier-ignore
    const role = e.target.closest(".team-member").querySelector(".team-member-role").textContent;
    //prettier-ignore
    this.hexagon.style.backgroundImage = `url(${this.imgSrcs.get(role.toLowerCase())})`;
    this.hexagon.classList.add("visible");
  }
  _hideEffect(e) {
    this.hexagon.classList.remove("visible");
  }
}

new MouseEffect();
