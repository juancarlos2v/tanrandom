"use client"
import Logo from '@components/Logo'
import Image from 'next/image'
import style from "@styles/footer.module.css"

const Footer = () => {
    const number = 30;
    return (
        <div className={`${style.container}  col-12 d-flex flex-column justify-content-around`}>
            <h3>Seguinos</h3>
            <div className='col-3 d-flex justify-content-between'>
                <Image
                    src="/ig.png"
                    width={number}
                    height={number}
                    alt="tanrandom"
                />
                <Image
                    src="/tiktok.png"
                    width={number}
                    height={number}
                    alt="tanrandom"
                />
                <Image
                    src="/youtube.png"
                    width={number}
                    height={number}
                    alt="tanrandom"
                />
                <Image
                    src="/youtube.png"
                    width={number}
                    height={number}
                    alt="tanrandom"
                />
            </div>
            <Logo />
        </div >
    )
}

export default Footer
