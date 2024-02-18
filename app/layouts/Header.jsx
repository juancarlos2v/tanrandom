"use client"
import style from "@styles/header.module.css"
import NavigationBar from '@components/NavigationBar';
import ButtonPodcast from "@components/ButtonPodcast";


const Header = () => {

    return (
        <>
            <div className={style.container} >
                <NavigationBar />
                <ButtonPodcast />
            </div>
        </>
    )

}

export default Header
