const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include:{
      model: Product,
      attributes:["product_name",'price',"stock","category_id"]
    }
  }).then(data=>res.json(data))
  // be sure to include its associated Products
 
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where:{
      id: req.params.id
    },
    include:{
      model: Product,
      attributes:['category_id','product_name','price',"stock"]
    }
  }).then(data=>res.json(data))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(data=>res.json(data))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(data);})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
      {
      where: {
        id: req.params.id
      }
    })
    .then(data => {
      if (!data) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(data);})
});

module.exports = router;
