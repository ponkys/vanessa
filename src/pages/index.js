import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Vanessa Jaklitsch" />
      <h1>Vanessa Jaklitsch</h1>
      <p>
        Vanessa Jaklitsch is US Correspondent for Antena 3 TV and La Razón.
        While a Correspondent in Washington, she also teaches at the
        “International Journalism” Course of Atresmedia Formación, and
        contributes to “Club de Prensa” TV Show of the NTN24 Channel as an
        analyst. Currently, she also coordinates the US and Latin America media
        relations at the IDB Invest. She has 15 years of experience as director,
        presenter and reporter at Localia Canal 4 Navarra, TV Azteca, Cadena
        Ser, Onda Cero and Atresmedia. She has also worked as a Special
        Correspondent for Antena 3 TV in Haiti, as well as in UK, Poland and
        Spain for PRISA Group. In print and digital journalism, Vanessa has
        published reports in The Washington Post, and magazines “Momento” in
        Mexico and “LocalArt” in Spain. She also has experience as an event host
        and Master of Ceremonies.
      </p>
      <p>
        Ms. Jaklitsch has also worked as a Corporate Communications Specialist,
        implementing the communication strategy at the Education Division and
        the Integration and Trade Sector of the Inter-American Development Bank
        (IDB). Here, she coordinated the editorial process, social media
        strategy, newsletter and media relations, as well as organizing
        marketing campaigns and events. She has worked as a communication
        consultant in communication agencies and international organizations,
        such as the Organization of the American States (OAS) and the
        Panamerican Development Foundation (PADF) following the earthquake in
        Haiti in 2011.
      </p>
      <p>
        Ms. Jaklitsch co-founded ‘DCSpaniards’, the first digital platform for
        Spanish nationals in Washington D.C. She has a BA in Journalism and a
        Master's degree in Business from the University of Navarre, and she is
        certified as a Specialist in Social Media Management by Georgetown
        University.
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
