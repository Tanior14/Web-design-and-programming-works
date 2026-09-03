async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

async function renderUsers() {
    const userData = await fetchUsers();
    console.log("====================");
    console.log(userData);
    console.log("====================");

    let tableBody = document.querySelector("#user-table tbody");
    tableBody.innerHTML = "";

    userData.forEach((user) => {
        const row = document.createElement("tr");

        row.innerHTML = `<td>${user.id}</td>
        <td>${user.name.toUpperCase()}</td>
        <td>${user.address.street + " - " + user.address.city}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>`;

        tableBody.appendChild(row);
    });
}

let fetchBtn = document.querySelector("#fetch-btn");

fetchBtn.addEventListener("click", function () {
    renderUsers();
});