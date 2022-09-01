let imgs = [
  {
    src: "https://images.unsplash.com/photo-1615195627275-48660e9cd84f",
    alt: "nebula cloud",
  },
  {
    src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
    alt: "mountains reflection on water",
  },
  {
    src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
    alt: "strong waves",
  },
  {
    src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
    alt: "green mountains and blue sky",
  },
  {
    src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
    alt: "blue and purple galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
    alt: "blue wavy water",
  },
  {
    src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
    alt: "brown and black galaxy",
  },
  {
    src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
    alt: "person on clif in canyon",
  },
  {
    src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
    alt: "whale tale above water surface",
  },
];

imgs.forEach(function (image, index) {
  let selectedImg;
  let img = document.createElement("img");
  document.querySelector("#app").appendChild(img);
  img.setAttribute("src", image.src);
  img.setAttribute("alt", image.alt);
  img.setAttribute("width", 200);
  img.addEventListener("click", function (e) {
    // console.log(index);
    renderImg(index);
    arrowNav(index);
  });
});

function renderImg(index) {
  if (document.querySelector(".container")) {
    document.querySelector(".container").remove();
  }

  let container = document.createElement("div");
  container.setAttribute("class", "container");
  document.querySelector("#app").appendChild(container);

  let prevBtn = document.createElement("img");
  document.querySelector(".container").appendChild(prevBtn);
  prevBtn.setAttribute("class", "navBtn prev");
  prevBtn.setAttribute("src", "./arrow.svg");
  prevBtn.setAttribute("alt", "prev");

  selectedImg = document.createElement("img");
  document.querySelector(".container").appendChild(selectedImg);
  selectedImg.setAttribute("class", "selected-img");
  selectedImg.setAttribute("src", imgs[index].src);
  selectedImg.setAttribute("alt", imgs[index].alt);

  let nextBtn = document.createElement("img");
  document.querySelector(".container").appendChild(nextBtn);
  nextBtn.setAttribute("class", "navBtn next");
  nextBtn.setAttribute("src", "./arrow.svg");
  nextBtn.setAttribute("alt", "next");
  // document.querySelector("#app").style.filter = "blur(10px)";
}

function arrowNav(index) {
  document.querySelectorAll(".navBtn").forEach((el) => {
    el.addEventListener("click", function (e) {
      console.log(e.target);
      switch (e.target.alt) {
        case "prev": {
          console.log("prev");
          if (index >= 0) {
            console.log("PREV if part");
            selectedImg.setAttribute("src", imgs[index--].src);
          } else {
            index = imgs.length - 1;
            console.log("PREV else part");
            // selectedImg.setAttribute("src", imgs[imgs.length - 1].src);
          }
          break;
        }
        case "next": {
          console.log("next");
          if (index < imgs.length) {
            console.log("NEXT if part");
            selectedImg.setAttribute("src", imgs[index++].src);
          } else {
            console.log("NEXT else part");
            index = 0;
          }
          break;
        }
      }
    });
  });
}
