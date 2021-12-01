export const ContactsSection = () => {
    return (
        <section class="contact">
            <div class="wrapper">
                <div class="contact-wrapper">
                    <h2 class="contact-title">Остались вопросы?</h2>
                    <div class="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                    <form action="../mailer.smart.php" class="contact-form">
                        <input type="text" placeholder="Ваше имя" />
                        <input type="tel" placeholder="Телефон" /> 
                        <input type="email" placeholder="E-mail" />
                        <button class="btn contact-btn"><span>Позвоните мне</span></button>
                    </form>
                    <div class="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                    </div>
                </div>
            </div>
        </section>
    )
};