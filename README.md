# goit-js-hw-06
�������� ������
������ ����������� goit-js-hw-06.
��� ����� �������� ������ ���� ��� ������: �� �������� ����� � ������� �������� �� GitHub Pages.
������� ��������� ������ �� �� (������ �������� �������� HTML �������).
��� ��������� ����� �������� �������, � ������� ���� ������ � ��������������.
����� ���������� � ������� ��������, ������������.
��� �������������� Prettier.
������� �������� ��� ������� �������. �������� �� ���� � ������.

������� 1
� HTML ���� ������ ��������� ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

������ ������ �������:

��������� � ������� � ������� ���������� ��������� � ul#categories, �� ���� ��������� li.item.
��� ������� �������� li.item � ������ ul#categories, ������ � ������� � ������� ����� ��������� �������� (���� <h2>) � ���������� ��������� � ��������� (���� ��������� � ���� <li>).
� ����������, � ������� ����� �������� ����� ���������.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

������� 2
� HTML ���� ������ ������ ul#ingredients.

<ul id="ingredients"></ul>

� JavaScript ���� ������ �����.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

������ ������, ������� ��� ������� �������� ������� ingredients:

������� ��������� ������� <li>. ���������� ��������� ����� document.createElement().
������� �������� ����������� ��� ��� ��������� ����������.
������� �������� ����� item.
����� ���� ������� ��� <li> �� ���� �������� � ������ ul#ingredients.
������� 3
������ ������ ��� �������� ������� ����������� �� ������� ������. � HTML ���� ������ ul.gallery.

<ul class="gallery"></ul>

��������� ������ �������� images ��� �������� ��������� <img> ��������� � <li>. ��� �������� �������� ��������� ��������� ������ � ����� insertAdjacentHTML().

��� �������� ������� ������ ����������� � DOM �� ���� �������� �������.
������ ����������� ���������� ������� ������������ ��� ������� ����� CSS ������.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

������� 4
������� ������� �� ����� � ������, �������, ��� �����, ������ ����������� � ��������� ��� �������� �� �������.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

������ ���������� counterValue � ������� ����� ��������� ������� �������� �������� � ������������� � ��������� 0.
������ ��������� ������ �� ������, ������ ������� ���������� ��� �������� �������� ���������.
�������� ��������� ����� ��������� ���������� counterValue.
������� 5
������ ������ �������, ��� ������ ������ � ������ input#name-input (������� input), ����������� ��� ������� �������� � span#name-output. ���� ����� ������, � ����� ������ ������������ ������ "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

������� 6
������ ������, ������� ��� ������ ������ �� ������ (������� blur), ��������� ��� ���������� �� ���������� ���������� �������� ��������.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

������� �������� ������ ���� � ������, ����������� � ��� �������� data-length.
���� ������� ���������� ���������� ��������, �� border ������ ���������� ������, ���� ������������ - �������.
��� ���������� ������, ��������� CSS-������ valid � invalid, ������� �� ��� �������� � �������� ����� �������.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

������� 7
������ ������, ������� ��������� �� ��������� �������� input#font-size-control (������� input) � �������� ������-����� span#text �������� �������� font-size. � ���������� ��� �������������� �������� ����� �������� ������ ������.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

������� 8
������ ������ ���������� ������ ������.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

��������� �������� ����� form.login-form ������ ���� �� ������� submit.
��� �������� ����� �������� �� ������ ���������������.
���� � ����� ���� ������������� ����, ������ alert � ��������������� � ���, ��� ��� ���� ������ ���� ���������.
���� ������������ �������� ��� ���� � �������� �����, ������ �������� ����� � ������, ��� ��� ���� ����� ������ ��������, � �������� ���� - ��������� ��������. ��� ������� � ��������� ����� ��������� �������� elements.
������ ������ � ���������� ������� � ������� � ������ �������� ����� ����� ������� reset.
������� 9
������ ������, ������� �������� ����� ���� �������� <body> ����� ������ ����� ��� ����� �� button.change-color � ������� �������� ����� � span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

��� ��������� ���������� ����� ��������� ������� getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

������� 10 (��������� �� �����������)
������ ������ �������� � ������� ��������� ���������. ������������ ������ ���������� ��������� � input � �������� ������ �������, ����� ���� ���������� ���������. ��� ������� �� ������ ��������, ��������� ��������� ���������.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

������ ������� createBoxes(amount), ������� ��������� ���� �������� - �����. ������� ������� ������� <div>, ������� ������� � amount � ��������� �� � div#boxes.

������� ������ ������� <div> - 30px �� 30px.
������ ������� ����� �������, ������ ���� ���� � ���� ����������� �� 10px.
��� �������� ������� ����� ��������� ���� ���� � ������� HEX. ��������� ������� ������� getRandomHexColor ��� ��������� �����.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

������ ������� destroyBoxes(), ������� ������� ���������� div#boxes, ��� ����� ������ ��� ��������� ��������.