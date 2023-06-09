export default function Projects() {
  return (
    <>
      <br />
      <div className=" flex items-center justify-center text-3xl text-black">
        Projects
      </div>
      <br />
      <br />
      <div className="flex items-center justify-center space-x-10 ">
        <div className="border-4 rounded-xl bg-white drop-shadow-xl shadow-xl bg-blue-100">
          <p className="pl-4 text-xl font-semibold">Order Pizza</p>
          <br />
          <p className="pl-4 pr-4">
            Order Pizza is a React shopping project <br /> where customers can
            customize and order <br /> their favourite pizzas through a
            interactive UI !
            <br />
            <br />
            <div className="flex space-x-10">
              <a
                className="font-semibold"
                href="https://github.com/Batuhan-Tas/fsweb-s11g3-crud-filmler"
              >
                View on GitHub
              </a>
              <a
                className="pl-24 font-semibold"
                href="https://pizza-order-app-dev.netlify.app/"
              >
                Go to app &#8594;
              </a>
            </div>
            <br />
            <br />
            <div className="flex object-center items-center justify-center">
              <img
                className="object-cover object-center rounded drop-shadow-xl shadow-xl"
                alt="me"
                src="Pizza.jpg"
                width={280}
              />
            </div>
          </p>
        </div>

        <div className="border-4 rounded-xl bg-white drop-shadow-xl shadow-xl bg-green-200 ">
          <p className="pl-6 pr-6 text-xl font-semibold">Redux Movies</p>
          <br />
          <p className="pl-6 pr-6">
            Redux Movies is a React Redux project where <br /> users can go
            through a list of movies to choose <br /> from and create a
            watchlist for themselves!
            <br />
            <br />
            <div className="flex space-x-10">
              <a
                className="font-semibold"
                href="https://github.com/Batuhan-Tas/fsweb-s7-challenge-pizza"
              >
                View on GitHub
              </a>
              <a
                className="pl-24 font-semibold"
                href="https://crud-movies-app.netlify.app/movies"
              >
                Go to app &#8594;
              </a>
            </div>
            <br />
            <br />
            <div className="flex object-center items-center justify-center">
              <img
                className="object-cover object-center rounded drop-shadow-xl shadow-xl"
                alt="me"
                src="Crud.jpg"
                width={280}
              />
            </div>
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
