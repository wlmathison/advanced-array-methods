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


// ************************************************************************

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

/***********************************************************************/

// const manufacturingBusinesses = businesses.filter(business => {
//     let manufacturing = false

//     if (business.companyIndustry === "Manufacturing") {
//         manufacturing = true
//     }

//     return manufacturing
// })

// outEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

// manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//     `
//     outEl.innerHTML += "<hr/>"
// });

// **********************************************************************

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";
// });

// *******************************************************************

// Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number

// {
//     "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//     "phoneNumber": "235.266.6278"
// }

// My code:
// const agents = businesses.map(business => {
//     let agent = {};
//     agent.fullName = business.purchasingAgent.nameFirst + " " +business.purchasingAgent.nameLast;
//     agent.company = business.companyName;
//     agent.phoneNumber = business.phoneWork;
//     return agent;
// })

// Better code:
// const agents = businesses.map(business => {
//     return {
//         fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//         company: business.companyName,
//         phoneNumber: business.phoneWork
//     }

// })

// console.log(agents)

// My code :
// agents.forEach(agent => {
//     outEl.innerHTML += `
//   <h2>${agent.fullName}</h2>
//   <h3>${agent.company}</h3>
//   <h3>${agent.phoneNumber}</h3>
//   `;
//     outEl.innerHTML += "<hr/>";
// });

// Jisie's code
// agents.forEach(agent => {
//     outEl.innerHTML += `<h2>${agent.fullName}</h2>`;
//     outEl.innerHTML += `<p>${agent.company}</p>`;
//     outEl.innerHTML += `<p>${agent.phoneNumber}</p>`;
//     outEl.innerHTML += "<hr/>";
// })

// ************************************************************************

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

// ******************************************************************************

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundAgent = businesses.find(
//                 business =>
//                     business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 <p>${foundAgent.companyName}</p>
//                 <p>${foundAgent.phoneWork}</p>
//                 </section>
//             `;
//         }
//     });

// ******************************************************************

// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundAgent = businesses.find(
//                 business =>
//                 business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
//                 </h2>
//                 <section>
//                 <p>${foundAgent.companyName}</p>
//                 <p>${foundAgent.phoneWork}</p>
//                 </section>
//             `;
//         }
//     });

// ********************************************************************************************

// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     let totalOrders = 0
//     business.orders.forEach(order => totalOrders += order)


//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

// ************************************************************************************************

// businesses.forEach(business => {
//     /* CALCULATE ORDER SUMMARY */
//     let totalOrders = business.orders.reduce(
//         (currentTotal, nextValue) => currentTotal += nextValue,
//         0
//     )


//     outEl.innerHTML += `
//         <h2>
//             ${business.companyName}
//             ($${totalOrders.toFixed(2)})
//         </h2>
//         <section>
//             ${business.addressFullStreet}
//         </section>
//         <section>
//             ${business.addressCity},
//             ${business.addressStateCode}
//             ${business.addressZipCode}
//         </section>
//     `;
//     outEl.innerHTML += "<hr/>";
// });

// *************************************************************************************************

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(totalRainfall)

// *************************************************************************************************

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((taco, quesidilla) => taco + " " + quesidilla)

console.log(sentence)

// *************************************************************************************************