import React from "react"
import Banner from "../components/Banner/banner"
import TextBlock from "../components/TextBlock/textBlock"
import TextBlockImg from "../components/TextBlockImg/textBlockImg"
import Perk from "../components/Perk/perk"
import Contact from "../components/Contact/contact"

// import Button from "../components/Button/button"
// import Packages from "../components/Packages/packages"
// import Package from "../components/Package/package"
// import { Link } from "react-scroll"

import perk1Img from "../images/couple-outside-on-swing.jpg"
import perk2Img from "../images/treatment-exercise-area.jpg"
import perk3Img from "../images/circle-of-hands.jpg"

import perk4Img from "../images/provider-touching-client-on-back.jpg"
import perk5Img from "../images/joint-mobilization.jpg"
import perk6Img from "../images/deep-tissue-release.jpg"

import perk7Img from "../images/neeling-Used-by-permission-of-Myopain-seminars.jpeg"
import perk8Img from "../images/treatment-table.jpg"
import perk9Img from "../images/cupping-with-three-cups.jpg"



//import { IconContext } from "react-icons"
//import { MdDone, MdClear } from "react-icons/md"

const HomePage = () => {
  return (
    <>
      <Banner />
      <TextBlock
        id="about"
        titleOne="We are proud to offer physical therapy to clients with chronic pain"
        paragraphOne="Wisconsin Chronic Pain Physical Therapy, Inc. was founded in 2018. We have a spacious, state of the art facility
        that was designed with client comfort in mind. 
        Many people with chronic pain think that physical therapy is not for them. It is true that traditional therapy
        may not be a good fit. We are different. We treat the cause of the pain."
      >
        
      </TextBlock>
      
      <TextBlockImg
        id="perks"
        title="We have the experience to help you succeed"
        subtitle="Choose the best! Don't become a chronic pain patient."
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk1Img}
            alt="Super fast speed increases"
            title="Who Should Consider Us"
            content="We specialize in chronic pain 
and outpatient orthopedic 
physical therapy. Whether
your pain is new or old, we work
improve your quality of life "
          />
          <Perk
            img={perk2Img}
            alt="What to Expect"
            title="What to Expect at WCPPT"
            content="Wisconsin Chronic Pain Physical Therapy, Inc approaches your therapy completely differently from most physical therapy clinics"
          />
          <Perk
            img={perk3Img}
            alt="Super fast speed increases"
            title="What Makes Us Unique"
            content="We treat patients who are dealing with chronic pain. 
  Treating your pain and get you back to doing 
   healthy activities is our goal. "
          />
        </div>
      </TextBlockImg>

      <TextBlockImg
        id="services"
        title="Featured Services"
        subtitle="We offer manual therapy techniques, alternative manual therapy techniques, and modalities"
      >
        <div className="flex-container trio-block">
          <Perk
            img={perk4Img}
            alt="Super fast speed increases"
            title="Soft Tissue Mobilization"
            content=" "
          />
          <Perk
            img={perk5Img}
            alt="What to Expect"
            title="Joint Mobilization"
            content=""
          />
          <Perk
            img={perk6Img}
            alt="Super fast speed increases"
            title="Myofascial Trigger Point Therapy"
            content=""
          />
        </div>
      
      
        <div className="flex-container trio-block">
          <Perk
            img={perk7Img}
            alt="gloved provider hands inserting needle in client tissue"
            title="Myopain Seminars Certified Dry Needling"
            content=" "
          />
          <Perk
            img={perk8Img}
            alt="treatment suite with exam tables"
            title="John Barnes Myofascial Release Approach"
            content=""
          />
          <Perk
            img={perk9Img}
            alt="cupping with three cups on client back"
            title="Alternative Manual Therapies and Modalities"
            content=""
          />
        </div>
      </TextBlockImg>

      <TextBlock
        id="difference"
        titleOne="The Difference"
        paragraphOne="This is not like anything you've experienced before. Often times, our chronic pain patients
        inform us that their traditional physical therapist: never put their hands on them; never checked their alignment; 
        gave them exercises to do and then walked away from them."
        titleTwo="Wisconsin Chronic Pain Physical Therapy, Inc."
        paragraphTwo="Provides one-on-one attention and listens to you, the client"
        paragraphThree="Uses an analytical approach to determine the CAUSE of pain"
        paragraphFour="Incorporates exercises to help you resolve your pain and do more"
        paragraphFive="Teaches you to self-correct your alignment at home, empowering you"
        paragraphSix="Continuously communicates with your doctor"
      >
      
      </TextBlock>
      
      
      <TextBlock
        id="providers"
        titleOne="Our Providers"

        titleTwo="Ann Hessil, PT"
        paragraphTwo="Ann is the primary physical therapist at Wisconsin Chronic Pain Physical Therapy Inc. She graduated from Marquette University (BS in Physical Therapy) and UW-Milwaukee (BS in Physical Education & Fitness). Ann has 27 years of experience."

        titleThree="Brian Butkiewicz"
        paragraphThree="Brian is our PT Aide. With over two decades of experience, he specializes in techniques backed with research and proven results. With his training he provides precise, caring, and thorough treatment."
      
        titleFour="Experience the Difference with a Free Screening"

      />

      
      <Contact
        id="contact"
        title="Contact WCPPT today and see how we can treat the cause of your pain"
        subtitle="Include relevant details in your message. No private information."
      />
    </>
  )
}

export default HomePage
