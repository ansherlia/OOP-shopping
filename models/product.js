import Display from "./Display.js";

class Card extends Display {
	constructor(parent, products, asghar) {
		super(parent);

		this.products = products;
		this.asghar = asghar;
	}
	showProducts() {
		this.products.forEach((p) => this.creatCard(p));
	}
	creatCard(data) {
		const divEle = document.createElement("div");
		const image = this.productImg(data);
		const infoProduct = this.productInfo(data);

		divEle.innerHTML = image;
		divEle.innerHTML += infoProduct;
		this.parent.appendChild(divEle);
	}

	productInfo(data) {
		const { name, id, price } = data;
		const infoJSX = `
            <div id="infoEle">
                <h3>${name}</h3>
                <div id="priceEle">
                    <span>${price} $</span>
                    <button data-id=${id}>+</button>
                </div
            </div>
            
        `;
		return infoJSX;
	}
	handleEvent(event) {
		const element = event.target;
		if (element.tagName === "BUTTON") {
			this.addToCard(element.dataset.id);
		}
	}
	addToCard(id) {
		const productAdd = this.products.find((p) => p.id === +id);
		this.asghar.product.push(productAdd);
		this.asghar.showProduct();
	}
}
export { Card };
