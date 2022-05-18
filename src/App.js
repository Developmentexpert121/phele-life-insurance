import './App.css';
import { Routes, Route } from "react-router-dom";
// import Header from './components/common/Header';
import { About,WhatIsLifeInsurance,LifeInsuranceCouncil,Faq,GettingStarted,Test,Testa,Form,
  Glossary,HowClaimWorks,InsuranceLibrary,NewsMedia,WhoNeedsLifeInsurance,Home, InsuranceCompanies,DynamicLibrary} from './components/pages/index';

import {Dashboard,AdminFaq, AdminLibrary,InsuranceCompany, AdminGlossary, AdminNewsMedia} from './admin/AdminComponents';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/what-is-life-lnsurance" element={<WhatIsLifeInsurance />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-life-insurance-council" element={<LifeInsuranceCouncil />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/how-claim-works" element={<HowClaimWorks />} />
        <Route path="/insurance-library" element={<InsuranceLibrary />} />
        <Route path="/insurance-library/dynamiclibrary" element={<DynamicLibrary />} />
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/who-needs-life-insurance" element={<WhoNeedsLifeInsurance />} />
        <Route path="/insurance-companies" element={<InsuranceCompanies />} />
        <Route path="/form" element={<Form />} />
        <Route path="/admin/home" element={<Form />} />
        <Route path="/test" element={<Test />} />
        <Route path = "/testa" element={<Testa />} />
        <Route path = "/dashboard" element={<Dashboard />} />
        <Route path='/admin/faq' element={ <AdminFaq />} />
        <Route path='/admin/library' element={ <AdminLibrary />} />

        <Route path='/admin/insurance-company' element={ <InsuranceCompany />} />
        <Route path='/admin/glossary' element={ <AdminGlossary />} />
        <Route path="/admin/news-media" element={ < AdminNewsMedia />} />

      </Routes>
      
      {/* <Footer/> */}
    </>
  );
}

export default App;
