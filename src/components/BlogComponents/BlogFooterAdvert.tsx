import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  advert: {
    width: '100%',

    '& ins.adsbygoogle': {
      margin: 'auto',

      '&[data-ad-status="unfilled"]': {
        display: 'none !important',
      },
    },
  },
})

export default function BlogFooterAdvert() {
  const classes = useStyles()

  useEffect(() => {
    try {
      // @ts-expect-error AdSense is horrible
      ;(adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  })

  return (
    <div className={classes.advert}>
      <p className="text-whisper">
        Ads allow me to pay for research and development costs related to this website and other open source projects. If you enjoyed this blog
        article, consider disabling your ad-blocker if you use one.
      </p>

      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2701335557132384"
        data-ad-slot="5508984265"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
