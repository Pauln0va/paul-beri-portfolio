import React, { useEffect } from 'react'
import Header_variant from './Header_variant';
import Hero_section from './Hero_section';
import Project_section from './Project_section';
import User_section from './User_section';
import Prototype_section from './Prototype_section';
import Highfi_section from './Highfi_section';
import Footer_variant from './Footer_variant';

const CaseStudy = ({image, overviewObject, userResearchObject, prototypeObject, hifiObject}) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  return (
    <>
      <Header_variant />
      <Hero_section image = {image} />
      <Project_section overviewObject={overviewObject} />
      <User_section userResearchObject={userResearchObject} />
      <Prototype_section prototypeObject={prototypeObject} />
      <Highfi_section hifiObject={hifiObject}/>
      <Footer_variant />
    </>
  )
}

export default CaseStudy;
