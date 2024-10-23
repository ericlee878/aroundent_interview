const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // Changed from 5000 to 3001

// Middleware
app.use(cors());
app.use(express.json());

// Initial Product List
let products = [
  {
    id: 1,
    name: 'Organic Almond Milk',
    description: 'Unsweetened almond milk, rich in vitamins and calcium. Perfect for lactose-intolerant individuals.',
    price: '$3.99',
    image: 'https://cdn.britannica.com/77/200377-050-4326767F/milk-splashing-glass.jpg',
  },
  {
    id: 2,
    name: 'Whole Wheat Bread',
    description: 'Freshly baked whole wheat bread made with 100% whole grains.',
    price: '$2.49',
    image: 'https://sallysbakingaddiction.com/wp-content/uploads/2024/01/whole-wheat-bread-3.jpg',
  },
  {
    id: 3,
    name: 'Free-Range Eggs (12-pack)',
    description: 'Organic, free-range eggs from locally raised chickens.',
    price: '$4.29',
    image: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2012/09/FPG_06-EggsCarton_FeaturedImage.jpg',
  },
  {
    id: 4,
    name: 'Green Apples (1 lb)',
    description: 'Crisp, juicy green apples perfect for snacking or baking.',
    price: '$1.99',
    image: 'https://cdn.mos.cms.futurecdn.net/uW9uHvW5LUYBaoZuSyEsXP-1200-80.jpg',
  },
  {
    id: 5,
    name: 'Peanut Butter (16 oz)',
    description: 'Creamy peanut butter made from roasted peanuts with no added sugar.',
    price: '$3.49',
    image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/1FB4CC95-9604-4B9F-8392-1CC11636192B/Derivates/698118cd-d2c0-477b-bca9-3700010291d3.jpg',
  },
  {
    id: 6,
    name: 'Spaghetti Pasta (16 oz)',
    description: 'Classic spaghetti pasta made from durum wheat semolina.',
    price: '$1.69',
    image: 'https://www.theseasonedmom.com/wp-content/uploads/2024/08/crockpot-spaghetti-8.jpg',
  },
  {
    id: 7,
    name: 'Cheddar Cheese (8 oz)',
    description: 'Aged cheddar cheese with a sharp flavor, perfect for sandwiches and snacks.',
    price: '$4.99',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuTvz-e72GSayUnXtBiueP7zTbsE2ApaRFw&s',
  },
  {
    id: 8,
    name: 'Orange Juice (1 qt)',
    description: '100% pure orange juice with no added sugar or preservatives.',
    price: '$3.79',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Orangejuice.jpg',
  },
  {
    id: 9,
    name: 'Ground Coffee (12 oz)',
    description: 'Rich, aromatic ground coffee, medium roast, made from Arabica beans.',
    price: '$7.99',
    image: 'https://kaapimachines.com/wp-content/uploads/2022/12/grinder-blog-1.webp',
  },
  {
    id: 10,
    name: 'Chocolate Chip Cookies (12-pack)',
    description: 'Freshly baked chocolate chip cookies, perfect for a sweet treat.',
    price: '$4.49',
    image: 'https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg',
  }
];


// GET Products Route
app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE Product Route
app.delete('/api/products/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const originalLength = products.length;
    products = products.filter((product) => product.id !== id);
    
    if (products.length === originalLength) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
