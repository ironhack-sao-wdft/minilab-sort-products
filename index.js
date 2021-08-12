// Seu código aqui!
function filteredFunction (category){ 
  filteredProducts = [];

  for (let product of products) {
    if (product.tags.includes(category)) {
      filteredProducts.push(product);

    }
  }
  return filteredProducts;
}

const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!
filteredFunction('apple');