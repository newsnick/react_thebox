/* import React, { useState } from 'react'
import { Sidenav, Nav } from 'rsuite'
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle'
import styles from 'rsuite/dist/rsuite.css'
import ArtworksList from '../ArtworksList/ArtworksList'

const CustomSidenav = ({
  appearance,
  openKeys,
  expanded,
  onOpenChange,
  onExpand,
  ...navProps
}) => {
  const [artworkLists, setArtworkLists] = useState({
    '4-1': false, // initially hidden
    '4-2': false, // initially hidden
  })

  const toggleArtworkList = (eventKey) => {
    setArtworkLists((prevArtworkLists) => {
      return {
        ...prevArtworkLists,
        [eventKey]: !prevArtworkLists[eventKey],
      }
    })
  }

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
            <Nav.Menu eventKey="4" title="Settings" icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1" onClick={() => toggleArtworkList('4-1')}>
                Artworks List 1
              </Nav.Item>
              {artworkLists['4-1'] && (
                <ArtworksList startIndex={0} visible={true} />
              )}

              <Nav.Item eventKey="4-2" onClick={() => toggleArtworkList('4-2')}>
                Artworks List 2
              </Nav.Item>
              {artworkLists['4-2'] && (
                <ArtworksList startIndex={50} visible={true} />
              )}

              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              <Nav.Menu eventKey="4-5" title="Custom Action">
                <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
              </Nav.Menu>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  )
}

const SidebarTwo = () => {
  const [activeKey, setActiveKey] = React.useState('1')
  const [openKeys, setOpenKeys] = React.useState(['3', '4'])
  const [expanded, setExpand] = React.useState(true)

  return (
    <>
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="subtle"
      />
    </>
  )
}

export default SidebarTwo
 */

import React, { useState } from 'react'
import { Sidenav, Nav } from 'rsuite'
import AlignJustifyIcon from '@rsuite/icons/legacy/AlignJustify'
import styles from 'rsuite/dist/rsuite.css'
import ArtworksList from '../ArtworksList/ArtworksList'

const CustomSidenav = ({
  appearance,
  openKeys,
  expanded,
  onOpenChange,
  onExpand,
  ...navProps
}) => {
  const [artworkLists, setArtworkLists] = useState({
    '4-1': false,
    '4-2': false,
    '4-3': false,
    '4-4': false,
  })

  const toggleArtworkList = (eventKey) => {
    setArtworkLists((prevArtworkLists) => {
      return {
        ...prevArtworkLists,
        [eventKey]: !prevArtworkLists[eventKey],
      }
    })
  }

  const possibleKeywords = [
    'Abstract',
    'Expressionism',
    'Cubism',
    'Surrealism',
    'Impressionism',
    'Landscapes',
    'Cityscapes',
    'Still life',
    'Portraits',
    'Sculpture',
    'Installation',
    'Performance art',
    'Modern art',
    'Contemporary art',
    'Folk art',
    'Outsider art',
    'Decorative art',
    'Graphic design',
    'Typography',
    'Photography',
  ]

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
              <Nav.Item eventKey="4-1" onClick={() => toggleArtworkList('4-1')}>
                Artworks List 1
              </Nav.Item>
              {artworkLists['4-1'] && (
                <ArtworksList
                  visible={true}
                  searchTerm={
                    possibleKeywords[
                      Math.floor(Math.random() * possibleKeywords.length)
                    ]
                  }
                />
              )}

              <Nav.Item eventKey="4-2" onClick={() => toggleArtworkList('4-2')}>
                Artworks List 2
              </Nav.Item>
              {artworkLists['4-2'] && (
                <ArtworksList
                  visible={true}
                  searchTerm={
                    possibleKeywords[
                      Math.floor(Math.random() * possibleKeywords.length)
                    ]
                  }
                />
              )}
              <Nav.Item eventKey="4-3" onClick={() => toggleArtworkList('4-3')}>
                Artworks List 3
              </Nav.Item>
              {artworkLists['4-3'] && (
                <ArtworksList
                  visible={true}
                  searchTerm={
                    possibleKeywords[
                      Math.floor(Math.random() * possibleKeywords.length)
                    ]
                  }
                />
              )}
              <Nav.Item eventKey="4-4" onClick={() => toggleArtworkList('4-4')}>
                Artworks List 4
              </Nav.Item>
              {artworkLists['4-4'] && (
                <ArtworksList
                  visible={true}
                  searchTerm={
                    possibleKeywords[
                      Math.floor(Math.random() * possibleKeywords.length)
                    ]
                  }
                />
              )}
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle onToggle={onExpand} />
      </Sidenav>
    </div>
  )
}

const SidebarTwo = () => {
  const [activeKey, setActiveKey] = React.useState('1')
  const [openKeys, setOpenKeys] = React.useState(['3', '4'])
  const [expanded, setExpand] = React.useState(true)

  return (
    <>
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onOpenChange={setOpenKeys}
        onSelect={setActiveKey}
        expanded={expanded}
        onExpand={setExpand}
        appearance="subtle"
      />
    </>
  )
}

export default SidebarTwo
