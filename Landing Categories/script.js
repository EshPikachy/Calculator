const data = {
  burgers: [
    {
      name: "super burger",
      img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg",
      price: 100,
    },
    {
      name: "pro burger",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",
      price: 150,
    },
    {
      name: "extra burger",
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
      price: 180,
    },
  ],
  pizzas: [
    {
      name: "italian pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg",
      price: 300,
    },
    {
      name: "meat pizza",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg",
      price: 400,
    },
  ],
  drinks: [
    {
      name: "pivo",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg",
      price: 500,
    },
    {
      name: "vino",
      img: "https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg",
      price: 1000,
    },
    {
      name: "vodka",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU",
      price: 2000,
    },
    {
      name: "tequila",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU",
      price: 3000,
    },
  ],
};

const burgers = data.burgers;
const pizzas = data.pizzas;
const drinks = data.drinks;
const all = [...burgers, ...pizzas, ...drinks];

const categoryChoise = [
  {
    title: "all",
    data: all,
  },
  {
    title: "burgers",
    data: burgers,
  },
  {
    title: "pizzas",
    data: pizzas,
  },
  {
    title: "drinks",
    data: drinks,
  },
];

const output = document.querySelector(".output");
// const categoryBtn = document.querySelectorAll(".categoryBtn");
const categories = document.querySelector(".categories");

const categoriesRender = (data) => {
  output.innerHTML = "";
  data.forEach((el) => {
    const row = document.createElement("div");
    const col = document.createElement("div");
    const box = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("p");
    const price = document.createElement("h4");

    row.className = "row";
    col.className = "col-4";
    box.className = "box";
    image.src = el.img;
    title.textContent = el.name;
    price.textContent = el.price;

    box.append(image, title, price);
    col.append(box);
    row.append(col);
    output.append(row);
  });
};

categoriesRender(all);

// categoryBtn.forEach((el, index) => {
//   el.addEventListener("click", () => {
//     categoriesRender(categoryChoise[index].data);
//   });
// });

categoryChoise.forEach((el) => {
  const allButtons = document.createElement("button");
  allButtons.classList.add("allbuttons");

  allButtons.textContent = el.title;

  categories.append(allButtons);

  allButtons.addEventListener("click", () => {
    categoriesRender(el.data);
  });
});

const activeButton = () => {
  const categoryBtn = document.querySelectorAll(".allbuttons");
  for (let i = 0; i < categoryBtn.length; i++) {
    categoryBtn[i].addEventListener("click", () => {
      for (let k = 0; k < categoryBtn.length; k++) {
        if (i === k) {
          categoryBtn[k].classList.add("onlybutton");
        } else {
          categoryBtn[k].classList.remove("onlybutton");
        }
      }
    });
  }
};

activeButton();

const dataAlt = [
  {
    name: "super burger",
    img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg",
    price: 100,
    category: "burgers",
  },
  {
    name: "pro burger",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",
    price: 150,
    category: "burgers",
  },
  {
    name: "extra burger",
    img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
    price: 180,
    category: "burgers",
  },
  {
    name: "italian pizza",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg",
    price: 300,
    category: "pizzas",
  },
  {
    name: "meat pizza",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg",
    price: 400,
    category: "pizzas",
  },
  {
    name: "pivo",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg",
    price: 500,
    category: "drinks",
  },
  {
    name: "vino",
    img: "https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg",
    price: 1000,
    category: "drinks",
  },
  {
    name: "vodka",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU",
    price: 2000,
    category: "drinks",
  },
  {
    name: "tequila",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU",
    price: 3000,
    category: "drinks",
  },
];




