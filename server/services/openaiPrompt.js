const createNewPrompt = async ({
  work,
  name,
  advantages,
  products,
}) => `write for me a website title for a ${work}, write a catchy title with 7 words without the name of the person,
        also write a subtitle for this website with 10 words.
      
        also, ill give you 3 advantages of the bussniess, write me a short title for each one of them and small description about each one of them : 
        advantages:
        advantage 1: ${advantages[0]}
        advantage 2 : ${advantages[1]}
        advantage 3 : ${advantages[2]},

        also ill give you 3 products, 
        write a short title for each product(no more then 2 words) and also write 20 words for each product:
        products:
        prodcut 1: ${products[0]}
        prodcut 2 : ${products[1]}
        prodcut 3 : ${products[2]},

        also write a short paragraph and a title that explains about ${name} and why you should pick work with him. 

        also write a keyword to search an image in unsplah that describe the ${work} as best as possible, no more that 2 words long.
        
        VERY IMPORTANT : dont include "${name}" in any title or description of the advtanges or products
        write it in this template as javscript object with key value pairs, make those as key values:
        {
        "web_title" :,
        "keyword_for_image": ,
        "web_subtitle": ,
        "about_me_title": ,
        "about_me_paragraph": ,
        "advantage_1_title" : ,
        "advantage_1_description" : ,
        "advantage_2_title" : ,
        "advantage_2_description" : ,
        "advantage_3_title" : ,
        "advantage_3_description" : ,
        "product_1_title" : ,
        "product_1_description" : ,
        "product_2_title": ,
        "product_2_description" : ,
        "product_3_title" : ,
        "product_3_description" : 
        }
        
        make it as short as possible, dont write anything else except the template i gave you it most be in json formart with key value pairs and ',' between them, MOST!
        .
        `;

export default createNewPrompt;
