
class ProductService {
    
    findAll(){
        return Promise.resolve('Products')
    }
}
module.exports = new ProductService()