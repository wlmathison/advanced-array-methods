const outEl = document.querySelector("#output")
// outEl.innerHTML = "<h1>Active Businesses</h1>"

// let zipCodeProperty = "addressZipCode";

// businesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     <section>
//     ${business.addressCity}, ${business["addressStateCode"]} ${business[zipCodeProperty]}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });

// Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.

// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false

//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }

//     return inNewYork
// })

// outEl.innerHTML = "<h1>New York Businesses</h1>"

// newYorkBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
// });

const manufacturingBusinesses = businesses.filter(business => {
    let manufacturing = false

    if (business.companyIndustry === "Manufacturing") {
        manufacturing = true
    }

    return manufacturing
})

outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

manufacturingBusinesses.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
    `
    outEl.innerHTML += "<hr/>"
});