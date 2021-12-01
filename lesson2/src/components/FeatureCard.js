export const FeatureCard = ({img, text}) => {
    return (
        <div className="features-slider_item">
            <div className="features-img" style={{backgroundImage: `url(./images/${img})`}}></div>
            <div className="features-feature">{text}</div>
        </div>
    )
}