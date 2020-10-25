import React from 'react';
import './CharityPage.css';
function CharityBlock(props){
  return(
  <li className = "ClassBlock">
	<div className={props.id}>
	<div className= "cinfo">
	<br></br>
    <a href={props.url} target="_blank"  rel="noopener noreferrer" className = "cTitle">{props.title}</a>
    <br></br><br></br>
	<br></br>
    <img src={props.imgUrl} className="cImg" alt={props.title}></img>
	<br></br>
	<br></br>
	<p className = "cDescription">{props.description}</p>
    </div>
	</div>
  </li>
  );
}

function CharityPage() {
  return(
    <div className = "CharityPage">
      <ul className= "charityList">

	  <CharityBlock 
	  	id= "d1"
        url= "https://wck.org/"
        title="World Central Kitchen"
        imgUrl= "https://upload.wikimedia.org/wikipedia/en/9/91/WorldCentralKitchenLogo.png"
		description="World Central Kitchen is a not-for-profit non-governmental organization devoted to providing meals in the 
		wake of natural disasters. The organization prepared food in Haiti following 
		its devastating earthquake."
      />

	  <CharityBlock 
	  	id= "d2"
        url= "https://www.hearttoheart.org/"
        title="Heart to Heart"
        imgUrl= "https://storage.googleapis.com/merchroom-60e73.appspot.com/2781/av.webp"
		description="Heart to Heart International is a global humanitarian organization based in Lenexa which strengthens communities 
		through improving health access, providing humanitarian development and adminitistering crisis relief worldwide."
      />

	  <CharityBlock 
	  	id= "d3"
        url= "https://charity.gofundme.com/o/en/campaign/neediest-cases-fund-covid-relief"
        title="The NY Times Neediest Case Fund"
        imgUrl= "https://uploads.crowdrise.com/hero_logo/5e84f46bd0918.png"
		description="The New York Times Neediest Cases Fund has been helping those in need since 1911. 
		Donations to this fund will be used to directly support four other nonprofits on the front lines of the fight against COVID-19."
      />

	  <CharityBlock 
	  	id= "d4"
        url="https://www.salvationarmyusa.org/usn/"
        title="Salvation Army USA"
        imgUrl = "https://cdn.freebiesupply.com/logos/large/2x/the-salvation-army-1-logo-png-transparent.png"
		description="The Salvation Army, an international movement, is an evangelical part of the universal Christian Church. 
		Its message is based on the Bible. Its ministry is motivated by the love of God. Its mission is to preach the gospel 
		of Jesus Christ and to meet human needs in His name without discrimination."
      />

	  <CharityBlock 
	  	id= "d5"
        url="https://www.crisistextline.org/"
        title="Crisis Text Line"
        imgUrl = "https://pbs.twimg.com/profile_images/1146468729749946369/UxPxbvoI.png"
        description="Crisis Text Line is a global not-for-profit organization providing free mental health 
		texting service through confidential crisis intervention via SMS message. 
		Anyone can text 741741 from anywhere in the US to be connected to a trained crisis counselor."
      />

	  <CharityBlock 
		id= "d6"
        url= "https://www.hopeforthewarriors.org/"
        title="Hope for the Warriors"
        imgUrl= "https://www.hopeforthewarriors.org/wp-content/uploads/2017/01/logo.png"
		description="Hope For The Warriors works to provide comprehensive support programs for service members, veteran, and 
		military families that focus on transition,health and wellness, peer engagement, andd connection to community resouces."
      />

	  <CharityBlock 
        url= "https://www.ri.org/"
        title="Relief International"
        imgUrl= "https://www.ri.org//content/uploads/2019/08/timeline-relief-international-general-logo-750x422.jpg"
		description="Currently this organization is building isolation and treatment centers in refugees camps for patients 
		who have COVID-19. They are also delivering care packages to
        homes of refugees as well as opening health clincs."
      />

	  <CharityBlock 
        url="https://www.redcross.org/"
		title="American Red Cross"
		imgUrl="https://bloximages.newyork1.vip.townnews.com/foxcarolina.com/content/tncms/assets/v3/editorial/5/b3/5b30d7ae-b959-11e8-bfc3-4b79791802a7/5b9dc1e4c7c4f.image.jpg?crop=707%2C530%2C96%2C0&resize=1200%2C900&order=crop%2Cresize"
		description="The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing 
		the power of volunteers and the generosity of donors."
      />

	  <CharityBlock 
        url= "https://endhomelessness.org/"
        title="National Alliance to End Homelessness"
        imgUrl= "https://melvilletrust.org/wp-content/uploads/2016/09/national-alliance-to-end-homelessness-logo.jpg"
		description="The National Alliance to End Homelessness is a nonpartisan organization committed to preventing and ending homelessness in the United States."
      />

      </ul>
    </div>
  )
}

export default CharityPage;