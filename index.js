// Seu código aqui!

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

//console.log(Object.keys(products))

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!

function filterProducts(category) {
  let vetor = []
  for(let i = 0; i < products.length; i++) {
    for(let j = 0; j < Object.values(products)[i].tags.length; j++) {
      if (Object.values(products)[i].tags[j] === category) {
        vetor.push(Object.values(products)[i])
      } 
    }
  }
  return vetor
}


console.log(filterProducts('apple'))
