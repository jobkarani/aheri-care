export class Product {
    constructor(public name:string, 
        public slug:string,
        public image:ImageBitmap,
        public image2:ImageBitmap,
        public image3:ImageBitmap,
        public description:string,
        public new_price:Float32Array,
        public old_price:Float32Array,
        public is_available:boolean,
        public category:string ){

        }
}
