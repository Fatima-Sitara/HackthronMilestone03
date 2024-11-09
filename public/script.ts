document.getElementById("resumeForm")?.addEventListener("submit", function (e: Event): void {
    e.preventDefault();

    // Get form elements by their IDs
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const linkedinInput = document.getElementById("linkedin") as HTMLInputElement;
    const objectiveInput = document.getElementById("objective") as HTMLTextAreaElement;
    const certificationInput = document.getElementById("certification") as HTMLTextAreaElement;
    const educationInput = document.getElementById("education") as HTMLTextAreaElement;
    const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsInput = document.getElementById("skills") as HTMLInputElement;

    // Update the displayed text content with form input values
    const nameText = document.getElementById("nameText") as HTMLElement;
    const phoneText = document.getElementById("phoneText") as HTMLElement;
    const emailText = document.getElementById("emailText") as HTMLElement;
    const linkedinText = document.getElementById("linkedinText") as HTMLElement;
    const objectiveText = document.getElementById("objectiveText") as HTMLElement;
    const certificationText = document.getElementById("certificationText") as HTMLElement;
    const educationText = document.getElementById("educationText") as HTMLElement;
    const experienceText = document.getElementById("experienceText") as HTMLElement;
    const skillsList = document.getElementById("skillsList") as HTMLElement;

    // Set the values to the corresponding text elements
    nameText.textContent = nameInput.value;
    phoneText.textContent = phoneInput.value;
    emailText.innerHTML = `<a href="mailto:${emailInput.value}">${emailInput.value}</a>`;
    linkedinText.innerHTML = `<a href="${linkedinInput.value}" target="_blank">${linkedinInput.value}</a>`;
    objectiveText.textContent = objectiveInput.value;
    certificationText.textContent = certificationInput.value;
    educationText.textContent = educationInput.value;
    experienceText.textContent = experienceInput.value;

    // Populate skills list
    const skillsArray: string[] = skillsInput.value.split(",");
    skillsList.innerHTML = ""; // Clear previous skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
});
