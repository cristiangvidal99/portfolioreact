import React from 'react';
import { EyeIcon, LinkIcon } from '@heroicons/react/solid';
import Img1 from '../../img/breakingbad.webp';
import Img2 from '../../img/frontendstore.webp';
import Img3 from '../../img/cripto.webp';
import Img4 from '../../img/giffApp.webp';


const Card = () => {

  return (
    <div className='flex flex-wrap justify-center items-center gap-2'>
      {/* Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Img1} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Proyecto: Frases Breaking Bad</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div>
          <button ><a href=""><EyeIcon />View</a></button>
          <button ><a href=""><LinkIcon />Demo</a></button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Styled-components</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
      </div>
      {/* Card 2*/}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Img3} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Proyecto: Frases Breaking Bad</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div>
          <button><a href=""><EyeIcon />View</a></button>
          <button><a href=""><LinkIcon />Demo</a></button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
      </div>
      {/* Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Img4} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Proyecto: Frases Breaking Bad</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div>
          <button><a href=""><EyeIcon />View</a></button>
          <button><a href=""><LinkIcon />Demo</a></button>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
        </div>
      </div>
    </div>
  )
}

export default Card;