const habitName = document.querySelector(".habit-name");
const containerEl = document.querySelector(".checkbox-container");

const habit = {
        name: "Exercise",
        days: [false, false, false, false, false, false,false]
    };

habitName.textContent = habit.name;

const days = habit.days;

days.forEach(day => {
    const dayEl = document.createElement("input");
    dayEl.setAttribute("type", "checkbox");

    containerEl.appendChild(dayEl);
});


