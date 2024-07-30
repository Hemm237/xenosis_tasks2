//Get all the Images
const img_arr = [
    '1.png',
    '2.jpg',
    '3.png',
    '4.jpg',
    '5.png',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg'
];

function get_random_img() {
    //Get a random index

    const random_index = Math.floor(Math.random() * img_arr.length);

    //Get an image at the random index
    selected_image = img_arr[random_index];

    //Display the image
    document.getElementById("image_shower").src=`./images/${selected_image}`;

    document.querySelector(".head").style.display = "none";
    
};