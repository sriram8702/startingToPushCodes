const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};


module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id=id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if(this.id){
        const existingProductIndex= products.findIndex(prod=> prod.id===this.id);
        const updatedProducts=[...products];
        updatedProducts[existingProductIndex]=this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      }
      else{
        this.id=Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
        });
      }
      
    });
  }
  static delete(id){
    fs.readFile(p, (err, data) => {
      if (err) {
        console.log(err);
      }
      let json = JSON.parse(data);
      json = json.filter(obj => obj.id !== id);
      fs.writeFile(p, JSON.stringify(json, null, 2), err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Object removed successfully');
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id,cb){
    getProductsFromFile(products=>{
      const product=products.find(p => p.id === id);
      cb(product);
    })
  }
};
