import PropTypes  from "prop-types";
import s from "./card.module.css"
const CastCard =({ 
    castImg,
    castName,
    castCharacter }) => {

    return (
        <div className={ s.castCard }>
            <div className={ s.castLeftInfo }>
                <img className={ s.castImg } src={ castImg } alt = { castImg }/>
            </div>
            <div>
                <p>{ `Name : ${ castName }` }</p>
                <p>{ `Character : ${ castCharacter }` }</p>
            </div>
        </div>
    )
};

CastCard.propTypes = {
    castImg: PropTypes.string.isRequired,
    castName: PropTypes.string.isRequired,
    castCharacter: PropTypes.string.isRequired
}

export default CastCard;