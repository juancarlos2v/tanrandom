import React from 'react'
import '../styles/components/footer.css'
import { TiktokIcon } from '../icons/TiktokIcon'
import { InstagramIcon } from '../icons/InstagramIcon'
import { TwitterIcon } from '../icons/TwitterIcon'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="title-copyright">
                    <div className="icon-media">
                        <a href="https://www.instagram.com/tanrandompod" target='_blank'>
                            <InstagramIcon />
                        </a>
                        <a href="https://www.twitter.com/tanrandompod" target='_blank'>
                            <TwitterIcon />
                        </a>
                        <a href="https://www.tiktok.com/tanrandompod" target='_blank'>
                            <TiktokIcon />
                        </a>
                    </div>
                    <div className="divider"></div>
                    <h1>TAN RANDOM</h1>
                    <p>Copyright©2022</p>
                </div>
            </footer>
        </>
    )
}

export { Footer }
