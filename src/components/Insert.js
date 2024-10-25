import React from 'react';
import Imagepag2 from '../Images/page2image.jpeg';
import Icon from '../Images/Icon.jpeg';

function Insert() {
    return (
        <div >
            <div className='Page2Heading'>
              50,000+ FAMILIES TRUST US
            </div>

            <div className='titlepage2'>
               
                <div className='left'>
                <div>
                    <img src={Icon} alt='icon'/>
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aut debitis esse officia, quam deserunt nostrum animi consectetur maxime, voluptatum asperiores labore modi, voluptate voluptatibus quasi quaerat veniam vitae qui.</p>

                    <p> officia, quam deserunt nostrum animi consectetur maxime</p>
                    <b>officia, quam deserunt nostrum animi consectetur maxime, voluptatum asperiores labore </b>
                </div>
                <div className='right'>
                    <img  src={Imagepag2} alt='imagepage2'/>
                </div>
            </div>
            <div>WHAT ARE YOU CELEBREATING ?</div>
        </div>
    )
}

export default Insert