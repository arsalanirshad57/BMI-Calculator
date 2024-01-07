const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector(".height").value)
    const weight = parseInt(document.querySelector(".weight").value)
    const results = document.querySelector(".results")
    const mainhead = document.querySelector(".main-head")
    console.log(height);

    if (height == '' || height < 1 || isNaN(height)) {
        results.innerHTML = "Please inter a Valid Height"
    } else if (weight == '' || weight < 1 || isNaN(weight)) {
        results.innerHTML = "Please inter a Valid Weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `${bmi}`
    }

    if (results.innerHTML > 18.6 && results.innerHTML < 24.9) {
        mainhead.innerHTML = " Congratulation You are Normal Weight "
    } else if (results.innerHTML < 18.6) {
        mainhead.innerHTML = " Ooophs You are Under Weight"
    } else if (results.innerHTML < 24.9) {
        mainhead.innerHTML = "You are Over Weight"
    }
})


//     function errorCode() {
        
//     const heightInput = document.querySelector(".height")
//     const weightInput = document.querySelector(".weight")
//     const heightLabel = document.querySelector("#heightLabel")
//     const WeightLabel = document.querySelector("#WeightLabel")
//     let  finalHeight = ''
//     let finalWeight = ''
//     const result = document.querySelector(".result")

//     heightInput.addEventListener("input", function (event) {
//          finalHeight = event.target.value
//         heightLabel.textContent = `${finalHeight}`;
//     })

//     weightInput.addEventListener("input", function (event) {
//          finalWeight = event.target.value;
//         WeightLabel.textContent = `${finalWeight}`
//     })
//     const height = parseFloat(finalHeight);
//     const weight = parseFloat(finalWeight);
//     if (!isNaN(height) && !isNaN(weight)) {
//         const bmi = (weight / (height * height) / 1000).toFixed(2);
//         result.textContent = `BMI: ${bmi}`;
//         console.log(bmi, 'bmi');
//     }
// }