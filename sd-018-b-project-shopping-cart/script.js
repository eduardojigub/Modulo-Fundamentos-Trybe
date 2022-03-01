// const { fetchProducts } = require('./helpers/fetchProducts');
const includeItemList = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(includeItemList.innerHTML);
}

function emptyCart() {
  const list = document.querySelector('.cart__items');
  list.innerHTML = '';
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', emptyCart);
  return li;
}

const buyingCart = async (id) => {
  const objectsItem = await fetchItem(id);
  const itemList = {
    sku: objectsItem.id,
    name: objectsItem.title, 
    salePrice: objectsItem.price,
  };
  includeItemList.appendChild(createCartItemElement(itemList));
  saveCartItems(includeItemList.innerHTML);
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const getButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  getButton.addEventListener('click', () => buyingCart(sku));
  section.appendChild(getButton);
  return section;
}

async function buildProductItem(product) {
  const getSection = document.querySelector('.items');
  const productsList = await fetchProducts(product);
  productsList.forEach((element) => {
    const productObj = { 
      sku: element.id, 
      name: element.title, 
      image: element.thumbnail,
     };
    const items = createProductItemElement(productObj);
    getSection.appendChild(items);
  });
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

const refreshPage = () => {
  const getResult = getSavedCartItems();
  includeItemList.innerHTML = getResult; 
};

const restoreEventListener = () => {
  includeItemList.addEventListener('click', cartItemClickListener);
 };
 
window.onload = async () => { 
  await buildProductItem('computador');
  refreshPage();
  restoreEventListener();  
};
