export default function Projects() {
  return (
    <>
      <section className="dark:bg-gray-400">
        <br />
        <div className=" flex items-center justify-center text-3xl text-black">
          <h2 className="dark:text-white">Projects</h2>
        </div>
        <br />
        <br />
        <div className="flex items-center justify-center space-x-10 ">
          <div className="border-4 rounded-xl bg-white drop-shadow-xl shadow-xl bg-blue-200 dark:bg-slate-700">
            <h2 className="pl-4 text-xl font-semibold dark:text-white">
              Order Pizza
            </h2>
            <br />
            <p className="pl-4 pr-4 dark:text-white">
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

          <div className="border-4 rounded-xl bg-white drop-shadow-xl shadow-xl bg-green-100 dark:bg-green-700 ">
            <h2 className="pl-6 pr-6 text-xl font-semibold dark:text-white">
              Redux Movies
            </h2>
            <br />
            <p className="pl-6 pr-6 dark:text-white">
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
                  href="https://crud-movies-app.netlify.app"
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
      </section>
      <br />
      <br />
      <br />
    </>
  );
}
