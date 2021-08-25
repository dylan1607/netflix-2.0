import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies as listMovies } from "../redux/actions/moviesAction";

const Banner = () => {
  const Movies = useSelector((state) => state.lists.movies);
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMovies());
    console.log(Movies);
  }, []);
  return (
    <div className="">
      <div
        className="relative text-white bg-gradient-to-t from-black"
        style={{
          //   backgroundImage: `url("https://occ-0-325-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfi5K3BfaQQrtMxz9SE01T1-oVeNErvtv5HkMPRfVEdweUqpLNkCxJnCzwM7D9yC5yfC4tiSgEKkhe6Sq1oxOF8ZX1XV.webp?r=995")`,
          backgroundImage: `url(${BASE_URL}${Movies?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-1/2 ml-4 py-20">
          <h1 className=" text-3xl font-bold">{Movies.original_title}</h1>
          <h1 className="text-xs my-2 truncate">{Movies?.overview}</h1>
          <div className="space-x-2">
            <button className="btn bg-white text-black">Play</button>
            <button className="btn bg-gray-700">My List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
