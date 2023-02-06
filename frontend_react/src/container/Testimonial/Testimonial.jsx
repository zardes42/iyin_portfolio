import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { motion } from "framer-motion";
import { urlFor, client } from "../../client";


import './Testimonial.scss'

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {

      setTestimonial(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data)

    });
  }, []);

  return (
    <div>Testimonial</div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial,'app__testimonial'),
   "testimonial",
   'app__primarybg'
   );
