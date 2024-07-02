import { useState } from "react";
import { getImgURL } from "../utils/cineUtils";
import CineRatting from "./CineRatting";
import CineDetails from "./CineDetails";

import { toast } from "sonner";

import { useMovies } from "../context/hooks";

/* eslint-disable react/prop-types */
const CineCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectMovie, setSelectMovie] = useState(null);
  const { state, dispatch } = useMovies();

  const handleSelectMovie = (movie) => {
    setShowModal(true);
    setSelectMovie(movie);
  };
  const handleCloseModal = () => {
    setSelectMovie(null);
    setShowModal(false);
  };
  const handleAddToCart = (movie) => {
    toast.success(`${movie.title} added to cart`, {
      duration: 500,
    });
    const movieInCart = state.addToCart.find((cart) => cart.id === movie.id);
    console.log(state.addToCart);

    if (!movieInCart) {
      return dispatch({
        type: "addToCart",
        payload: {
          ...movie,
        },
      });
    } else {
      toast.error(`${movie.title} already added into cart`, { duration: 2000 });
    }
  };
  return (
    <>
      {showModal && (
        <CineDetails
          movie={selectMovie}
          onClose={handleCloseModal}
          onAdd={handleAddToCart}
        />
      )}

      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => handleSelectMovie(movie)}>
          <img
            className="w-full object-cover"
            src={getImgURL(movie.cover)}
            alt={movie.genre}
          />{" "}
        </a>
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <CineRatting value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={() => handleAddToCart(movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default CineCard;
