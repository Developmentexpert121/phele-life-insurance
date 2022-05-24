import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import './../../assets/styles/common.css';

const HowClaimWorks = () => {
  const NavLists = [
    {
      'heading': 'Getting Started',
      'icon': '<FaAtlas />',
      'url': '/getting-started'
    },
    {
      'heading': 'How Claim Works',
      'icon': 'FaBook',
      'url': '/how-claim-works'
    }
  ]
  const bannerStyle = {
    width: '100%',
    border: 1
  }
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3} className="sidenav-box">
            {NavLists.map((d) =>
              <Navs heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={9}>
            <div>
              <span className='main-text-heading heading-margin'>How Life Insurance Claims Work</span>
            </div>
            <span className='sub-headings pt-3 pb-2'>What is an Insurance claim?</span>
            <p className='simple-text pt-2'>
              When you make a claim, it is usually when you have suffered some type of loss or involved in an unfortunate accident, a disaster or any other loss that is covered by your Life Insurance policy. Your insurance company then provides financial compensation to you.
            </p>
            <p className='simple-text pt-2'>
              There are typically two types of claims – maturity claims and death claims. It is important for you to know how to initiate and file a claim, so that in times of distress, you are empowered to duly receive the money you are entitled to.
            </p>
            <p className='simple-text pt-2'>
              Life Insurance companies are obligated to settle claims promptly, as claim settlement is one of the most important services that an insurance company provides to its customers.
            </p>

            <span className='sub-headings pt-3'>How to initiate a claim?</span>
            <p className='simple-text pt-2'> You will first need to contact the financial advisor or company from whom you have bought your policy and then fill a claim form. You might also find the claim form on the website of the insurance company.</p>
            <p className='simple-text pt-2'>Let us give you the steps to file a maturity and a death claim.</p>

            <span className='sub-headings pt-4 pb-2'>Steps to file a maturity claim</span>
            <p className='simple-text pt-2'>Every insurance company usually sends in a maturity claim intimation letter many weeks before the maturity date. This gives you time to get all the required documents ready for submission.</p>
            <p className="simple-text pt-2 ">The basic documents required are the original policy document, an age and identity proof, a cancelled cheque leaf or a copy of your bank passbook.</p>
            <p className="simple-text pt-2 ">On the date of maturity, the life insured is required to send the maturity claim discharge form with the original policy bond. It’s advisable to send these much before the maturity date to enable timely settlement of claim.</p>
            <p className="simple-text pt-2 ">Most companies issue cheques and / or transfer electronically on the maturity date.</p>


            <span className='sub-headings pt-4 pb-2'>Steps to file a death claim</span>
            <p className="simple-text pt-2 ">To file a death claim, you have to submit a written intimation to the insurance company at the earliest to process the claim. Take a claim intimation form from the nearest local branch office of the insurance company or your advisor. You can also check their website to see if the form is available online.</p>
            <p className='simple-text pt-2'> Details required for the claim intimation form are:
              <ul>
                <li className='simple-text'>The claimant's statement</li>
                <li className='simple-text'> Policy number</li>
                <li className='simple-text'> Date, cause and place of death</li>
              </ul>
            </p>
            <p className='simple-text pt-2'>The following documents are to be attached with the claim intimation form:</p>
            <ul>
              <li className='simple-text'>Original policy document</li>
              <li className='simple-text'>Original death certificate</li>
              <li className='simple-text'>A police FIR and post mortem exam report (for accidental death)</li>
              <li className='simple-text'>Certificate and records from the doctor/hospital (for death due to illness)</li>
              <li className='simple-text'>Advance discharge form for claim processing</li>
            </ul>
            <p className='simple-text pt-2'> Most claims are settled by cheque within 7 days from the time they receive your documents. You will be notified in writing within 7-10 days if your insurer is unable to understand any part of your submission.</p>
            <p className='simple-text pt-2'>Please note that factors like cause of death, amount of financial risk, policy duration, etc. could lead to some insurance companies requesting for additional documents.</p>
            <p className='simple-text pt-2'> The above claim procedure can be followed for riders as well.</p>
            <p className='simple-text pt-2'>For more understanding on claims as per your policy, here are links to the claims page of all 24 Life Insurance companies:</p>

            <div> <a className='href-text m-2' href='http://www.aegonlife.com/customer-service/claims/claims-process' target="_blank">Aegon Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.avivaindia.com/en/CustomerService/ClaimsProcedure.aspx' target="_blank"> Aviva Life Insurance Company India Private Limited</a></div>
            <div> <a className='href-text m-2' href='https://www.bajajallianz.com/Corp/claims/life-claim-assistance-claim-process.jsp' target="_blank">Bajaj Allianz Life Insurance Company Limited </a> </div>
            <div> <a className='href-text m-2' href='https://www.bharti-axalife.com/claims/know-your-claims' target="_blank"> Bharti AXA Life Insurance Private Limited  </a> </div>
            <div> <a className='href-text m-2' href='http://insurance.birlasunlife.com/Pages/Individual/Forms-Downloads/OnlineClaim.aspx' target="_blank"> Birla Sun Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.canarahsbclife.com/lifeinsurance/portal/canh/home/claims/claims-process' target="_blank"> Canara HSBC Oriental Bank of Commerce Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='https://www.dhflpramerica.com/Claims/Claim' target="_blank"> DHFL Pramerica Life Insurance Company Limited </a> </div>
            <div> <a className='href-text m-2' href='https://www.edelweisstokio.in/faq/claims' target="_blank"> Edelweiss Tokio Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.exidelife.in/customer-service/claims/claims-process' target="_blank"> Exide life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='https://life.futuregenerali.in/claims/claims-procedure' target="_blank"> Future Generali India Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.hdfclife.com/CustomerServices/Claims/Claims.aspx' target="_blank"> HDFC Life Insurance Company Limited   </a> </div>
            <div> <a className='href-text m-2' href='http://www.iciciprulife.com/public/Life-Claims/Claim-Introduction.htm' target="_blank"> ICICI Prudential Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.idbifederal.com/Claims/Pages/default.aspx' target="_blank"> IDBI Federal Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.indiafirstlife.com/web/customer-care/know-about-claim' target="_blank"> IndiaFirst Life Insurance Company Limited </a> </div>
            <div> <a className='href-text m-2' href='http://insurance.kotak.com/policy_holder/life-insurance-claims.php?' target="_blank"> Kotak Mahindra Old Mutual Life Insurance Limited  </a> </div>
            <div> <a className='href-text m-2' href='http://www.licindia.com/download_forms.htm' target="_blank"> Life Insurance Corporation of India.</a> </div>
            <div> <a className='href-text m-2' href='http://www.maxlifeinsurance.com/claims/understanding_claims.aspx' target="_blank"> Max Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.pnbmetlife.co.in/MetLifeKCenter_FAQ_Claim.aspx' target="_blank"> PNB MetLife India Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.reliancelife.com/insurance-claims-documents.aspx' target="_blank"> Reliance Nippon Life Insurance Company Limited </a> </div>
            <div> <a className='href-text m-2' href='http://www.saharalife.com' target="_blank"> Sahara India Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.sbilife.co.in/sbilife/content/17_1026' target="_blank"> SBI Life Insurance Company Limited   </a> </div>
            <div> <a className='href-text m-2' href='http://www.shriramlife.com/dms/plan-brochures/traditional/Claims-Process-for-Website-SLIC.pdf' target="_blank"> Shriram Life Insurance Company Limited </a> </div>
            <div> <a className='href-text m-2' href='http://www.sudlife.in' target="_blank"> Star Union Dai-ichi Life Insurance Company Limited</a> </div>
            <div> <a className='href-text m-2' href='http://www.tataaia.com/claims/claims.html' target="_blank"> Tata AIA Life Insurance Company Limited  </a> </div>

          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default HowClaimWorks