import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import data from '../data/postData.json';
import './HomePage.css';


function HomePage(props) {
    const [ele, setele] = useState(12);
    const slice = data.slice(0, ele);
    const loadMore = () => {
        setele(ele + ele);
    }

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>My Articles</span>
                </div>
                {
                    slice.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColCenter r-card">
                                <img src={card.node.field_photo_image_section} alt="home" />
                                <div className="side">
                                    <span className="primaryText">{card.node.title}</span>
                                    <span className="secondaryText">{card.node.path}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="btn">
                    <button onClick={() => loadMore()}>Load more</button>
                </div>
            </div>
        </section>
    )
}

export default HomePage;

