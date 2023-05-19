const btn = document.querySelector(".calculates");
const input1 = document.querySelector(".firstinput");
const input2 = document.querySelector(".secondinput");
const values = document.querySelector(".calculatevalues");


btn.addEventListener("click", () => {
  values.innerHTML = `
        <h2>${input1.value}${input2.value}</h2>
    `;
    off()
});

function off() {
    input1.value = ''
    input2.value = ''
}
