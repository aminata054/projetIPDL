import bgImage from '../assets/img/african-pattern.png';
import logo from '../assets/img/logo22.png';

function Footer() {
  return (
    <footer className="mt-5 relative rounded-t-full pt-5" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="border-t-4 border-[#722714] rounded-t-full text-[#722714] bg-white">
        <div className="m-auto w-3/4 md:w-11/12 flex justify-center items-center md:grid relative h-full md:grid-cols-3">
          <div className="mt-16 flex justify-center items-center m-auto">
            <nav className="italic">
              <span className="font-semibold text-lg leading-8 md:text-2xl">Informations</span>
              <div className="block font-semibold ml-5 mt-3 text-lg leading-8 md:text-lg italic">
                <ul>
                  <li>
                    <a className="hover:underline" href="#">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      A propos
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="hidden md:block bg-[#e59b2e] w-98 rounded-tr-full rounded-tl-full h-[95%] mt-2">
            <div className="m-auto mt-12 flex justify-center items-center">
              <img className="w-1/2 h-14" src={logo} alt="logo" />
            </div>
            <div className="flex justify-center items-center">
              <a className="m-auto" href="https://x.com/">
                <div className="rounded-full flex justify-center items-center bg-white p-2 mb-2">
                  <div className="rounded-full flex justify-center items-center bg-white p-2 shadow-lg shadow-black hover:shadow-yellow-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                      {/* Twitter SVG paths from your Laravel code */}
                      <path
                        fill="#e59b2e"
                        d="M61.763 7.078a25.503 25.503 0 0 1-8.213 3.213c-2.351-2.577-5.713-4.184-9.434-4.184-7.133 0-12.92 5.934-12.92 13.252 0 1.04.111 2.046.334 3.018-10.744-.554-20.263-5.825-26.643-13.853a13.499 13.499 0 0 0-1.75 6.672c0 4.597 2.266 8.652 5.735 11.029C6.756 26.161 5 25.558 3 24.572v.165C3 31.16 7.47 36.518 13.388 37.73c-1.085.312-2.22.467-3.399.467-.831 0-1.643-.08-2.428-.234 1.646 5.262 6.418 9.097 12.076 9.199-4.421 3.557-9.999 5.677-16.052 5.677-1.04 0-2.074-.06-3.084-.184 5.722 3.754 12.519 5.95 19.814 5.95 23.777 0 36.776-20.19 36.776-37.707 0-.574-.013-1.152-.033-1.717a26.523 26.523 0 0 0 6.444-6.858 25.293 25.293 0 0 1-7.423 2.086 13.24 13.24 0 0 0 5.684-7.331z"
                      />
                      {/* Add other paths as needed */}
                    </svg>
                  </div>
                </div>
              </a>
              <a className="m-auto" href="https://facebook.com/">
                <div className="rounded-full flex justify-center items-center bg-white p-2 mb-2">
                  <div className="rounded-full flex justify-center items-center bg-white p-2 shadow-lg shadow-black hover:shadow-yellow-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                      {/* Facebook SVG paths from your Laravel code */}
                      <path
                        fill="#722714"
                        d="M32.001 2.242c-16.498 0-29.672 13.377-29.672 29.875 0 15 10.671 27.416 25.671 29.549V43h-7v-8h7v-6.104c0-6.703 4.034-10.352 10.014-10.352 2.864 0 4.986.213 5.986.309v7.004l-4.133.002c-3.251 0-3.867 1.547-3.867 3.812V35h7.435l-1.011 8H36v18.758c14-1.814 26.035-14.389 26.035-29.641 0-16.498-13.536-29.875-30.034-29.875z"
                      />
                      {/* Add other paths as needed */}
                    </svg>
                  </div>
                </div>
              </a>
              <a className="m-auto" href="https://instagram.com/">
                <div className="rounded-full flex justify-center items-center bg-white p-2 mb-2">
                  <div className="rounded-full flex justify-center items-center bg-white p-2 shadow-lg shadow-black hover:shadow-yellow-500">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                      {/* Instagram SVG paths from your Laravel code */}
                      <path
                        fill="#e59b2e"
                        d="M129.644 100.736c0 16.597-13.454 30.052-30.052 30.052H38.119c-16.6 0-30.052-13.455-30.052-30.052V39.264c0-16.598 13.452-30.052 30.052-30.052h61.473c16.598 0 30.052 13.455 30.052 30.052v61.472z"
                      />
                      {/* Add other paths as needed */}
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex justify-center items-center text-lg leading-8 mt-5">
              <p>
                Copyright © 2024{' '}
                <a className="underline font-bold hover:text-white" href="/">
                  AfriKulture
                </a>
              </p>
            </div>
          </div>
          <div className="mt-16 mb-6 md:mb-none flex justify-center items-center m-auto">
            <nav className="italic">
              <span className="font-semibold text-lg leading-8 md:text-2xl text-center">Politiques</span>
              <div className="block font-semibold mt-3 ml-5 italic text-lg leading-8 md:text-lg">
                <ul>
                  <li>
                    <a className="hover:underline" href="#">
                      Accessibilité
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Conditions
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Mentions
                    </a>
                  </li>
                  <li>
                    <a className="hover:underline" href="#">
                      Données
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;