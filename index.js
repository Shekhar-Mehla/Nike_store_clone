const New_feature = document.querySelectorAll(
  ".bottom_navbar .nav_container a"
);
const hello = () => {
  const arrayobj = [
    {
      firstobj: {
        Title: "Featured",
        item1: "Shop All New Arrivals",
        item2: "Best Seller",
        item3: "Member Shop",
        item4: "Sneakers Launch Calander",
      },
      secondobj: {
        Title: "Shop Icon",
        item1: "Air Force 1",
        item2: "Air Jordan 1",
        item3: "Air Max",
        item4: "Dunk",
        item5: "Blazer",
        item6: "Pegasus",
        item7: "Mercurial",
      },
      thirdobj: {
        Title: "Discover Sport",
        item1: "Football",
        item2: "Running",
        item3: "Basketball",
        item4: "Fitness",
        item5: "Golf",
        item6: "Tennis",
        item7: "Yoga",
        item8: "Dance",
        item9: "Skateboarding",
      },
      fourthobj: {
        Title: "Trending",
        item1: "Air Max Home",
        item2: "Y2k Sneakers",
        item3: "Nike Style By",
        item4: "Jordan Retro Collection",
        item5: "Teens",
        item6: "Eyes On",
        item7: "Sustainability",
      },
    },
  ];
  const fisrlist = arrayobj.map((item) => {
    return `
    <div class="bottom_navbar_container_list1 flex container">
    <div class="bottom_navbar_menu_list">
      <title>${item.firstobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item4}</div>
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.secondobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item5}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item6}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item7}</div>
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.thirdobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item5}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item6}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item7}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item8}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item9}</div>
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.fourthobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item5}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item6}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item7}</div>
     
    </div>
    
    
  </div>
    `;
  });
  return fisrlist;
};
const Men = () => {
  const arrayobj = [
    {
      firstobj: {
        Title: "Featured",
        item1: "New Release",
        item2: "Best Seller",
        item3: "Air Max Home",
        item4: "Outerwear",
        item5: "Y2K Sneakers",
      },
      secondobj: {
        Title: "Shoes",
        item1: "Lifestyle",
        item2: "Jordan",
        item3: "Running",
        item4: "Football",
        item5: "Basketball",
        item6: "Training and Gym",
        item7: "Skateboarding",
        item8: "Nike By You",
      },
      thirdobj: {
        Title: "Clothing",
        item1: "Tops and T-Shirts",
        item2: "Hoodies and Swatshirts",
        item3: "Shorts",
        item4: "Trousers and Tights",
        item5: "Tracksuits",
        item6: "jackets",
        item7: "Kits and Jerseys",
      },
      fourthobj: {
        Title: "Discover Sport",
        item1: "Football",
        item2: "Basketball",
        item3: "Training and Gym",
        item4: "Tennins",
        item5: "Golf",
      },
    },
  ];
  const fisrlist = arrayobj.map((item) => {
    return `
    <div class="bottom_navbar_container_list1 flex container">
    <div class="bottom_navbar_menu_list">
      <title>${item.firstobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.firstobj.item5}</div>
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.secondobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item5}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item6}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item7}</div>
      <div class="bottom_navbar_menu_list_item">${item.secondobj.item8}</div>
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.thirdobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item5}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item6}</div>
      <div class="bottom_navbar_menu_list_item">${item.thirdobj.item7}</div>
      
    </div>
    <div class="bottom_navbar_menu_list">
      <title>${item.fourthobj.Title}</title>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item1}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item2}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item3}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item4}</div>
      <div class="bottom_navbar_menu_list_item">${item.fourthobj.item5}</div>
      
     
    </div>
    
    
  </div>
    `;
  });
  return fisrlist;
};

const hovweritem = document.querySelectorAll(
  ".bottom_navbar .nav_container a "
);
hovweritem.forEach((item, index) => {
  const display = () => {
    switch (index) {
      case 0: {
        document.querySelector(".bottom_navbar_menu").innerHTML = hello();
        break;
      }
      case 1: {
        document.querySelector(".bottom_navbar_menu").innerHTML = Men();

        break;
      }
      case 2: {
        document.querySelector(".bottom_navbar_menu").innerHTML = hello();

        break;
      }
      case 3: {
        document.querySelector(".bottom_navbar_menu").innerHTML = Men();

        break;
      }
      case 4: {
        document.querySelector(".bottom_navbar_menu").innerHTML = hello();

        break;
      }

      default:
        break;
    }
  };
  const Hidedisplay = () => {
    document.querySelector(".bottom_navbar_menu").innerHTML = "";
  };

  item.addEventListener("mouseover", display);
  item.addEventListener("mouseout", Hidedisplay);
});

// handle badge on load
const newspaperSpinning = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const newspaperTiming = {
  duration: 2000,
  iterations: 1,
};

const newspaper = document.querySelector(".badge_item1");
console.log(newspaper);

newspaper.addEventListener("click", () => {
  newspaper.animate(newspaperSpinning, newspaperTiming);
});
