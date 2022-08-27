const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];

// 1
    let result_1 = library.find(item => item.name === 'Steve Jobs');
// 2

    library.readingStatus = false;
//3

    let result_3 = library.map(item=> {
        return {
            title: item.title
        }
    })
// 4

    let result_4 = library.filter(item => item.title.includes('the'))
//5

    library.forEach(item => item.price = 100000);

// 6

var khachhang={
    author: 'Huyen Chip', 
    title: 'Xach ba lo len va di', 
    readingStatus: false, 
    price: 110000
};
library.push(khachhang); 
