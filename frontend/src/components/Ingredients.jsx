import PropTypes from "prop-types";
import ingredientImg from "../assets/ingredient.png";

function Ingredients({
  ingredient,
  ingredientsPotion,
  setImgIngredient,
  ingtransp,
  setBg,
  setImgIngredientClass,
  setScore,
  score,
  gainScore,
}) {
  const isTrue = () => {
    function returnToTrueAnimation() {
      setBg("bgTrue");
    }

    function toInvisibleImg() {
      setImgIngredient(ingtransp);
      setImgIngredientClass("");
    }

    const endAnimation = () => {
      setTimeout(returnToTrueAnimation, 3000);
    };

    const endImgIngredient = () => {
      setTimeout(toInvisibleImg, 3000);
    };

    if (ingredientsPotion.includes(ingredient) !== true) {
      setBg("bgFalse");
      endAnimation();
    } else {
      setImgIngredient(ingredientImg);
      setImgIngredientClass("imgIngredient");
      setScore(score + gainScore);
      endImgIngredient();
    }
  };

  return (
    <button
      type="button"
      className="flex text-white font-irish w-full h-full justify-center items-center "
      onClick={() => isTrue()}
    >
      {ingredient}
    </button>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.string.isRequired,
  ingredientsPotion: PropTypes.isRequired,
  setImgIngredient: PropTypes.func.isRequired,
  ingtransp: PropTypes.string.isRequired,
  setBg: PropTypes.func.isRequired,
  setImgIngredientClass: PropTypes.func.isRequired,
  setScore: PropTypes.number.isRequired,
  gainScore: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
export default Ingredients;