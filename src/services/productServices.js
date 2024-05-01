import { instance, protectedInstance } from './instance';

const productServices={
  getProducts:async()=>{
    return protectedInstance.get('/products')
  }
};

export default productServices;