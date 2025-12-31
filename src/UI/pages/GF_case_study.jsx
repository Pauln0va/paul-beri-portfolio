import React from 'react'
import CaseStudy from '../../components/case_study/CaseStudy'
import goodFoodOverview from '../../Data/good_food/goodfood_overview';
import goodFoodUserResearch from '../../Data/good_food/goodfood_user_research';
import goodFoodPrototyping from '../../Data/good_food/goodfood_prototyping';
import goodFoodHifi from '../../Data/good_food/goodfood_hifi';

const GF_case_study = () => {
  return (
    <CaseStudy image='/img/good_food.svg' 
               overviewObject={goodFoodOverview} 
               userResearchObject={goodFoodUserResearch}
               prototypeObject={goodFoodPrototyping}
               hifiObject={goodFoodHifi}
    />
  )
}

export default GF_case_study
