import React from 'react';
import "./SupportInfo.css";
// import "./components/card/Card.css";
import Scholarship from "./images/scholarship.png";
import counselling from "./images/counselling.png";
import access from "./images/access.png";
import community from "./images/community.png";
import employment from "./images/employment.png";
import empowerment from "./images/empowerment.png";
import reviews from "./images/reviews.png";
import upskill from "./images/upskill.png";
import childcare from "./images/childcare.png";
import rewards from "./images/rewards.png";
import Card from '../card/Card';

const supportList= [
  {
    src: Scholarship,
    alt: "scholarship logo",
    name: "Scholarships",
    text: "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you.",
  },
  {
    src: counselling,
    alt:"counselling logo",
    name:"Free Counselling Sessions",
    text:"Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists.",
 
  },
  {
    src: childcare,
    alt:"childcare logo",
    name:"Childcare Support",
    text:"Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning.",
  },
          
   {         
    src: reviews,
    alt:"reviews logo",
    name:"4.75 / 5 Average Reviews",
    text:"We are focused on ensuring every student has the best experience our bootcamps have to offer.",
  },
  
  {
    src: employment,
    alt:"employment logo",
    name:"75% Employment Rate",
    text:"This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels.",
  },

  {
    src: upskill,
    alt:"upskill logo",
    name:"560 people Upskilled",
    text:"Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more.",
  },

  {
    src: access, 
    alt:"access logo",
    name:"Dedicated Career Support from Day One",
    text:"You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching.",
  },
  
  {
    src: access, 
    alt:"access logo", 
    name:"Exclusive Access to Open Roles to All Our Hiring Partners",
    text:"Exclusive access to open roles to all our hiring partners.",
  },

  {
    src: rewards, 
    alt:"rewards logo" ,
    name:"Cool Rewards",
    text:"We like to reward our students during really important milestones. All our rewards come with an element of surprise.",
  },

  {
    src: empowerment,
    alt:"career logo",
    name:"Empowerment Evenings and Events",
    text:"Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses.",
  },
  
  {
    src: community,
    alt:"community logo",
    name:"7000+ Community of talents",
    text:"We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries.",
  },
  
];

function SupportInfo() {
    return(
      <div className="crd">
      <div className="whyNiyo">
        <h6 style={{ color: "rgb(251, 175, 0)" }}>WHY NIYO BOOTCAMP</h6>
      </div>

      <h1>
        <strong>Bespoke all around</strong>
      </h1>

      <h1 style={{ color: "rgb(251, 175, 0)" }}>
        <span>Support!</span>
      </h1>
      <div className="support-grid">
      {supportList.map(item =>(
         <Card 
         key={item.name}  // to make sure each card has a unique key
         className="support_blocks"
         name={item.name}
         text={item.text}
         src={item.src} 
         alt={item.alt}
         />
       ))}
      </div>
      </div>  
    );
}

export default SupportInfo;