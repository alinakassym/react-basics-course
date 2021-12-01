export const Footer = ({madeByName, link}) => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-logo"></div>
                <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
                <a href="tel:888" className="footer-phone"></a>
                <div className="footer-websurfer">
                    <span className="footer-websurfer_build">Made by &nbsp;</span>
                    <a href={link} target={"_blank"}>{madeByName}</a>
                </div>
                <div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
            </div>
        </footer>
    )
};