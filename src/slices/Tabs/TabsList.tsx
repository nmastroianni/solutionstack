'use client'

import { TabDocumentData } from '../../../prismicio-types'
import { PrismicRichText } from '@prismicio/react'

export default function TabsList({
  tabData,
  id,
}: {
  tabData: TabDocumentData[]
  id: string
}) {
  console.log('tabData ===> ', tabData)
  return (
    <>
      {tabData.length > 0 &&
        tabData.map((tab, index) => {
          return <PrismicRichText key={id + index} field={tab.heading} />
        })}
    </>
  )
}
