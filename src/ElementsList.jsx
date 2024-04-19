import sunImg from "./assets/sun.svg"
import magGlass from "./assets/magnifying_glass.svg"
import saleImg from "./assets/sale.png"
import MenuButton from "./MenuButton"
import setsImg from "./assets/sets.png"
import sushiImg from "./assets/sushi.png"
import soupImg from "./assets/soup.png"
import sushiImg1 from "./assets/sushi1.png"
import sushiImg2 from "./assets/sushi2.png"
import menuImg from "./assets/menu.svg"
import profileImg from "./assets/profile.svg"
import contactsImg from "./assets/contacts.svg"
import cartImg from "./assets/cart.svg"
import NavButton from "./NavButton"

export const DraggableList = {
  greetings_label: <p className="text-lg pb-1">Добрый день!</p>,
  sun: <img src={sunImg} />,
  magGlass: (
    <button className="">
      <img src={magGlass} />
    </button>
  ),
  delivery_address: (
    <p className="w-full">
      <span className="text-neutral-600 pl-2">Доставим в</span> г. Челябинск,
      ул. Ворошилова, 12
    </p>
  ),
  special: (
    <p className=" text-xl font-montserrat font-medium pl-2">
      Спецпредложения для вас
    </p>
  ),
  menu: <p className=" text-xl font-montserrat font-medium">Меню</p>,
  sale: <img src={saleImg} />,
  menu_sets: <MenuButton img={setsImg} text="Сеты" />,
  menu_sushi: <MenuButton img={sushiImg} text="Суши" />,
  menu_soup: <MenuButton img={soupImg} text="Супы" />,
  sushi1: <img src={sushiImg1} />,
  set1: <p className=" text-xl font-montserrat font-medium">Сет №1</p>,
  set1cal: <p className="font-montserrat">15 шт. / 395 г. / 183.5 ккал.</p>,
  price1: (
    <button className="px-2 py-1 bg-amber-400 rounded-lg">899 &#8381;</button>
  ),
  sushi2: <img src={sushiImg2} />,
  set2: <p className=" text-xl font-montserrat font-medium">Сет №2</p>,
  set2cal: <p className="font-montserrat">15 шт. / 443 г. / 163.1 ккал.</p>,
  price2: (
    <button className="px-2 py-1 bg-amber-400 rounded-lg">999 &#8381;</button>
  ),
  menuBtn: <NavButton img={menuImg}>Меню</NavButton>,
  profileBtn: <NavButton img={profileImg}>Профиль</NavButton>,
  contactsBtn: <NavButton img={contactsImg}>Контакты</NavButton>,
  cartImg: <NavButton img={cartImg}>Корзина</NavButton>,
}

export const DroppableList = [
  [
    [1, 2],
    [1, 3],
  ],
  [[2, 7], [1, 3], "left"],
  [
    [-2, -1],
    [1, 3],
  ],
  [[1, -1], [3, 5], "left", "start"],
  [[1, -1], [6, 8], "left"],
  [
    [1, -1],
    [8, 15],
  ],
  [
    [1, 4],
    [16, 18],
  ],
  [
    [1, 5],
    [18, 21],
  ],
  [
    [5, 9],
    [18, 21],
  ],
  [
    [9, 13],
    [18, 21],
  ],
  [
    [1, 6],
    [22, 28],
  ],
  [
    [6, 9],
    [22, 24],
  ],
  [
    [6, -1],
    [24, 26],
  ],
  [
    [-4, -1],
    [26, 28],
  ],
  [
    [1, 6],
    [29, 35],
  ],
  [
    [6, 9],
    [29, 31],
  ],
  [
    [6, -1],
    [31, 33],
  ],
  [
    [-4, -1],
    [33, 35],
  ],
  [
    [1, 4],
    [-5, -1],
  ],
  [
    [4, 7],
    [-5, -1],
  ],
  [
    [7, 10],
    [-5, -1],
  ],
  [
    [10, 13],
    [-5, -1],
  ],
]
