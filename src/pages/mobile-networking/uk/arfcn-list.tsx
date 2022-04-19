import React from 'react'

import Colors from '@data/colors.json'

import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'

import ArfcnListIntro from '@components/MobileNetworking/ArfcnListIntro'
import ArfcnList from '@components/MobileNetworking/ArfcnList'

import EARFCNs from '@data/ArfcnData/GB/EARFCNs'
import NRARFCNs from '@data/ArfcnData/GB/NRARFCNs'

function GBArfcnListPage({ location }) {
  return (
    <Layout location={location} title="Danish ARFCN list" description="A partial list of Danish mobile networks' ARFCNs for 4G LTE and 5G NR.">
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">Danish ARFCN list</h1>
        <p role="doc-subtitle" className="text-loud">
          A partial dataset of Danish mobile network frequencies by their NR/EARFCN.
        </p>
      </Hero>

      <ArfcnListIntro />

      <ArfcnList
        heading="Danish ARFCN table"
        ratData={{
          nr: NRARFCNs,
          lte: EARFCNs,
        }}
      />
    </Layout>
  )
}

export default GBArfcnListPage
