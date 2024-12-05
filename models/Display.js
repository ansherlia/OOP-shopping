class Display {
	constructor(parent) {
		this.parent = parent;
		this.parent.addEventListener("click", this);
	}
	creatCard(data, qty) {
		const divEle = document.createElement("div");
		const imgEle = this.productImg(data);
        const inofEle = this.productInfo(data);
        divEle.innerHTML = imgEle;
        divEle.innerHTML += inofEle;
		if (this.constructor.name === "Product") {
			const controlData = this.productControl(data, qty);
			divEle.innerHTML += controlData;
		}
		this.parent.appendChild(divEle);
	}
    productImg(data) {
		const { image, alt } = data;
		const imgJSX = `
            <img src=${image} alt=${alt}/>
        `;
		return imgJSX;
	}
}
export default Display;
