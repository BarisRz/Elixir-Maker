import PropTypes from "prop-types";

function Card({ name, image, effect, ingredients }) {
  return (
    <div className="container-elixir bg-purple-800 grid text-white w-72 h-96 rounded-2xl p-4">
      <div className="grid bg-purple-heart-400 rounded-xl h-44">
        <h1 className="text-xl font-irish text-center">{name}</h1>
        {image ? (
          <img
            className="image-elixir w-36 h-24 object-contain rounded-2xl"
            src={image}
            alt={`Elixir: ${name}`}
          />
        ) : (
          <p className="image-elixir w-36 h-24 text-center justify-self-center pt-6">
            No Image available 😱
          </p>
        )}
      </div>
      <p className="font-extrabold">Effect:</p>
      <p>{effect || "No effect or unknown"}</p>
      <p className="font-extrabold">Ingedients</p>
      <p>{ingredients || "Not known yet"}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  effect: PropTypes.string,
  ingredients: PropTypes.string,
};

Card.defaultProps = {
  image: "No image available",
  effect: "No effect",
  ingredients: "Not known yet",
};

export default Card;