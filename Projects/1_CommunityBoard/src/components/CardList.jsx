import React from "react";
import Card from './Card';
import './CardList.css';

// Import images
import PuntaCanaGrill from '../assets/images/PuntaCana.png';
import Pukhtun from '../assets/images/Pukhtun.png';
import Mamouns from "../assets/images/Mamoun's.png";
import ChaiChenak from '../assets/images/ChaiChenak.png';
import Dashen from '../assets/images/Dashen.png';
import Blackthorn from '../assets/images/Blackthorn.png';
import CatherineLombardi from '../assets/images/CatherineLombardi.png';
import GoldenBowl from '../assets/images/GoldenBowl.png';
import RoosterSpin from '../assets/images/RoosterSpin.png';
import RamenNagomi from '../assets/images/RamenNagomi.png';
import HannahBusing from "../assets/images/hannah-busing-0BhSKStVtdM-unsplash.jpg";
import cover from "../assets/images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg";
import Indochine from "../assets/images/Indochine.png";
import FatCactus from "../assets/images/FatCactusCantina.jpg";
import Sakana from "../assets/images/Sakana.png";
import Nirvanis from "../assets/images/Nirvanis.png";

// create an array of objects containing image URLs, titles, and descriptions
const CardList = () => {
    const cardsData = [
        {title: "Punta Cana Grill", description: "Dominican", imageUrl: PuntaCanaGrill, link: "https://www.grillpuntacananj.com/order-online"},
        {title: "Pukhtun Afghan Cuisine", description: "Afghani", imageUrl: Pukhtun, link: "https://pukhtunafghancuisine.com/menu/"},
        {title: "Mamoun's Falafel", description: "Mediterranean", imageUrl: Mamouns, link: "https://mamouns.com/"},
        {title: "Chai Chenak Restaurant & Cafe", description: "Pakistani", imageUrl: ChaiChenak, link: "http://www.chaichenak.com/menu"},
        {title: "Dashen", description: "Ethiopian", imageUrl: Dashen, link: "https://www.orderdashenethiopiannj.com/"},
        {title: "Blackthorn Restaurant & Irish Pub", description: "Irish", imageUrl: Blackthorn, link: "https://www.facebook.com/blackthornpubNB/menu/"},
        {title: "Catherine Lombardi", description: "Italian", imageUrl: CatherineLombardi, link: "http://www.catherinelombardi.com/menu"},
        {title: "Golden Bowl", description: "Chinese", imageUrl: GoldenBowl, link: "http://www.goldenbowlnj.com/menu"},
        {title: "Rooster Spin", description: "Korean", imageUrl: RoosterSpin, link: "http://places.singleplatform.com/roosterspin---new-brunswick/menu?ref=google"},
        {title: "Ramen Nagomi", description: "Japanese", imageUrl: RamenNagomi, link: "https://www.ramennagomi.com/"},
        {title: "Indochine", description: "Vietnamese", imageUrl: Indochine, link: "https://indochinefood.com/"},
        {title: "Fat Cactus Cantina", description: "Mexican", imageUrl: FatCactus, link: "https://www.fatcactuscantina.com/menu"},
        {title: "Sakana", description: "Sushi & Japanese", imageUrl: Sakana, link: "https://www.sakananewbrunswick.com/"},
        {title: "Nirvanis", description: "Indian", imageUrl: Nirvanis, link: "https://order.online/store/nirvanis-indian-kitchen-new-brunswick-2413983/?hideModal=true&pickup=true&utm_source=sdk&visitorId=e99a4191397cac087b81a4"},
    ]; 

    // map over array to render 10 card components
    return (
        <div className="CardList">
            <div className="TopImageContainer">
                <img src={cover} alt="restaurant" className="TopImage" />
                <div className="TopImageText">DINING ON GEORGE STREET</div>
            </div>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    link={card.link}
                />
            ))}
        </div>
    );
}

export default CardList;