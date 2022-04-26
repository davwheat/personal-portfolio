import React from 'react'

import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'
import Breadcrumbs from '@components/Design/Breadcrumbs'
import AllSpectrumMaps from '@components/MobileNetworking/AllSpectrumMaps'

import Colors from '@data/colors.json'
import { AllBands } from '@data/SpectrumAllocation/DE/Bands'

function DESpectrumAllocationPage({ location }) {
  return (
    <Layout
      location={location}
      title="German mobile spectrum allocation"
      description="A visualisation of spectrum allocation across Germany, per operator and radio access technology."
    >
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">German mobile spectrum allocation</h1>
        <p role="doc-subtitle" className="text-loud">
          A visualisation of spectrum allocation across Germany, per operator and radio access technology.
        </p>
      </Hero>

      <Breadcrumbs
        data={[
          { t: 'Home', url: '/' },
          { t: 'Mobile networking', url: '/mobile-networking' },
          { t: 'Germany', url: '/mobile-networking/de' },
          { t: 'Mobile spectrum allocation', url: '/mobile-networking/de/spectrum' },
        ]}
      />

      <AllSpectrumMaps locationName="German" bandsData={AllBands} />
    </Layout>
  )
}

export default DESpectrumAllocationPage
