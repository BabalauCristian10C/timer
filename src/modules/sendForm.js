    const sendForm = (elem) => {

        const clearInput = (item) => {
            const inputs = item.querySelectorAll('input');
            inputs.forEach((item) => {
                item.value = ""
            })
        };

        const sendServer = (data) => {
            return fetch('./server.php', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
        };

        const form = document.getElementById(elem);
        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = "font-size:2em;";

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = 'Loading...';
            const formData = new FormData(form);
            let body = {};
            for (let v of formData.entries()) {
                body[v[0]] = v[1]
            }
                sendServer(body).then((response) => {
                    if (response.status !== 200 || form.querySelector(`[name="user_name"]`).value.length <2) {
                        throw new Error("Couldn't send any data")
                    }
                    clearInput(form)
                    statusMessage.textContent = "Completed";
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 1000);
                }).catch(error => {
                    statusMessage.textContent = "Name is too short";
                    clearInput(form);
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 1000);
                });
        })
    }

    export default sendForm;