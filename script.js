const form = document.querySelector("#myForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();

    //const errorBlock = document.querySelector("#error");
    //errorBlock.textContent = "";

    //if (!name || !email) {
    //    errorBlock.textContent("Заполните все блоки");
    //    return;
    //}

    if (name === "") {
        alert("Введите имя!");
        return;
    }

    if (!email.includes("@")) {
        alert("Введите корректный email!");
        return;
    }

    const data = {
        id: 1,
        name: name,
        email: email,
    };
    
    const responce = await fetch("https://jsonplaceholder.typicode.com/users", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    const result = await responce.json();
    console.log("Ответ сервера:", result)
      
});