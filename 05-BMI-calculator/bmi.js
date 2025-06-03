const bmicalculate = () => {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result =  document.getElementById("result")
    if ( !weight || !height || height === 0  ) {
       result.innerText = "Please enter valid valid weight and height."
    }

    let bmi = weight / (weight * height);

    let catagory = "";

    if(bmi < 18.5) catagory = "Underweight";
    else if(bmi < 24.9) catagory = "Normal weight";
    else if (bmi < 29.9) catagory = "Overweight"
    else catagory = "Obese"

    result.innerText = `Your BMI is ${bmi.toFixed(2)} (${catagory})`

} 