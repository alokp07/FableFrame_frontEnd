import React from "react";

function ScenePlayer() {
  return (
    <div className="sceneBase h-screen w-screen flex flex-col justify-between">
      <div className="sceneContainer flex flex-1 flex-col lg:flex-row px-4 overflow-auto">
        {/* Image Section */}
        <div className="lg:w-2/5 w-full flex justify-center items-center mb-4 lg:mb-0">
          <img
            src="https://raw.githubusercontent.com/DARK-Shadw/VizualNovel/main/assets/scene_0.png"
            alt="Media"
            className="max-w-full max-h-full object-contain h-auto rounded-lg"
          />
        </div>

        {/* Description Section */}
        <div className="lg:w-3/5 w-full flex flex-col items-center py-15">
          <div className="scene-text h-[100%] overflow-auto px-5">
            <h1 className="mb-5 ml-3 text-4xl">Scene 1</h1>
            <p className="text-lg text-center lg:text-left px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              nobis nemo voluptate vel exercitationem sequi quaerat, illum,
              itaque esse reprehenderit deleniti corrupti, excepturi aliquid
              laudantium quibusdam nam id iure tempore.lorem Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ea alias a molestiae nobis
              esse quae veritatis mollitia corporis accusantium. Quo sunt
              similique molestiae error corrupti necessitatibus placeat
              provident laudantium. Praesentium!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt nobis nemo voluptate vel
              exercitationem sequi quaerat, illum, itaque esse reprehenderit
              deleniti corrupti, excepturi aliquid laudantium quibusdam nam id
              iure tempore.lorem Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea alias a molestiae nobis esse quae veritatis
              mollitia corporis accusantium. Quo sunt similique molestiae error
              corrupti necessitatibus placeat provident laudantium.
              Praesentium!Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nesciunt nobis nemo voluptate vel exercitationem sequi
              quaerat, illum, itaque esse reprehenderit deleniti corrupti,
              excepturi aliquid laudantium quibusdam nam id iure tempore.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias
              a molestiae nobis esse quae veritatis mollitia corporis
              accusantium. Quo sunt similique molestiae error corrupti
              necessitatibus placeat provident laudantium. Praesentium!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
              nemo voluptate vel exercitationem sequi quaerat, illum, itaque
              esse reprehenderit deleniti corrupti, excepturi aliquid laudantium
              quibusdam nam id iure tempore.lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ea alias a molestiae nobis esse quae
              veritatis mollitia corporis accusantium. Quo sunt similique
              molestiae error corrupti necessitatibus placeat provident
              laudantium. Praesentium!Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nesciunt nobis nemo voluptate vel exercitationem
              sequi quaerat, illum, itaque esse reprehenderit deleniti corrupti,
              excepturi aliquid laudantium quibusdam nam id iure tempore.lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea alias
              a molestiae nobis esse quae veritatis mollitia corporis
              accusantium. Quo sunt similique molestiae error corrupti
              necessitatibus placeat provident laudantium. Praesentium!Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
              nemo voluptate vel exercitationem sequi quaerat, illum, itaque
              esse reprehenderit deleniti corrupti, excepturi aliquid laudantium
              quibusdam nam id iure tempore.lorem Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ea alias a molestiae nobis esse quae
              veritatis mollitia corporis accusantium. Quo sunt similique
              molestiae error corrupti necessitatibus placeat provident
              laudantium. Praesentium!
            </p>
          </div>
        </div>
      </div>

      {/* Audio player*/}
      <div className="w-full h-[10%] flex items-center justify-center">
        <button className="mr-5 block md:hidden">
          <i class="fa-solid fa-backward fa-2x"></i>
        </button>
        <button id="play-btn" className="mr-5">
          <i id="playIcon" className="fa-solid fa-play fa-2x"></i>
        </button>
        <div id="progressContainer">
          <div id="progressBar"></div>
        </div>

        <button className="ml-5 block md:hidden">
          <i className="fa-solid fa-forward fa-2x"></i>
        </button>
      </div>

      {/* next and previous btn */}
      <div id="prev-btn" className="overlay">
        <i className="fa-solid fa-chevron-left fa-4x"></i>
      </div>

      <div id="next-btn" className="overlay">
        <i className="fa-solid fa-chevron-right fa-4x"></i>
      </div>
    </div>
  );
}

export default ScenePlayer;
