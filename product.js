const product = [
    {
        productName: "Black handbag",
        price: "$40",
        image:'Black handbag.jpg',
    },
    {
        productName: "Black leather jacket",
        price: "$50",
        image: 'Black leather jacket.jpg',
    },
    {
        productName: "Blue fashion bag",
        price: "$35",
        image: 'Blue fashion bag.jpg',
    },
    {
        productName: "Brightening Cream",
        price: "$65",
        image:'Brightening Cream.jpg',
    },
    {
        productName: "Face-cream",
        price: "$47",
        image: 'Face-cream.jpg',
    },
    {
        productName: "Laura-chouette-red lipstick",
        price: "$20",
        image: 'Laura-chouette-red lipstick.jpg',
    },
    {
        productName: "Mock-Up cosmetic",
        price: "$62",
        image:'Mock-Up cosmetic.jpg',
    },
    {
        productName: "Pink leisara bag",
        price: "$30",
        image:'Pink leisara bag.jpg',
    },
    {
        productName: "Red heels",
        price: "$40",
        image:'Red heels.jpg',
    },
    {
        productName: "Silver fashion bag",
        price: "$45",
        image:'Silver fashion bag.jpg',
    },
    {
        productName: "Timberland",
        price: "$48",
        image:'Timberland.jpg',
    },
    {
        productName: "Alex-quezada-heels",
        price: "$25",
        image:'Alex-quezada-heels.jpg',
    },
    {
        productName: "Ameli Zurich Handbag ",
        price: "$35",
        image:'Ameli Zurich Handbag.jpg',
    },
    {
        productName: "Arno-senoner-Pink Handbag",
        price: "$40",
        image:'Arno-senoner-Pink Handbag.jpg',
    },
    {
        productName: "Arno-senoner-White Handbag",
        price: "$75",
        image:'Arno-senoner-White Handbag.jpg',
    },
    {
        productName: "Cosmetic Mockup",
        price: "$65",
        image:'Cosmetic Mockup.jpg',
    },
    {
        productName: "Emily heels",
        price: "$55",
        image:'Emily heels.jpg',
    },
    {
        productName: "Fashion Handbag",
        price: "$66",
        image:'Fashion Handbag.jpg',
    },
    {
        productName: "GG Handbag",
        price: "$46",
        image:'GG Handbag.jpg',
    },
    {
        productName: "Jimmy Choo Heels",
        price: "$36",
        image:'Jimmy Choo Heels.jpg',
    },
    {
        productName: "Umbro Kaixi Brown handbag",
        price: "$49",
        image:'Umbro Kaixi Brown handbag.jpg',
    },
    {
        productName: "Umbro Kaixi pink handbag",
        price: "$45",
        image:'Umbro Kaixi pink handbag.jpg',
    },
    {
        productName: "Vitamin-C",
        price: "$85",
        image:'Vitamin-C.jpg',
    },
    {
        productName: "Zara Handbag",
        price: "$45",
        image:'Zara Handbag.jpg',
    },
    
];


let productText = document.getElementById('product');
productText.innerHTML = product.map(function(value,index,array){

      return `

  <div class="eachProduct bg-white shadow-xl rounded-2xl p-5 flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition duration-300" >
     <img src="images/${value.image}"alt="${value.productName}" class="w-48 h-48 object-cover rounded-lg mb-4">
     <p class="itemName text-lg font-semibold text-gray-800">${value.productName}</p>
     <p class="text-gray-600 mb-4">${value.price}</p>
     <div class="flex flex-col sm:flex-row justify-center gap-3 w-full">
     <button class="flex-1 px-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add to cart</button>
    <button class="flex-1 px-2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Buy now</button>
    </div>
        </div>


       `

}).join("");