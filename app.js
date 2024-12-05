import fetchData from "./utils/httpReq.js";
import { Card } from "./models/product.js";
import Product from "./models/Cart.js";
const sectionCard = document.getElementById("card");
const cardListNode = document.getElementById("card-list");
const totalPriceNode = document.getElementById("total-price").querySelector("span");
const renderData = async () => {
	const products = await fetchData();
	const productInstance = new Product(cardListNode, totalPriceNode);
	const cardInstance = new Card(sectionCard, products, productInstance);
	cardInstance.showProducts();
};
document.addEventListener("DOMContentLoaded", renderData);
