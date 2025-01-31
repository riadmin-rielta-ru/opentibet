export const LINK_CONTACTS = "contacts";
export const LINK_OFFERS = "offers";
export const LINK_WELCOME_SCREEN = "welcome";
export const LINK_TIBET_PREPARATION = "tibet_preparation";
export const LINK_APPLY_FORM = 'apply_form'
export const LINK_ABOUT_US = '/about-us'
export const LINK_PREPARING_FOR_TRIP = '/preparing-for-trip'
export const LINK_GURUTIBET = '/gurutibet'
export const LINK_PHOTO_GALLERY = '/gallery'

export const LINK_TELEGRAM = 'https://t.me/gurutibet'
export const LINK_WHATSAPP = 'https://wa.me/79119274114'

export type Month = 'may' | 'june' | 'july' | 'august' | 'september' | 'october'
export const getTourPriceForMonth = (month: Month): number => {
    const prices: Record<Month, number> = {
        may: 2000,
        june: 2100,
        july: 2200,
        august: 2100,
        september: 2400,
        october: 2000,
    }
    return prices[month] || 0
}

export const classNameMobilePaddingX = 'px-1 md:px-0'