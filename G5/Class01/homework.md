## Exercise: Apply Discounts on Products

### Description:

Write a function called `applyDiscounts` that takes three parameters. The first parameter is the `productArray`, an array of products, the second parameter `discountPercentage`, which is a number representing the percentage discount to be applied to the products, and an optional third parameter `productId`, which is the ID of the product to apply the discount to. The function should apply the discount to products with a price greater than a certain threshold and return a new array of products with their prices adjusted accordingly. If a `productId` is provided, the discount should only be applied to that specific product, and the price treshold should be ignored, meaning no matter the price of the product the discout should be applied.

### Requirements:

- If the function is called with an empty `productArray`, it should return an empty array.
- The function should only apply discounts to products with a price greater than $100.
- If `productId` is provided, the discount should only be applied to that specific product. And the function should return only that object, not an array of objects.
- If `productId` is provided but no product is found with that ID, the function should return an error.
- If `productId` is not provided, the function should return a new array of products with their prices adjusted, or an error message if applicable.

## Example:

```javascript
// Feel Free to change/modify the products array
const products = [
    { id: 1, name: "Product A", price: 150 },
    { id: 2, name: "Product B", price: 90 },
    { id: 3, name: "Product C", price: 120 },
    { id: 4, name: "Product D", price: 80 },
    { id: 5, name: "Product E", price: 200 }
];

console.log(applyDiscounts(products, 10, 1));

// OUTPUT:
[
    { id: 1, name: "Product A", price: 135 }
]

console.log(applyDiscounts(products, 10));

// OUTPUT:
[
    { id: 1, name: "Product A", price: 135 },
    { id: 2, name: "Product B", price: 90 },
    { id: 3, name: "Product C", price: 108 },
    { id: 4, name: "Product D", price: 80 },
    { id: 5, name: "Product E", price: 180 }
]
```

