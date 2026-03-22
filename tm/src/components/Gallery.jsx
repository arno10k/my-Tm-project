import messi from '../assets/messi.png'
import cr7 from '../assets/cr7.jpg'
import neymar from '../assets/neymar.png'
import CL from '../assets/CL.png'
import WC from '../assets/WC.webp'


const Gallery = () => {
    return (
      <> 
       <input type="file" name='photo' id = ' addPhotoInput' />
       <label htmlFor="addPhotoInput">
        <i clasName='add-photo-button fas fa-plus-square'></i>
       </label> 

       <section className='gallery'>
         <div className="item">
            <img src={messi} className='item-image' alt="" />
            <button className='delete-button'>Delete</button>
         </div>
          <div className="item">
            <img src={cr7} className='item-image' alt="" />
            <button className='delete-button'>Delete</button>
         </div> <div className="item">
            <img src={neymar} className='item-image' alt="" />
            <button className='delete-button'>Delete</button>
         </div> <div className="item">
            <img src={CL} className='item-image' alt="" />
            <button className='delete-button'>Delete</button>
         </div> <div className="item">
            <img src={WC} className='item-image' alt="" />
            <button className='delete-button'>Delete</button>
         </div>
       </section>
      </>
    )
 } 
export default Gallery