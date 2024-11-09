var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get form elements by their IDs
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var linkedinInput = document.getElementById("linkedin");
    var objectiveInput = document.getElementById("objective");
    var certificationInput = document.getElementById("certification");
    var educationInput = document.getElementById("education");
    var experienceInput = document.getElementById("experience");
    var skillsInput = document.getElementById("skills");
    // Update the displayed text content with form input values
    var nameText = document.getElementById("nameText");
    var phoneText = document.getElementById("phoneText");
    var emailText = document.getElementById("emailText");
    var linkedinText = document.getElementById("linkedinText");
    var objectiveText = document.getElementById("objectiveText");
    var certificationText = document.getElementById("certificationText");
    var educationText = document.getElementById("educationText");
    var experienceText = document.getElementById("experienceText");
    var skillsList = document.getElementById("skillsList");
    // Set the values to the corresponding text elements
    nameText.textContent = nameInput.value;
    phoneText.textContent = phoneInput.value;
    emailText.innerHTML = "<a href=\"mailto:".concat(emailInput.value, "\">").concat(emailInput.value, "</a>");
    linkedinText.innerHTML = "<a href=\"".concat(linkedinInput.value, "\" target=\"_blank\">").concat(linkedinInput.value, "</a>");
    objectiveText.textContent = objectiveInput.value;
    certificationText.textContent = certificationInput.value;
    educationText.textContent = educationInput.value;
    experienceText.textContent = experienceInput.value;
    // Populate skills list
    var skillsArray = skillsInput.value.split(",");
    skillsList.innerHTML = ""; // Clear previous skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
