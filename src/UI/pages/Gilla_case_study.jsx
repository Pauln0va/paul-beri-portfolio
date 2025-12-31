import React from 'react'
import CaseStudy from '../../components/case_study/CaseStudy';
import gillaOverview from '../../Data/gilla/gilla_overview';
import gillaUserResearch from '../../Data/gilla/gilla_user_research';
import gillaPrototyping from '../../Data/gilla/gilla_prototyping';
import gillaHifi from '../../Data/gilla/gilla_hifi';

const Gilla_case_study = () => {
  return (
    <CaseStudy image='/img/gilla_thumbnail.svg'
               overviewObject={gillaOverview}
               userResearchObject={gillaUserResearch}
               prototypeObject={gillaPrototyping}
               hifiObject={gillaHifi}
    />
  )
}

export default Gilla_case_study
