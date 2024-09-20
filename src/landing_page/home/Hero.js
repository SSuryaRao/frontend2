import React from "react";
import IndiaDisasterMap from "../../components/IndiaDisasterMap";
import "./Hero.css"; // Import the CSS file
import cycloneImg from './cyclone_img.jpg';


function Hero() {
  return (
    
    <div className="container mt-4 mb-5" style={{ 
      backgroundImage: `url(${cycloneImg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height: '100vh', 
      width: '100%',
   }}>
          
          <div className="row ">
            {/* News Headlines section */}
            <div className="col-lg-6 col-md-12 mb-5 ">
              <h1 className="text-primary mt-5">News Headlines</h1>
              <div className="news-container mt-2">
                <div className="marquee">
                  <div className="marquee-content">
                    <a href="https://timesofindia.indiatimes.com/india/govt-launches-programme-to-tackle-glacial-lake-outburst-flood-threat-in-himalayas-all-190-high-risk-lakes-to-be-monitored/articleshow/113401592.cms">
                      Govt launches programme to tackle glacial lake outburst
                      flood threat in Himalayas
                    </a>
                    <a href="https://timesofindia.indiatimes.com/city/dehradun/uttarakhand-cm-urges-officials-to-act-swiftly-as-heavy-rains-cause-chaos/articleshow/113331875.cms">
                      Be on alert: Dhami to officials as rain wreaks havoc in
                      U’khand
                    </a>
                    <a href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-government-pushes-for-increased-flood-relief-from-centre/articleshow/113267861.cms">
                      Telangana government pushes for increased flood relief
                      from Centre
                    </a>
                    {/* Additional news items */}
                    <a href="https://www.indiatoday.in/india/story/gujarat-floods-heavy-rain-vadodara-surat-ahmedabad-narmada-tapi-over-safety-mark-2589089-2024-08-28">
                      Gujarat sees massive flooding after heavy rain, 15 dead,
                      20,000 evacuated
                    </a>
                    <a href="https://www.thehindu.com/news/national/kerala/wayanad-landslide-how-two-villages-vanished-overnight/article68506601.ece">
                      Wayanad Landslide
                    </a>
                    <a href="https://www.thehindu.com/news/national/himachal-pradesh/cloudburst-in-himachal-pradesh-rescue-operation-under-way-to-trace-45-missing-people/article68476317.ece">
                      Cloudburst in Himachal Pradesh: Death toll mounts to six;
                      47 people still missing
                    </a>
                    <a href="https://timesofindia.indiatimes.com/india/govt-launches-programme-to-tackle-glacial-lake-outburst-flood-threat-in-himalayas-all-190-high-risk-lakes-to-be-monitored/articleshow/113401592.cms">
                      Govt launches programme to tackle glacial lake outburst
                      flood threat in Himalayas
                    </a>
                    <a href="https://timesofindia.indiatimes.com/city/dehradun/uttarakhand-cm-urges-officials-to-act-swiftly-as-heavy-rains-cause-chaos/articleshow/113331875.cms">
                      Be on alert: Dhami to officials as rain wreaks havoc in
                      U’khand
                    </a>
                    <a href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-government-pushes-for-increased-flood-relief-from-centre/articleshow/113267861.cms">
                      Telangana government pushes for increased flood relief
                      from Centre
                    </a>
                    {/* Additional news items */}
                    <a href="https://www.indiatoday.in/india/story/gujarat-floods-heavy-rain-vadodara-surat-ahmedabad-narmada-tapi-over-safety-mark-2589089-2024-08-28">
                      Gujarat sees massive flooding after heavy rain, 15 dead,
                      20,000 evacuated
                    </a>
                    <a href="https://www.thehindu.com/news/national/kerala/wayanad-landslide-how-two-villages-vanished-overnight/article68506601.ece">
                      Wayanad Landslide
                    </a>
                    <a href="https://www.thehindu.com/news/national/himachal-pradesh/cloudburst-in-himachal-pradesh-rescue-operation-under-way-to-trace-45-missing-people/article68476317.ece">
                      Cloudburst in Himachal Pradesh: Death toll mounts to six;
                      47 people still missing
                    </a>
                    
                    
                    {/* Add more news items as necessary */}
                  </div>
                </div>
              </div>
            </div>

            {/* Disaster Map section */}
            <div className="col-lg-6 col-md-12 mt-5 mb-5 text-md-start text-lg-end">
              <IndiaDisasterMap />
            </div>
          </div>
        </div>
      
  );
}

export default Hero;
