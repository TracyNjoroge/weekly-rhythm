const containerEl = document.querySelector(".container");
const habitEl = document.querySelector(".add-habit");
const buttonEl = document.querySelector("#submitBtn");
const inputEl = document.querySelector("#habitInput");

const habits = [];

const deleteHabit = (e) => {
    let habitIndex = Number(e.target.parentElement.dataset.habitIndex);

    habits.splice(habitIndex, 1);
    containerEl.replaceChildren();
    renderHabits();

}

const renderHabits = () => {
    habits.forEach((habit, index) => {
    const wrapperEl = document.createElement("div");
    const nameEl = document.createElement("p");
    const deleteBtn = document.createElement("button");

    wrapperEl.dataset.habitIndex = index; 

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn")

    wrapperEl.appendChild(nameEl);
    containerEl.appendChild(wrapperEl);

    nameEl.textContent = habit.name;

    const days = habit.days;
    // console.log(days)

        days.forEach((day, index) => {
            const dayCheckboxEl = document.createElement("input");

            dayCheckboxEl.type = "checkbox";
            dayCheckboxEl.dataset.dayIndex = index;

            wrapperEl.appendChild(dayCheckboxEl);


            dayCheckboxEl.addEventListener("change", function(e){
                let dayIndex = e.target.dataset.dayIndex;
                days[dayIndex] = !days[dayIndex];

                console.log(days)

            });
        })

    wrapperEl.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteHabit)

    });
}


buttonEl.addEventListener("click", function() {
    const newHabit = inputEl.value;
    if (newHabit === "") return;

    habits.push({
        name: newHabit,
        days: [false, false, false, false, false, false, false]
    });

    inputEl.value = "";
    containerEl.replaceChildren();
    renderHabits();
})

renderHabits();








