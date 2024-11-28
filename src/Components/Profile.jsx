import { Card } from "flowbite-react";
import pp from "../assets/koko.jpg";
import tp from "../assets/js.png";

import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi,I'M SATRIA</h2>
          <p className="mt-4 text-gray-500">
          Halo, nama saya Satria. Saya adalah pelajar dari SMK PRAKARYA INTERNASIONAL
          di jurusan RPL(Rekayasa perangkat lunak).
            
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Skill</dt>
                
                    <dd className="mt-2 text-sm text-gray-500">saya telah mempelajari beberapa bahasa program yaitu HTML,CSS,JS,PHP, dan REACT</dd>

                
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Pencapaian</dt>
              <dd className="mt-2 text-sm text-gray-500">
                Solid
              </dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Project</dt>
              <dd className="mt-2 text-sm text-gray-500">...........</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Hubungi saya</dt>
              <dd className="mt-2 text-sm text-gray-500">............</dd>
            </div>
            <div id="#contact"
            className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Sosial Media</dt>
              <p>---------------</p>
              <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/github.png" />
        </a>
    </div>
            </div>
          </dl>
        </div>
        <div className="flex justify-end lg:w-1/2">
          <img 
            src={pp}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
