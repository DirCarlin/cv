import React, { useState } from "react";
import pp from "../assets/koko.jpg";
import aa from "../assets/html.png";
import le from "../assets/js.png";
import li from "../assets/css.png";
import la from "../assets/php.png";
import lu from "../assets/react.png";

const Profile = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);

  const handleAboutMeClick = () => {
    setIsAboutMeVisible(!isAboutMeVisible);
  };

  return (
    <div className="bg-gray-50 h-full">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="lg:mr-16 text-center lg:text-left">
          <p className="text-gray-500 mb-2">Hello There</p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            My Name is <br />
            <span className="text-gray-900">Satria</span>
          </h1>
          <p className="text-gray-700 mt-2">
            I'm a <span className="font-semibold">Student</span>
          </p>
        </div>

        <div className="mb-8 lg:mb-0">
          <img
            src={pp}
            alt="Profile"
            className="w-56 h-56 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="about-me-container bg-white py-12 px-6">
        <section aria-labelledby="about-me-section">
          <h1
            id="about-me-section"
            className="text-2xl font-semibold text-gray-900 text-center mb-6 cursor-pointer"
            onClick={handleAboutMeClick}
          >
            CLICK FOR ABOUT ME
          </h1>
          <div
            className={`${
              isAboutMeVisible
                ? "max-h-screen opacity-100 transition-all duration-500 ease-in-out transform scale-100"
                : "max-h-0 opacity-0 transition-all duration-500 ease-in-out transform scale-95"
            } about-me-content h-80 overflow-hidden`}
          >
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <dt className="font-medium text-gray-900 text-center">Skill</dt>
                <dd className="mt-2 text-sm text-gray-500 text-center">
                  Saya telah mempelajari beberapa bahasa program yaitu HTML, CSS, JS, PHP, dan REACT.
                </dd>
                
                
                <div className="flex justify-center space-x-4 mt-4">
                  <img
                    src={aa}
                    alt="HTML"
                    className="w-10 h-16 object-contain" 
                  />
                  <img
                    src={le}
                    alt="JS"
                    className="w-10 h-16 object-contain" 
                  />
                  <img
                    src={la}
                    alt="php"
                    className="w-10 h-16 object-contain" 
                  />
                  <img
                    src={li}
                    alt="css"
                    className="w-10 h-16 object-contain" 
                  />
                  <img
                    src={lu}
                    alt="react"
                    className="w-10 h-16 object-contain" 
                  />
                </div>
              </div>

              <div>
                <dt className="font-medium text-gray-900 text-center">Pencapaian</dt>
                <dd className="mt-2 text-sm text-gray-500 text-center">
                  Saya tidak pernah mengikuti ajang apapun, namun saya masukan pencapaian agar kelak saya akan langsung memasukannya ke dalam CV saya.
                </dd>
              </div>

              <div>
                <dt className="font-medium text-gray-900 text-center">Project</dt>
                <dd className="mt-2 text-sm text-gray-500 text-center">
                  Saya telah menjalankan project tentang CV/REACT/JS.
                </dd>
              </div>

              <div className="col-span-full">
                <dt className="font-medium text-gray-900 text-center mb-2">Sosial Media</dt>
                <div className="flex justify-center space-x-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                      alt="Instagram"
                    />
                  </a>
                  <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
                      alt="Messenger"
                    />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/fluent/30/000000/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://img.icons8.com/fluent/30/000000/github.png"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
