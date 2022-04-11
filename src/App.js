import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/common/Header';
import { About,WhatIsLifeInsurance,LifeInsuranceCouncil,Faq,GettingStarted,Form,Glossary,HowClaimWorks,InsuranceLibrary,NewsMedia,WhoNeedsLifeInsurance,Home, InsuranceCompanies} from './components/pages/index';
// import Footer from './components/common/Footer';
function App() {
  return (
    <>
      <Header/>
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
        <Route path="/news-media" element={<NewsMedia />} />
        <Route path="/who-needs-life-insurance" element={<WhoNeedsLifeInsurance />} />
        <Route path="/insurance-companies" element={<InsuranceCompanies />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
