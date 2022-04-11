import React from 'react'
import SocialComponent from '../common/Socials';
import {Container, Row, Col} from 'react-bootstrap';
import {FaShieldAlt}  from 'react-icons/fa';
import Banner1 from './../../assets/banner1.jpg';
import Navs from '../SideTabs';
import Footer from './../common/Footer';

const WhoNeedsLifeInsurance = () => {
  const NavLists = [
    {
      'heading':'what is Life Insurance', 
      'icon' : '<FaAtlas />', 
      'url':'/what-is-life-lnsurance'
    },
    {
      'heading':'Who is it for',
      'icon':'FaBook',
      'url': '/who-needs-life-insurance'
    },
    {
      'heading':'Commonly Asked Question',
      'icon':'FaBook',
      'url': '/faq'
    }
  ]
  const bannerStyle = {
    width: '100%',
    border: 1   
  }
  return (
    <>
    <Container>
      <Row>
      <Col xs={12} md={3} lg={3} className="sidenav-box">
      {NavLists.map((d) =>
          <Navs heading={d.heading} icon={d.icon} url= {d.url} />
        )}
         </Col>
        <Col xs={12} md={9} lg={9}>
          <div>
            <span className='main-text-heading'>Who Needs Life Insurance?</span>
          </div>
          
          <p className='simple-text'>
          Life Insurance Policies are the easiest choice to keep your families’ future secured for the times when you may not be around. Buying a Life Insurance policy should always be one’s first step to financial planning.
          </p>
          <p className='simple-text'>
          There are plans for every need and life stage, so you can be sure to find a Life Insurance plan that works just right for you.
          </p>
          <span className='text-heading pt-3'>I am starting out</span>
          <div className='what-insurance-photo pt-3'>
          <img src={Banner1} style={bannerStyle} />
          </div>
        
          <span className='sub-headings pt-4 pb-2'>Working Professional</span>
          <p className='simple-text'>If you are in your 20s, you are probably already working. It is important for you to start thinking of safeguarding your income; especially when you are beginning a successful career. Even if you may not be earning as much as you would later in life, consider investing a portion of your income towards creating wealth; this would help you eventually build a corpus while staying protected. It will also help secure your liabilities, and at much lower premiums.</p>
          <span className='sub-headings pt-4 pb-2'>Married</span>
          <p className='simple-text'>When in your 30s, married or planning for one, you can be sure to have a whole set of responsibilities, especially financial in nature. Since you are earning more than you were in your twenties, it’s time to start planning how to financially secure your family and the future of your children. With long-term expenses such as buying a house, car, child’s education, etc. being on the rise, it’s advisable to have an equivalent life cover. Your primary concern should be on how your new family would manage all these expenses and debts should something unfortunate happen to you.</p>
          <span className='sub-headings pt-4 pb-2'>I have growing responsibilities</span>
          <p className='simple-text'>During your 40s, bigger responsibilities such as long-term debts and medical expenses become a part and parcel of life. These could be in the form of a home loan, elderly parent care, children’s higher education, etc., and it’s a given that these expenses are not easy to meet. At this stage, it is wise to diversify your investments and also start thinking of a retirement plan so you can ensure a financially secured future for you and your family, and continue to lead a good worry-free life.</p>
          <span className='sub-headings pt-3 pb-2'>I am nearing retirement</span>
          <p className='simple-text'>When in your 50s, it is of utmost importance to opt for a retirement plan, if one hasn’t already. If you are the only earning member of the house or have large debts or loans to be paid, a retirement plan becomes an absolute must. It’s always best to keep you and your family financially protected, so you can focus on making the most out of your second innings. Now, everyone up to the age of 65 years are eligible to buy a life insurance policy.</p>
          <p className='simple-text'>With Life expectancy on the rise, you would eventually need more financial support to sustain the many years of your retirement. Always remember, no matter what age and life stage you may be, karo sabse pehle Life Insurance!</p>
        </Col>
      </Row>
      < SocialComponent />
    </Container>
    <Footer />
    </>
  )
}

export default WhoNeedsLifeInsurance