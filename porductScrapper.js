let jsonObj = {},

tableToJsonObj = (table) => {
    [...table].forEach(tr => {
        let td = tr.innerText.split('\t')
        jsonObj[`${td[0]}`] = `${td[1].split('\n').join(' ')}`
    });
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

$('head').append('<a download="productData.json"></a>')
$('a[download="productData.json"]').attr('href', window.URL.createObjectURL(new Blob([JSON.stringify(productData,null,3)],{type:'text'})))
$('a[download="productData.json"]')[0].click()