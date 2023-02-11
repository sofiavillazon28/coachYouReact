import { useState } from 'react'

import Tabs from '../Molecules/Tabs'

import facebookOutlinedIcon from '../../assets/images/icons/facebbook_outlined.svg'
import instagramOutlinedIcon from '../../assets/images/icons/instagram_outlined.svg'
import twitterOutlinedIcon from '../../assets/images/icons/twitter_outlined.svg'
import linkediOutlinedIcon from '../../assets/images/icons/linkedin_outlined.svg'
import mapMarkerIcon from '../../assets/images/icons/map_marker.svg'
import avatar1Image from '../../assets/images/images/avatar-sm-46-1.jpg'
import avatar2Image from '../../assets/images/images/avatar-sm-46-2.jpg'
import avatar3Image from '../../assets/images/images/avatar-sm-46-3.jpg'
import { Link } from 'react-router-dom'

const CoachDetailSection = () => {
  const [tab, setTab] = useState(1)

  const handleClickTab = (tabSelected) => setTab(tabSelected)
  
  return (
    <>
      <Tabs tabSelected={tab} onClickTab={handleClickTab}>
        {tab === 1 && (
          <section>
            <p className='p3'>Over the last four years, I have been the bridge between design & code by designing (and building) design systems for Atlassian & CommSec.</p>
            <p className='p3'>Recently, I've been spending a lot of time working in Figma, building modern Figma</p>

            <section className='flex flex-column'>
              <div className='flex gap-xl'>
                <div className='flex flex-column'>
                  <h5 className='flex mb-24'>Social Link</h5>
                  <div className='flex gap-md '>
                    <a href='#'>
                      <img style={{ padding: '8px' }} src={linkediOutlinedIcon} width={20} height={20} />
                    </a>
                    <a href='#'>
                      <img style={{ padding: '8px' }} src={facebookOutlinedIcon} width={20} height={20} />
                    </a>
                    <a href='#'>
                      <img style={{ padding: '8px' }} src={instagramOutlinedIcon} width={20} height={20} />
                    </a>
                    <a href='#'>
                      <img style={{ padding: '8px' }} src={twitterOutlinedIcon} width={20} height={20} />
                    </a>
                  </div>
                </div>

                <div className='flex flex-column'>
                  <h5 className='flex mb-24'>Social Link</h5>
                  <div className='flex gap-md'>
                    <div className='badge'>English</div>
                    <div className='badge'>Spanish</div>
                  </div>
                </div>
              </div>
              <div className='flex flex-column mt-24 gap-md'>
                <h5 className='flex'>Expertice</h5>

                <div className='box flex gap-md'>
                  <img src={mapMarkerIcon} />
                  <div className='flex flex-column'>
                    <h5>Senior Product Designer</h5>
                    <p className="p3 text-grey">Spotify</p>
                  </div>
                </div>

                <div className='box flex gap-md'>
                  <img src={mapMarkerIcon} />
                  <div className='flex flex-column'>
                    <h5>Design Systems</h5>
                    <p className="p3 text-grey">Netflix</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        )}
        {tab === 2 && (
          <>
            <section className='reviews flex flex-column gap-sm p-24'>
              <p className='p3'>Mathew is amazing. He was incredibly 😜 nice during our session, and his advice and suggestions were really valuable</p>
              <div className='avatar-info-box flex align-center gap-md'>
                <img src={avatar1Image} width={46} height={46} />
                <div className='flex flex-column'>
                  <p className='p3 text-alternate'>January 11, 2023</p>
                  <h5 className='p5'>Mario Long</h5>
                </div>
              </div>
            </section>
            <section className='reviews flex flex-column gap-sm p-24'>
              <p className='p3'>He was very helpful 😀. I got feedback and tips for improving my portfolio.</p>
              <div className='avatar-info-box flex align-center gap-md'>
                <img src={avatar2Image} width={46} height={46} />
                <div className='flex flex-column'>
                  <p className='p3 text-alternate'>January 11, 2023</p>
                  <h5 className='p5'>Mariana Long</h5>
                </div>
              </div>
            </section>
            <section className='reviews flex flex-column gap-sm p-24'>
              <p className='p3'>He gave me all the help I needed and effectively answered all my questions. I would definitely go with him again 😃!</p>
              <div className='avatar-info-box flex align-center gap-md'>
                <img src={avatar3Image} width={46} height={46} />
                <div className='flex flex-column'>
                  <p className='p3 text-alternate'>January 11, 2023</p>
                  <h5 className='p5'>Samy Long</h5>
                </div>
              </div>
            </section>
          </>
        )}
        {tab === 3 && (
          <>
            <section className='appointments flex flex-column gap-sm p-24'>
              <h5 className='p5'>Sessions</h5>
              <div className='flex gap-sm mt-24'>
                <div className='appointment'>
                  <p className='p3 text-grey'>MON</p>
                  <p className='h5 appointment-date'>13 Feb</p>
                  <p className='p5 text-secondary'>1 site</p>
                </div>
                <div className='appointment appointment--active'>
                  <p className='p3 text-grey'>TUE</p>
                  <p className='h5 appointment-date'>14 Feb</p>
                  <p className='h5 text-secondary'>1 site</p>
                </div>
                <div className='appointment'>
                  <p className='p3 text-grey'>WED</p>
                  <p className='h5 appointment-date'>15 Feb</p>
                  <p className='h5 text-secondary'>1 site</p>
                </div>
                <div className='appointment'>
                  <p className='p3 text-grey'>THU</p>
                  <p className='h5 appointment-date'>16 Feb</p>
                  <p className='h5 text-secondary'>1 site</p>
                </div>
                <div className='appointment'>
                  <p className='p3 text-grey'>FRI</p>
                  <p className='h5 appointment-date'>17 Feb</p>
                  <p className='h5 text-secondary'>1 site</p>
                </div>
                <div className='appointment'>
                  <p className='p3 text-grey'>SAT</p>
                  <p className='h5 appointment-date'>18 Feb</p>
                  <p className='h5 text-secondary'>1 site</p>
                </div>
              </div>
            </section>

            <section className='appointments-time flex flex-column gap-sm p-24'>
              <h5 className='p5'>Available time</h5>
              <div className='flex gap-sm mt-24'>
                <div className='appointment-time'>
                  <p className='h5'>16:00PM</p>
                </div>
                <div className='appointment-time'>
                  <p className='h5'>17:00PM</p>
                </div>
                <div className='appointment-time  appointment-time--active'>
                  <p className='h5'>18:00PM</p>
                </div>
              </div>
            </section>
          </>
        )}
      </Tabs>
    </>
  )
}

export default CoachDetailSection