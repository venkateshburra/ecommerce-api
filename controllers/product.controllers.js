const products = [
  { id: 1, name: "T-shirt", price: 19.99, category: "Apparel" },
  { id: 2, name: "Sneakers", price: 49.99, category: "Footwear" },
  { id: 3, name: "Hat", price: 14.99, category: "Apparel" }
];

// GET /products or /products?category=Apparel
export const getAllOrFilteredProducts = (req, res) => {
  const { category } = req.query;

  if (category) {
    const filtered = products.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );

    if (filtered.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No products found in this category',
        data: []
      });
    }

    return res.json({
      success: true,
      message: `Fetched products in category: ${category}`,
      data: filtered
    });
  }

  res.json({
    success: true,
    message: 'Fetched all products',
    data: products
  });
};

// GET /products/:id
export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
      data: null
    });
  }

  res.json({
    success: true,
    message: 'Fetched product by ID',
    data: product
  });
};

// POST /products
export const createProduct = (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, price, category) are required',
      data: null
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: newProduct
  });
};
