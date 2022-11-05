# ORM-ECommerce-Backend
# Authors

Allen Klein
- [Link to Video](https://watch.screencastify.com/v/xd42bg6XermxK3KfwQ70)

- [Link to Github Repository](https://github.com/allen-ek/ORM-ECommerce-Backend)

## Why?
I wanted to learn more about how to use sequilze alongside mysql to handle data. Which would be able to fetch update and destroy data.

## What I learned
I learned how to use Node.js, Express npm to serve client side data as well as how to incorparate a server to fetch and host the data for 
the ecommerce database. I also learned how to create html and api paths to handle requests and how to respond to these requests.
## Technologies Used
Bootstrap
Express
Node.js
CSS
HTML
Heroku
Github

## Code Snippet
```html
Product.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull:false

    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull:false,
      validate:{
        isDecimal:true
      },

    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue:10,
      validate:{
        isDecimal: true
      },
    },
    category_id:{
      type: DataTypes.INTEGER,
      references:{
        model:"category",
        key:"id"
      }
    }
    
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
```
The code snippet above was the code using sequlize to create a model with table and columns  in conjuction with mysql.
