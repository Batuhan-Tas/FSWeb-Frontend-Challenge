export default function Footer() {
  return (
    <>
      <br />

      <div className="flex items-center justify-center text-right text-3xl font-semibold">
        <p className="dark:text-white">
          Let's work together on <br /> your next product.
        </p>

        <div className="text-xl text-left pl-6">
          <a className="text-blue-600" href="https://github.com/Batuhan-Tas">
            Github
          </a>
          <br />
          <a className="dark:text-white" href="">
            Personal Blog
          </a>
          <br />
          <a
            className="text-cyan-800"
            href="https://www.linkedin.com/in/mustafa-batuhan-tas/"
          >
            LinkedIn
          </a>
          <br />
          <button
            onClick={() => (window.location = "mailto:batuhan.tas@yahoo.com")}
            className="text-red-700"
          >
            Email
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
