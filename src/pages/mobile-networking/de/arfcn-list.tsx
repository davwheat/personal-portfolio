import React from 'react'

import Colors from '@data/colors.json'

import Layout from '@components/Layout'
import Hero from '@components/Design/Hero'
import Breadcrumbs from '@components/Design/Breadcrumbs'
import ArfcnListIntro from '@components/MobileNetworking/ArfcnListIntro'
import ArfcnList from '@components/MobileNetworking/ArfcnList'

import EARFCNs from '@data/ArfcnData/DE/EARFCNs'
// import NRARFCNs from '@data/ArfcnData/DE/NRARFCNs'

function DEArfcnListPage({ location }) {
  return (
    <Layout location={location} title="German ARFCN list" description="A mostly complete list of German mobile networks' ARFCNs for 4G LTE.">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">German ARFCN list</h1>
        <p role="doc-subtitle" className="text-loud">
          A mostly complete dataset of German mobile network data carriers by their NR/EARFCN.
        </p>
      </Hero>

      <Breadcrumbs
        data={[
          { t: 'Home', url: '/' },
          { t: 'Mobile networking', url: '/mobile-networking' },
          { t: 'Germany', url: '/mobile-networking/de' },
          { t: 'ARFCN list', url: '/mobile-networking/de/arfcn-list' },
        ]}
      />

      <ArfcnListIntro />

      <ArfcnList
        heading="German ARFCN table"
        ratData={{
          // nr: NRARFCNs,
          lte: EARFCNs,
        }}
      />
    </Layout>
  )
}

export default DEArfcnListPage
