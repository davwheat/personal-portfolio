import React, { useState } from 'react'

import Colors from '@data/colors.json'

import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

import Section from '@components/Design/Section'
import Hero from '@components/Design/Hero'
import Layout from '@components/Layout'

import { AllBands } from '@data/SpectrumAllocation/Bands'
import { SpectrumMap } from '@components/BlogComponents/MdxComponents'

import bandNumberToName from '@functions/bandNumberToName'

const useStyles = makeStyles({})

function SpectrumAllocationPage({ location }) {
  const classes = useStyles()

  return (
    <Layout
      location={location}
      title="UK mobile spectrum allocation"
      description="A visualisation of spectrum allocation across the UK, per operator and radio access technology."
    >
      <Hero firstElement size="huge" color={Colors.primaryBlue}>
        <h1 className="text-shout">UK mobile spectrum allocation</h1>
        <p role="doc-subtitle" className="text-loud">
          A visualisation of spectrum allocation across the UK, per operator and radio access technology.
        </p>
      </Hero>

      <Section>
        <h2 className="text-louder">How does allocation work?</h2>

        <p className="text-speak">
          Mobile networks use a variety of frequencies to transmit and receive data to and from the network's nodes and end devices (UEs). These
          frequencies are usually auctioned by regulatory bodies, such as Ofcom in the UK, and operators are bound by license terms set out by
          the&nbsp;auctioner.
        </p>
        <p className="text-speak">
          These licenses dictate a large variety of info, such as areas where the license is valid, the maximum transmit power permitted, limits
          on what the spectrum may be used for, terms for license renewal, and much&nbsp;more.
        </p>
        <p className="text-speak">
          The UK's spectrum split is rather varied, with many networks being in posession of much larger amounts of spectrum compared to others,
          which can have a significant impact on their ability to provide consistent experiences to&nbsp;customers.
        </p>
      </Section>

      <Section width="wider">
        <h2 className="text-louder">Frequency deployment</h2>

        {AllBands.map((bandData, i) => {
          return (
            <React.Fragment key={bandData.band}>
              <h3 id={`band-${bandData.band}`} className="text-loud">
                Band {bandData.band}
              </h3>
              <SpectrumMap
                data={bandData.data}
                caption={`UK spectrum deployment for Band ${bandData.band} (${bandNumberToName(bandData.band)})`}
              />
            </React.Fragment>
          )
        })}
      </Section>
    </Layout>
  )
}

export default SpectrumAllocationPage
