"use client"
import style from "@styles/header.module.css"
import NavigationBar from '@components/NavigationBar';
import Image from 'next/image';
import ButtonPodcast from "@components/ButtonPodcast";
import Logo from "@components/Logo";

const Header = () => {

    return (
        <>
            <div className={style.container} >
                <NavigationBar />
                <Logo />
                <ButtonPodcast />
            </div>
        </>
    )

}

export default Header
