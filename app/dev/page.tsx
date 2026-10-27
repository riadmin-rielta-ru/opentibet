import { BuyBookButtonContainer, GuruTibetBannerStory, NavbarHamburgerStory } from '@/components/components'
import React from 'react'

export default function () {
    return (
        <div>
            <h1>Dev Page</h1>

            <BuyBookButtonContainer />
            <div className='p-10 bg-slate-300'>
                <NavbarHamburgerStory />
            </div>

            <div className='p-10'>
                <GuruTibetBannerStory />
            </div>
        </div>
    )
}