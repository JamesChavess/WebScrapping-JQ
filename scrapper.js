//just making sure Jquery is working.... 
const jqu = document.createElement('script'); 
jqu.src = "https://code.jquery.com/jquery-3.6.3.slim.min.js",
document.head.appendChild(jqu);

let imgUrl = [...$('span#a-autoid-9-announce img')][0].src, // image url
additionalInformation = {},// additional info {}
technicalDetails = {},// technical details {}
aboutItems = jQuery.map( [...$('div#feature-bullets ul li')],  bullet => bullet = bullet.innerText); //about Product bullets
productDetails = {}, // product details {}
productName = $('#productTitle').text(), //title 
status = $('#availability span').text(), //status
color = $('.a-row .selection').text(), //color

tableToJson = (table,obj) => { // function to create additional info, technical details & product details 
    $.each([...table], (i,val) => {
        let td = val.innerText.split('\t');
        obj[`${td[0]}`] = `${td[1].split('\n').join(' ')}`
    });
}
tableToJson($('table#productDetails_detailBullets_sections1 tr'),additionalInformation) // additional info
tableToJson($('table#productDetails_techSpec_section_1 tr'),technicalDetails) // technical details {}
tableToJson($('table.a-normal tr'),productDetails) // product details

let productData = { //JSON info assigned
    product_image : imgUrl,
    additional_information : additionalInformation,
    technical_details : technicalDetails,
    about_items: aboutItems,
    product_details: productDetails,
    product_name: productName,
    color : color,
    status : status
}
let downloadJson = ()=>{ // download JSON file 
    $('head').append('<a download="productData.json"></a>')
    $('a[download="productData.json"]').attr('href', window.URL.createObjectURL(new Blob([JSON.stringify(productData,null,3)],{type:'text'})))
    $('a[download="productData.json"]')[0].click()
     }

downloadJson()
