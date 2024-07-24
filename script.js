const data = [
  {
    id: 1,
    name: "چیزبرگر دوبل",
    category: "برگر",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    price: "120,000",
  },
  {
    id: 2,
    name: "بیکن چیزبرگر",
    category: "برگر",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: "135,000",
    },
  {
    id: 3,
    name: "قارچ برگر",
    category: "برگر",
    image:
      "https://images.unsplash.com/photo-1608767221051-2b9d18f35a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1cmdlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      price: "140,000",
    },
  {
    id: 4,
    name: "برگر مخصوص",
    category: "برگر",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
      price: "90,000",
    },
  {
    id: 5,
    name: "پیتزا سبزیجات",
    category: "پیتزا",
    image:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "157,000",
    },
  {
    id: 6,
    name: "پیتزا مخصوص",
    category: "پیتزا",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "110,000",
    },
  {
    id: 7,
    name: "پیتزا پپرونی",
    category: "پیتزا",
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      price: "135,000",
    },
  {
    id: 8,
    name: "پیتزا پنیر",
    category: "پیتزا",
    image:
      "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      price: "145,000",
    },
];

const cards = document.getElementById("cards");

data.map((e) => {
  cards.innerHTML += `<div class="card" style="width: 350px; height: 500px ">
    <img src=${e.image} class="card-img-top card-img" alt=${e.name}>
    <div class="card-body">
      <h5 class="card-title fs-4">${e.name}</h5>
      <p class="card-text fs-6 pt-2">${e.category}</p>
      <p class="card-text fw-bold">${e.price} <span class="fs-6 fw-normal">تومان</span></p>
      <a href="#" class="btn btn-primary d-block">سفارش دهید</a>
    </div>
  </div>`;
});

