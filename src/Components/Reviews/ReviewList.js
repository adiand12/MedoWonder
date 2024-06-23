import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Review from './Review';
import reviewData from '../../data/reviewdata.json';
import './review.css';
import ReviewHeader from './ReviewHeader';
const ReviewList = () => {
  const responsive = {
    superLargeDesktop: {
      // screens 1600px and above
      breakpoint: { max: 4000, min: 1600 },
      items: 1,
    },
    desktop: {
      // screens 1024px and above
      breakpoint: { max: 1600, min: 1024 },
      items: 1,
      partialVisibilityGutter: 0, // this is needed to show part of the next item
    },
    tablet: {
      // screens 768px and above
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      // screens below 768px
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full rounded-lg p-4 bg-gray-300">
       <ReviewHeader />
      <div style={{ overflow: 'hidden' }}> {/* Added container with hidden overflow */}
        <Carousel
          responsive={responsive}
          showDots={true}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          partialVisible
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
        >
          {reviewData.map((review, index) => (
            <div key={index} className="px-4 py-2">
              <Review review={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewList;
