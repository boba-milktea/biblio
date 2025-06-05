import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideShowImg1 from '../assets/back-to-school.png';
import slideShowImg2 from '../assets/help-health.png';
import slideShowImg3 from '../assets/new-shop.png';

const fadeImage = [
  { imgUrl: slideShowImg1, altText: 'Back to school sale text' },
  {
    imgUrl: slideShowImg2,
    altText: 'An book showing a messy brain and text to get the latest edition '
  },
  { imgUrl: slideShowImg3, altText: 'A new shop is comming soon' }
];

const Slideshow = () => {
  return (
    <div className="w-11/12 lg:w-8/12 ">
      <Fade>
        {fadeImage.map((image, index) => (
          <div key={index}>
            <img
              className="rounded-xl"
              src={image.imgUrl}
              alt={Image.altText}
            />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
