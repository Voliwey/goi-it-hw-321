let modalOpened = false;

window.addEventListener('scroll', function () {
    if (!modalOpened && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        openModal();
        modalOpened = true;
    }
});

function openModal() {
    var modal = document.createElement('div');
    modal.classList.add('modals');

    modal.innerHTML = `
    <div class="modal-content">
    <div style=" display: flex;
    justify-content: space-between;
    margin-bottom: 5px;" class="modal-box-but">
    <p style="color: yellow;
    font-size: 16px;
    text-align: center;" class="modal-p">Хочеш програмувати?<br />Долучайся до GoIT</p>
    <button style="background-color: #242527;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #000;" class="close">X</button>
    </div>
    <a href="https://html-m-lp-ua.goit.global/?utm_source=google&utm_medium=cpc&utm_campaign=AY_Search_Marathon_Brand_HTML_CSS_UA&utm_content=154975695588&utm_term=696280500227&keyword=goit&placement&gad_source=1&gclid=CjwKCAjwt-OwBhBnEiwAgwzrUjANhwYVQs0pB5dY7Z4OVO0LbJ1S-tjM3NHWj7ipwPdfiHHdGqiFTxoCmVcQAvD_BwE" target="_blank"><img src="img/reklama.png" loading="eager" alt="Image" width="256" heigth="256"></a>
    
</div>
    `;

    document.body.appendChild(modal);

    let closeButton = modal.querySelector('.close');

    closeButton.addEventListener('click', function () {
        modal.classList.add('close');
    });

}

