import {Lusitana, Montserrat} from "next/font/google"

export const monserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-monserrat',
    display: 'swap',
    preload: true,

})

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lusitana',
    display: 'swap',
    preload: true,
})