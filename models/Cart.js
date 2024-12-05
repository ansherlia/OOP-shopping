import Display from "./Display.js";

class Product extends Display {
	constructor(parent, price) {
		super(parent);
		this.price = price;
		this.product = [];
		this.toShow = [];
	}
	showProduct() {
		this.toShow = [...new Set(this.product)];
		this.parent.innerHTML = "";
		this.toShow.forEach((product) => {
			const qty = this.product.filter((p) => p.id === product.id).length;
			this.creatCard(product, qty);
			this.totalPrice();
		});
	}

	productInfo(data) {
		const { name, price } = data;
		const infoJSX = `
            <div id="info-ele">
                <p>${name}</p>
                <span>${price} $</span>
            </div>
        `;
		return infoJSX;
	}
	productControl(data, qty) {
		const { id } = data;
		const cotnrolJSX = `
            <div id="control-element">
                <div>
                    <button data-id=${id}>-</button>
                    <span>${qty}</span>
                    <button data-id=${id}>+</button>
                </div>
                <button data-id=${id} id="remove">Remove</button>
            </div>
        `;
		return cotnrolJSX;
	}
	handleEvent(event) {
		const element = event.target.tagName;
		const type = event.target.innerText;
		const id = event.target.dataset.id;
		console.log(id);
		if (element !== "BUTTON") return;
		switch (type) {
			case "+":
				this.increase(id);
				break;
			case "-":
				this.decrease(id);
				break;
			case "Remove":
				this.remove(id);
			default:
				break;
		}
	}
	increase(id) {
		const founder = this.product.find((p) => p.id === +id);
		this.product.push(founder);
		this.showProduct();
	}
	decrease(id) {
		const founder = this.product.findIndex((p) => p.id === id);
		this.product.splice(founder, 1);
		this.showProduct();
		if (!this.product.length){
			this.price.innerHTML = "0 $"
		}
	}
	remove(id) {
		const filtering = this.product.filter((p) => p.id !== +id);
		this.product = filtering;
		this.showProduct();
		this.price.innerHTML = "0 $";

	}
	totalPrice() {
		const total = this.product.reduce((acc, cur) => (acc += cur.price), 0);
		this.price.innerHTML = `${total} $`;
	}
}
export default Product;
