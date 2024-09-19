import React from "react";
import IndiaDisasterMap from "../../components/IndiaDisasterMap";
import "./Hero.css"; // Import the CSS file

function Hero() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6  mb-5">
          <h1>News Headlines</h1>
          <div className="news-container">
            <div className="marquee">
              <div className="marquee-content text-primary">
                <a href="https://timesofindia.indiatimes.com/india/govt-launches-programme-to-tackle-glacial-lake-outburst-flood-threat-in-himalayas-all-190-high-risk-lakes-to-be-monitored/articleshow/113401592.cms">
                  Govt launches programme to tackle glacial lake outburst flood
                  threat in Himalayas
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/uttarakhand-cm-urges-officials-to-act-swiftly-as-heavy-rains-cause-chaos/articleshow/113331875.cms">
                  Be on alert: Dhami to officials as rain wreaks havoc in
                  U’khand
                </a>
                <a href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-government-pushes-for-increased-flood-relief-from-centre/articleshow/113267861.cms">
                  Telangana government pushes for increased flood relief from
                  Centre
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/4-more-pilgrims-found-dead-kedarnath-landslide-toll-touches-5/articleshow/113236257.cms">
                  4 more pilgrims found dead, Kedarnath landslide toll touches 5
                </a>
                <a href="https://www.thehindubusinessline.com/economy/agri-business/maharashtra-rain-heavy-rains-cause-massive-crop-damage-in-marathwada/article68604198.ece">
                  Heavy rains cause massive crop damage in Marathwada
                </a>
                <a href="https://www.thehindu.com/news/national/kerala/wayanad-landslide-how-two-villages-vanished-overnight/article68506601.ece">
                  Wayanad Landslide
                </a>
                <a href="https://www.thehindu.com/news/national/himachal-pradesh/cloudburst-in-himachal-pradesh-rescue-operation-under-way-to-trace-45-missing-people/article68476317.ece">
                  Cloudburst in Himachal Pradesh: Death toll mounts to six; 47
                  people still missing
                </a>
                <a href="https://www.indiatoday.in/india/story/gujarat-floods-heavy-rain-vadodara-surat-ahmedabad-narmada-tapi-over-safety-mark-2589089-2024-08-28">
                  Gujarat sees massive flooding after heavy rain, 15 dead,
                  20,000 evacuated
                </a>

                <a href="https://timesofindia.indiatimes.com/india/govt-launches-programme-to-tackle-glacial-lake-outburst-flood-threat-in-himalayas-all-190-high-risk-lakes-to-be-monitored/articleshow/113401592.cms">
                  Govt launches programme to tackle glacial lake outburst flood
                  threat in Himalayas
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/uttarakhand-cm-urges-officials-to-act-swiftly-as-heavy-rains-cause-chaos/articleshow/113331875.cms">
                  Be on alert: Dhami to officials as rain wreaks havoc in
                  U’khand
                </a>
                <a href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-government-pushes-for-increased-flood-relief-from-centre/articleshow/113267861.cms">
                  Telangana government pushes for increased flood relief from
                  Centre
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/4-more-pilgrims-found-dead-kedarnath-landslide-toll-touches-5/articleshow/113236257.cms">
                  4 more pilgrims found dead, Kedarnath landslide toll touches 5
                </a>
                <a href="https://www.thehindubusinessline.com/economy/agri-business/maharashtra-rain-heavy-rains-cause-massive-crop-damage-in-marathwada/article68604198.ece">
                  Heavy rains cause massive crop damage in Marathwada
                </a>
                <a href="https://eos.org/landslide-blog">Wayanad Landslide</a>
                <a href="https://www.indiatoday.in/india/story/gujarat-floods-heavy-rain-vadodara-surat-ahmedabad-narmada-tapi-over-safety-mark-2589089-2024-08-28">
                  Gujarat sees massive flooding after heavy rain, 15 dead,
                  20,000 evacuated
                </a>
                <a href="https://timesofindia.indiatimes.com/india/govt-launches-programme-to-tackle-glacial-lake-outburst-flood-threat-in-himalayas-all-190-high-risk-lakes-to-be-monitored/articleshow/113401592.cms">
                  Govt launches programme to tackle glacial lake outburst flood
                  threat in Himalayas
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/uttarakhand-cm-urges-officials-to-act-swiftly-as-heavy-rains-cause-chaos/articleshow/113331875.cms">
                  Be on alert: Dhami to officials as rain wreaks havoc in
                  U’khand
                </a>
                <a href="https://timesofindia.indiatimes.com/city/hyderabad/telangana-government-pushes-for-increased-flood-relief-from-centre/articleshow/113267861.cms">
                  Telangana government pushes for increased flood relief from
                  Centre
                </a>
                <a href="https://timesofindia.indiatimes.com/city/dehradun/4-more-pilgrims-found-dead-kedarnath-landslide-toll-touches-5/articleshow/113236257.cms">
                  4 more pilgrims found dead, Kedarnath landslide toll touches 5
                </a>
                <a href="https://www.thehindubusinessline.com/economy/agri-business/maharashtra-rain-heavy-rains-cause-massive-crop-damage-in-marathwada/article68604198.ece">
                  Heavy rains cause massive crop damage in Marathwada
                </a>
                <a href="https://eos.org/landslide-blog">Wayanad Landslide</a>
                <a href="https://www.indiatoday.in/india/story/gujarat-floods-heavy-rain-vadodara-surat-ahmedabad-narmada-tapi-over-safety-mark-2589089-2024-08-28">
                  Gujarat sees massive flooding after heavy rain, 15 dead,
                  20,000 evacuated
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-6 text-end mt-5 mb-5"
          style={{ width: "50%", marginLeft: "auto" }}
        >
          <IndiaDisasterMap />
        </div>
      </div>
    </div>
  );
}

export default Hero;
