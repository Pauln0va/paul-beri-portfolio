import React from 'react'
import CaseStudy from '../../components/case_study/CaseStudy'
import chestnutOverview from '../../Data/chestnut/chestnut_overview'
import chestnutUserResearch from '../../Data/chestnut/chestnut_user_research'
import chestnutPrototyping from '../../Data/chestnut/chestnut_prototyping'
import chestnutHifi from '../../Data/chestnut/chestnut_hifi'

const Chestnut_case_study = () => {
  return (
    <CaseStudy image='/img/chestnut_thumbnail.svg' 
               overviewObject={chestnutOverview} 
               userResearchObject={chestnutUserResearch}
               prototypeObject={chestnutPrototyping}
               hifiObject={chestnutHifi}
    />
  )
}

export default Chestnut_case_study
