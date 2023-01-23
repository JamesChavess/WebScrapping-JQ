let tableToJsonObj = (table) => {
    let jsonObj = {};
    $.each([...table], (i,val) => jsonObj[`${val.innerText.split('\t')[0]}`] = `${val.innerText.split('\t')[1].split('\n').join(' ')}`);
    return jsonObj
},
productData = {
    product_name: $('#productTitle').text(),
    color : $('.a-row .selection').text(),
    status : $('#availability span').text(),
    product_image : [...$('span#a-autoid-9-announce img')][0].src,
    about_items: jQuery.map( [...$('div#feature-bullets ul li')],  bullet => bullet = bullet.innerText),
    additional_information : tableToJsonObj($('table#productDetails_detailBullets_sections1 tr')),
    technical_details : tableToJsonObj($('table#productDetails_techSpec_section_1 tr')),
    product_details: tableToJsonObj($('table.a-normal tr')) ,
}
console.log(productData)