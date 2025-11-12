const sendForm = () => {
    const form = document.querySelector('.modal')

    form.addEventListener('submit', (event) => {
        event.preventDefault;
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')


        const sendObj = {
            name: text.value,
            tel: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                console.log(data);
                alert('Данные отправлены')
                form.reset()
            })
            .catch(error => {
                alert('поизошла ошибка' + error.message)
            })
    })

}
sendForm()