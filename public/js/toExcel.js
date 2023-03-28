const url = 'https://script.google.com/macros/s/AKfycbwRM8YTpYpDa9kbbso5sSzpaf1dI5pzZjvsT3eJHxcgPs3c690i2JTnLwBGSvMgyz4/exec';
const form = document.querySelector('form');
const signal = document.querySelector('.signal');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const options = {
        method: "POST",
        body: data
    };

    fetch(url, options)
        .then((res) => console.log(res))
        .catch(err => {
            signal.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success!</strong> Thanks for your subbmission
                                <button type="button" class="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"></button>
                            </div>`;
        });
});