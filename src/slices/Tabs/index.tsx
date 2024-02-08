import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import { createClient } from '@/prismicio'
import { TabDocumentData } from '../../../prismicio-types'
import TabsList from './TabsList'

/**
 * Props for `Tabs`.
 */
export type TabsProps = SliceComponentProps<Content.TabsSlice>

/**
 * Component for "Tabs" Slices.
 */
const Tabs = async ({ slice }: TabsProps): Promise<JSX.Element> => {
  const client = createClient()

  const tabs = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.tab) && item.tab.uid) {
        return client.getByUID('tab', item.tab.uid)
      }
    })
  )

  const tabData = tabs.map((tab) => tab?.data) as TabDocumentData[]

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <TabsList tabData={tabData} id={slice.id} />
    </section>
  )
}

export default Tabs
