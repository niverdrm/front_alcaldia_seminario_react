import { CardOption } from "../components/CardOption";
import { Section } from "../components/Section";
import cards from "../jsons/card.json";
import '../components/styles/AsiVamos.css'
function AsiVamos() {
    return (
        <div className="containerY">
            <Section />
            <div className="grid_container">
                {cards.map((card) => (
                    <CardOption key={card.id} url={card.url} img={card.urlImg} title={card.title} />
                ))}
            </div>
        </div>
    )
}

export default AsiVamos;