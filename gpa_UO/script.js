function calculateGPA() {
    var subjectsContainer = document.getElementById('subjects-container');

    if (subjectsContainer.children.length >= 6) {
        alert('You can add a maximum of 6 subjects.');
        return;
    }

    var newSubjectContainer = document.createElement('div');
    newSubjectContainer.className = 'subject-container';

    var subjectNameInput = document.createElement('input');
    subjectNameInput.type = 'text';
    subjectNameInput.className = 'subject-name';
    subjectNameInput.placeholder = 'Enter subject name';

    var creditHoursSelect = document.createElement('select');
    creditHoursSelect.className = 'credit-hours';
    var creditHoursOptions = ['2', '3', '4'];
    creditHoursOptions.forEach(function (option) {
        var creditOption = document.createElement('option');
        creditOption.value = option;
        creditOption.textContent = option;
        creditHoursSelect.appendChild(creditOption);
    });

    var obtainedMarksInput = document.createElement('input');
    obtainedMarksInput.type = 'number';
    obtainedMarksInput.className = 'obtained-marks';
    obtainedMarksInput.placeholder = 'Enter obtained marks';

    var removeSubjectButton = document.createElement('button');
    removeSubjectButton.textContent = 'Remove Subject';
    removeSubjectButton.className = 'remove-subject';
    removeSubjectButton.onclick = function () {
        subjectsContainer.removeChild(newSubjectContainer);
    };

    newSubjectContainer.appendChild(document.createElement('br'));
    newSubjectContainer.appendChild(document.createElement('br'));
    newSubjectContainer.appendChild(document.createElement('hr'));
    newSubjectContainer.appendChild(document.createElement('br'));
    newSubjectContainer.appendChild(document.createTextNode('Subject Name: '));
    newSubjectContainer.appendChild(subjectNameInput);
    newSubjectContainer.appendChild(document.createTextNode(' Credit Hours: '));
    newSubjectContainer.appendChild(creditHoursSelect);
    newSubjectContainer.appendChild(document.createTextNode(' Obtained Marks: '));
    newSubjectContainer.appendChild(obtainedMarksInput);
    newSubjectContainer.appendChild(removeSubjectButton);

    subjectsContainer.appendChild(newSubjectContainer);
}

function calculateOverallGPA() {
    var subjectContainers = document.querySelectorAll('.subject-container');
    var totalGradePoints = 0;
    var totalCreditHours = 0;

    subjectContainers.forEach(function (container) {
        var creditHours = parseFloat(container.querySelector('.credit-hours').value);
        var obtainedMarks = parseFloat(container.querySelector('.obtained-marks').value);

        if (!isNaN(creditHours) && !isNaN(obtainedMarks)) {
            var gradePoint = (obtainedMarks - 10) * 0.05 * creditHours;
            totalGradePoints += gradePoint;
            totalCreditHours += creditHours;
        }
    });

    if (totalCreditHours === 0) {
        alert('Please enter valid values for credit hours and obtained marks.');
        return;
    }

    var overallGPA = totalGradePoints / totalCreditHours;

    document.getElementById('result').innerHTML = 'Your Overall GPA is: ' + overallGPA.toFixed(2);
}
