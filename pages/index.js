import { gql } from "@apollo/client";
import client from "../apollo-client/";

import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import EntryArea from "../components/EntryArea";
import ServiceArea from "../components/ServiceArea";
import TeamArea from "../components/TeamArea";
import MixerAreaThree from "../components/MixerAreaThree";
import CallToAction from "../components/CallToAction";
import Place from '../components/Place';
import MissionArea from '../components/missionArea';
import PackagesArea from '../components/Packages';

import Head from 'next/head';

export default function HomePage({ 
  intoSection,
  mainSection,
  donateSection,
  offerSection,
  missionSection,
  placeSection,
  teamSection,
  packagesSection,
  inspirationalSection
}) {

  return (
    <>
        <Head>
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        </Head>

        <Layout pageTitle="Ahimsa Tribe - Garden Of Earthen Delights - Costa Rica">
          <NavTwo />
          <SliderTwo
            title={mainSection.mainSectionTitle}
            subTitle={mainSection.mainSectionSubTitle}
            imgUrl={mainSection.mainSectionImage.url}
          />
          <EntryArea
            mainTitle={intoSection.mainTitle}
            secondTitle={intoSection.secondTitle} 
            subText={intoSection.subText} 
            videoImg={intoSection.videoPlaceholderImage.url}
          />
          <MixerAreaThree
            mainTitle={donateSection.donationHeading}
            subTitle={donateSection.subHeading} 
            mainText={donateSection.donationTextContent} 
            videoImg={donateSection.videoImagePlaceholder.url}
          />
          <ServiceArea 
            mainTitle={offerSection.sectionTitle}
            img1={offerSection.image1.url}
            img2={offerSection.image2.url}
            img3={offerSection.image3.url}
            img4={offerSection.image4.url}
            heading1={offerSection.heading1}
            heading2={offerSection.heading2}
            heading3={offerSection.heading3}
            heading4={offerSection.heading4}
            textContent1={offerSection.textContent1}
            textContent2={offerSection.textContent2}
            textContent3={offerSection.textContent3}
            textContent4={offerSection.textContent4}
          />
          <Place mainTitle={placeSection.sectionTitle} mapUrl={placeSection.mapOfLand.url}
          />
          <MissionArea 
            mainTitle={missionSection.missionSectionTitle}
            heading1={missionSection.heading1}
            heading2={missionSection.heading2}
            heading3={missionSection.heading3}
            content1={missionSection.content1}
            content2={missionSection.content2}
            content3={missionSection.content3}
            img1Url={missionSection.image1.url}
            img2Url={missionSection.image2.url}
            img3Url={missionSection.image3.url}
            />
          <TeamArea
            mainTitle={teamSection.sectionTitle}
            image1={teamSection.image1.url}
            image2={teamSection.image2.url}
            image3={teamSection.image3.url}
            image4={teamSection.image4.url}
            image5={teamSection.image5.url}
            image6={teamSection.image6.url}
            name1={teamSection.name1}
            name2={teamSection.name2}
            name3={teamSection.name3}
            name4={teamSection.name4}
            name5={teamSection.name5}
            name6={teamSection.name6}
            role1={teamSection.role1}
            role2={teamSection.role2}
            role3={teamSection.role3}
            role4={teamSection.role4}
            role5={teamSection.role5}
            role6={teamSection.role6}
          />
          <PackagesArea 
            mainTitle={packagesSection.sectionTitle}
            img1={packagesSection.basicImage.url}
            img2={packagesSection.godParentImage.url}
            img3={packagesSection.communityImage.url}
            img4={packagesSection.angelImage.url}
            title1={packagesSection.basicTitle}
            title2={packagesSection.godParentTitle}
            title3={packagesSection.communityTitle}
            title4={packagesSection.angeTitle}
            amount1={packagesSection.basicAmount}
            amount2={packagesSection.godParentAmount}
            amount3={packagesSection.communityAmount}
            amount4={packagesSection.angeAmount}
          />
          <CallToAction
            mainText={inspirationalSection.mainText}/>
          <Footer />
        </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Query {
      teamSectionCollection {
        items {
          sectionTitle
          image1 {
            url
          }
          name1
          role1
          image2 {
            url
          }
          name2
          role2
          image3 {
            url
          }
          name3
          role3
          image4 {
            url
          }
          name4
          role4
          image5 {
            url
          }
          name5
          role5
          image6 {
            url
          }
          name6
          role6
        }
      }
      whyDonateSectionCollection {
        items {
          donationHeading
          subHeading
          donationTextContent
          videoImagePlaceholder {
            url
          }
        }
      }
      introSectionCollection {
        items {
          mainTitle
          secondTitle
          subText
          videoPlaceholderImage {
            url
          }
        }
      }
      packagesSectionCollection {
        items {
          sectionTitle
          basicImage {
            url
          }
          basicTitle
          basicAmount
          godParentImage {
            url
          }
          godParentTitle
          godParentAmount
          communityImage {
            url
          }
          communityTitle
          communityAmount
          angelImage {
            url
          }
          angeTitle
          angeAmount
        }
      }
      placeSectionCollection {
        items {
          sectionTitle
          mapOfLand {
            url
          }
        }
      }
      offerSectionCollection {
        items {
          sectionTitle
          image1 {
            url
          }
          heading1
          textContent1
          image2 {
            url
          }
          heading2
          textContent2
          image3 {
            url
          }
          heading3
          textContent3
          image4 {
            url
          }
          heading4
          textContent4
        }
      }
      ourMissionSectionCollection {
        items {
          missionSectionTitle
          heading1
          image1 {
            url
          }
          content1
          heading2
          image2 {
            url
          }
          content2
          heading3
          image3 {
            url
          }
          content3
        }
      }
      mainSectionCollection {
        items {
          mainSectionTitle
          mainSectionSubTitle
          mainSectionImage {
            url
          }
        }
      }
      inspirationalMessageSectionCollection {
        items {
          mainText
        }
      }
    }
    `,
  });

  return {
    props: {
      intoSection: data.introSectionCollection.items[0],
      mainSection: data.mainSectionCollection.items[0],
      donateSection: data.whyDonateSectionCollection.items[0],
      offerSection: data.offerSectionCollection.items[0],
      missionSection: data.ourMissionSectionCollection.items[0],
      placeSection: data.placeSectionCollection.items[0],
      teamSection: data.teamSectionCollection.items[0],
      packagesSection: data.packagesSectionCollection.items[0],
      inspirationalSection: data.inspirationalMessageSectionCollection.items[0]
    },
    revalidate: 10,
 };
}
