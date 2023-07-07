function calculateBMI() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var unit = document.querySelector('input[name="unit"]:checked');
  var activityLevel = document.getElementById("activityLevel").value;
  var waistCircumference = document.getElementById("waistCircumference").value;
  var date = document.getElementById("date").value;

  var bmi;

  if (!unit) {
    alert("Please select an unit for BMI.");
    return; // Exit the function early if unit is not selected
  }

  if (unit.value === 'imperial') {
    bmi = weight / (height * height);
    bmi = bmi * 703; // conversion factor for bmi if imperial unit
  } else if (unit.value === 'metric') {
    height = height / 100; // convert cm to meter 
    bmi = weight / (height * height);
  }

  if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
    alert("Please enter a valid name with alphabetic characters and spaces only");
  } else if (age.trim() === "" || isNaN(age)) {
    alert("Please enter a valid age.");
  } else if (!gender) {
    alert("Please select a gender.");
  } else if (isNaN(height)) {
    alert("Please enter a valid height.");
  } else if (isNaN(weight)) {
    alert("Please enter a valid weight.");
  } else if (weight <= 0 || height <= 0) {
    alert("Weight and height values must be greater than zero.");
  } else if (activityLevel.trim() === "") {
    alert("Please select an activity level.");
  } else if (waistCircumference.trim() === "" || isNaN(waistCircumference)) {
    alert("Please enter a valid waist circumference.");
  } else if (date.trim() === "") {
    alert("Please select a date.");
  } else {
    var category = getBMICategory(bmi);
    var result = document.getElementById("result");
    result.innerHTML =
      "User Information: " + "Name: " + name + ", Age: " + age + ", Gender: " + gender.value + ", BMI: " + bmi.toFixed(2) +
      ", Activity Level: " + activityLevel + ", Waist Circumference: " + waistCircumference + ", Date: " + date;
    alert("Calculation successful! Your BMI is " + bmi.toFixed(2) + " - " + category);
  }
}

  
  function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("activityLevel").selectedIndex = 0;
    document.getElementById("waistCircumference").value = "";
    document.getElementById("date").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight - You may consider increasing your calorie intake and incorporating strength training exercises to build muscle mass.";
    } else if (bmi < 25) {
      return "Normal Weight - Maintain a balanced diet and engage in regular physical activity to keep your weight in a healthy range.";
    } else if (bmi < 30) {
      return "Overweight - Focus on portion control, consume a nutrient-rich diet, and participate in aerobic exercises to promote weight loss.";
    } else {
      return "Obese - It is recommended to consult a healthcare professional for personalized advice on weight management, including dietary changes and exercise routines.";
    }
  }
  
  