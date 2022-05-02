import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialComponent from '../common/Socials';
import Navs from '../SideTabs';
import Footer from './../common/Footer';
import Header from './../common/Header';
import CompaniesLibrary from './../CompaniesLibraryComponent';
// import { FaShieldAlt } from 'react-icons/fa';
// import Banner1 from './../../assets/banner1.jpg';

const InsuranceCompany = () => {
  const NavLists = [
    {
      'heading': 'About IRDAI',
      'icon': '<FaAtlas />',
      'url': '/about'
    },
    {
      'heading': 'About Life Insurance Council',
      'icon': 'FaBook',
      'url': '/about-life-insurance-council'
    },
    {
      'heading': 'Life Insurance Companies',
      'icon': 'FaBook',
      'url': '/insurance-companies'
    },
    {
      'heading': 'News & Media',
      'icon': 'FaBook',
      'url': '/news-media'
    }
  ]

  // const InsuranceCompanies = [
  //   {
  //     'name': 'Aditya Birla Sun Life Insurance Company Limited',
  //     'number': '1800 270 7000',
  //     'url': 'www.adityabirlasunlifeinsurance.com',
  //     'image': 'images/logo1.png'
  //   },
  //   {
  //     'name': 'Aegon Life Insurance Company Limited',
  //     'number': '1800 120 4433',
  //     'url': 'www.aegonlife.com',
  //     'image': 'images/logo2.png'
  //   },
  //   {
  //     'name': 'Aviva Life Insurance Company India Limited',
  //     'number': '800 103 7766',
  //     'url': 'www.avivaindia.com',
  //     'image': 'images/logo3_0.png'
  //   }
  // ]
  const [companies, setCompanies] = useState([]);

  const getCompanies = () => {
    fetch('http://localhost:4000/companies/companies-list'
    )
      .then((res) => res.json())
      .then((res) => {
        setCompanies(res)
      })
  }
  useEffect(() => {
    getCompanies()
    console.log('effect 1', companies);
  }, [])

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
            {NavLists.map((d,i) =>
              <Navs key={i} heading={d.heading} icon={d.icon} url={d.url} />
            )}
          </Col>
          <Col xs={12} md={9} lg={4}>
            <div>
              <span className='main-text-heading mb-4'>List of Life Insurance Companies</span>
            </div>
            <Row>
              {companies.map((d,i) =>
                <CompaniesLibrary key={i} name={d.companyName} number={d.mobile} url={d.url} image={d.picture} />
              )}

            </Row>
          </Col>
        </Row>
        < SocialComponent />
      </Container>
      <Footer />
    </>
  )
}

export default InsuranceCompany;