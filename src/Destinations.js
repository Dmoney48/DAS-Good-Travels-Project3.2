import React from 'react' 
import NewForm from './NewForm'
import Travel from './Travel'
import image1 from './assets/image-1.jpg'
import image2 from './assets/image-2.jpg'
import image3 from './assets/image-3.jpg'

const Destinations = () => {
    return (
      <section className='destinations'>
        <h3>Explore New Countries</h3>
        <div className='grid'>
          <div>
            <img src={'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002487/img/basic/a0002487_main.jpg?20201116111704&q=80&rw=750&rh=536'} alt='destination-1' />
            <h3>Fly to Japan</h3>
            <p>
              "This trip was so worth the long flight."
              Whether you're headed across the Pacific Ocean to see the cherry blossom trees bloom on the streets of Tokyo, or to catch #views of the spectacular Mount Fuji, you need captions for traveling to Japan
            </p>
          </div>
  
          <div>
            <img src={'https://lh3.googleusercontent.com/HThMSkbSg2ntSQZdcFsOtflgkL6vBJPm6bJFeat2c64WkMjvLeHjEvux2U8fFOHydrNz--kcAVv4AQMlD4Z9sR60ZA=w640-h400-e365-rj-sc0x00ffffff'} alt='destination-2' />
            <h3>Experience Paradise</h3>
            <p>
            To escape and sit quietly on the beach - that's my idea of paradise.
            "You'll never know how beautiful the world can be until you go and see it for yourself."
            </p>
          </div>
  
          <div>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJIWOLwT_SpFsaLoA1L_0qj79mze-TJFz-g&usqp=CAU'} alt='destination-3' />
            <h3>Fly To Hawaii</h3>
            <p>
            “The only good thing about leaving Hawaii is that you really appreciate it when you return.”
            </p>
          </div>
          <div>
            <h3> Add New Destination</h3>
            <p>
              <NewForm />
            </p>
          </div>
          <div>
            <h3> Customer Reviews</h3>
            <p>
              <Travel />
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Destinations
