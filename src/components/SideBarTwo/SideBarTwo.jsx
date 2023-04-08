import React, { useState } from 'react'
import { Sidenav, Nav } from 'rsuite'
import AlignJustifyIcon from '@rsuite/icons/legacy/AlignJustify'
import styles from 'rsuite/dist/rsuite.css'
import ArtworksList from '../ArtworksList/ArtworksList'
import { possibleKeywords } from '../../utils'

const CustomSidenav = ({
  appearance,
  openKeys,
  expanded,
  onOpenChange,
  onExpand,
  ...navProps
}) => {
  const [artworkLists, setArtworkLists] = useState({
    '4-1': true,
    '4-2': false,
    '4-3': false,
    '4-4': false,
  })

  const toggleArtworkList = (eventKey) => {
    setArtworkLists((prevArtworkLists) => ({
      ...prevArtworkLists,
      [eventKey]: !prevArtworkLists[eventKey],
    }))
  }

  const renderArtworksList = (eventKey) =>
    artworkLists[eventKey] && (
      <ArtworksList
        visible={true}
        searchTerm={
          possibleKeywords[Math.floor(Math.random() * possibleKeywords.length)]
        }
      />
    )

  return (
    <div styles={styles.styles}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Body>
          <Nav {...navProps}>
            <Nav.Menu eventKey="4" title="Artworks" icon={<AlignJustifyIcon />}>
              {[1, 2, 3, 4].map((num) => (
                <React.Fragment key={num}>
                  <Nav.Item
                    eventKey={`4-${num}`}
                    onClick={() => toggleArtworkList(`4-${num}`)}
                  >
                    Artworks List {num}
                  </Nav.Item>
                  {renderArtworksList(`4-${num}`)}
                </React.Fragment>
              ))}
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  )
}

const SidebarTwo = () => {
  const [activeKey, setActiveKey] = useState('1')
  const [openKeys, setOpenKeys] = useState(['3', '4'])
  const [expanded, setExpand] = useState(true)

  return (
    <CustomSidenav
      activeKey={activeKey}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      onSelect={setActiveKey}
      expanded={expanded}
      onExpand={setExpand}
      appearance="subtle"
    />
  )
}

export default SidebarTwo
