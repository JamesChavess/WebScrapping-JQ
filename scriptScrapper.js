//just making sure Jquery is working.... 
const jqu = document.createElement('script'); 
jqu.src = "https://code.jquery.com/jquery-3.6.3.slim.min.js",
document.head.appendChild(jqu);


let imgUrl = [...$('span#a-autoid-9-announce img')][0].src, // image url
additionalInformation = {},// additional info
technicalDetails = {},// technical details
aboutItems = jQuery.map( [...$('div#feature-bullets ul li')],  bullet => bullet = bullet.innerText); //about Product bullets
productDetails = {}, // product details 
productName = $('#productTitle').text(), //title 
status = $('#availability span').text(), //status
color = $('.a-row .selection').text(), //color

tableToJson = (table, obj) => {
    [...table].forEach(tr => { // ask for help help using .each
        let keyValuePairs = tr.innerText.split('\t')
        obj[`${
            keyValuePairs[0]
        }`] = `${
            keyValuePairs[1].split('\n').join(' ')
        }`
    });
}

tableToJson($('table#productDetails_detailBullets_sections1 tr'),additionalInformation)
tableToJson($('table#productDetails_techSpec_section_1 tr'),technicalDetails) 
tableToJson($('table.a-normal tr'),productDetails) 

let productData = {
    product_image : imgUrl,
    additional_information : additionalInformation,
    technical_details : technicalDetails,
    about_items: aboutItems,
    product_details: productDetails,
    product_name: productName,
    color : color,
    status : status
}


// ASIN = $('#productDetails_db_sections').find($('.prodDetAttrValue'))[0].text(),
// dateAvailable = $('#productDetails_db_sections').find($('.prodDetAttrValue'))[1].text()
// aboutItems = $('#feature-bullets ul li').text()
// technicalDetails = $('#productDetails_techSpec_section_1 tbody').text()
// a = $('#productDetails_db_sections').text(),
// reviewCount = $('#productDetails_db_sections').find($('span#acrCustomerReviewText'))[0].text()
// reviewSpecs = $('td span.a-icon-alt')[0].text(),
// rank1 = [...$('table#productDetails_detailBullets_sections1 tr'))[0],
// adInfoTable = [...$('table#productDetails_detailBullets_sections1 tr')] 
// adInfoTable.forEach(tr => {
    //     tRow = tr.text()
    //     keyValuePairs = tRow.split('\t')
    //     additionalInformation[`${
        //         keyValuePairs[0]
        //     }`] = `${
            //         keyValuePairs[1].split('\n').join(' ')
            //     }`
            // });
            
            // technicalDetailsTable = [...$('table#productDetails_techSpec_section_1 tr')] 
            // technicalDetailsTable.forEach(tr => {
                //     tRow = tr.text()
                //     keyValuePairs = tRow.split('\t')
                //     technicalDetails[`${
                    //         keyValuePairs[0]
                    //     }`] = `${
                        //         keyValuePairs[1].split('\n').join(' ')
                        //     }`
                        // });
                        
    // productDetailsTable = [...$('table.a-normal tr')]
    // productDetailsTable.forEach(tr => {
        //     tRow = tr.text()
        //     keyValuePairs = tRow.split('\t')
        //     productDetails[`${
            //         keyValuePairs[0]
            //     }`] = `${
                //         keyValuePairs[1].split('\n').join(' ')
                //     }`
                // });
                
                
                // aboutItems = [...$('div#feature-bullets ul li')].map(bullet =>   bullet = bullet.text()) // about product array
                // splitRow = ()=>{
                //     keyValuePairs = tRow.split('\t')
                //         obj[`${
                //             keyValuePairs[0]
                //         }`] = `${
                //             keyValuePairs[1].split('\n').join(' ')
                //         }`
                // }