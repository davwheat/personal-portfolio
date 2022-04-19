import React from 'react'

import Colors from '@data/colors.json'

import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'

import ArfcnListIntro from '@components/MobileNetworking/ArfcnListIntro'
import ArfcnList from '@components/MobileNetworking/ArfcnList'

import EARFCNs from '@data/ArfcnData/GB/EARFCNs'
import NRARFCNs from '@data/ArfcnData/GB/NRARFCNs'
import Breadcrumbs from '@components/Design/Breadcrumbs'

function GBArfcnListPage({ location }) {
  return (
    <Layout location={location} title="UK ARFCN list" description="A mostly complete list of UK mobile networks' ARFCNs for 4G LTE and 5G NR.">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">UK ARFCN list</h1>
        <p role="doc-subtitle" className="text-loud">
          A mostly complete dataset of UK mobile network data carriers by their NR/EARFCN.
        </p>
      </Hero>

      <Breadcrumbs
        data={[
          { t: 'Home', url: '/' },
          { t: 'Mobile networking', url: '/mobile-networking' },
          { t: 'United Kingdom', url: '/mobile-networking/uk' },
          { t: 'ARFCN list', url: '/mobile-networking/uk/arfcn-list' },
        ]}
      />

      <ArfcnListIntro />

      <ArfcnList
        heading="UK ARFCN table"
        ratData={{
          nr: NRARFCNs,
          lte: EARFCNs,
        }}
      />
    </Layout>
  )
}

export default GBArfcnListPage
