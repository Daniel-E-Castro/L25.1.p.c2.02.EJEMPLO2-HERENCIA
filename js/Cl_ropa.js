import Cl_articulo from "./Cl_articulo.js"

export default class Cl_ropa extends Cl_articulo {
    constructor(nombre, costo, color) {
        super(nombre, costo);
        this.color = color;
    }
porcDescuento(){
<<<<<<< HEAD
    if(this.color === 3)
        return 0.10
    else
    return 0
=======
    return this.color === 3 ? 10 : 0;
>>>>>>> e10d2b9dcc9972f538fa83da4884e083ad1034e7
}
}