import coscoImg from "@/assests/images/cosco.png"
import skullcandyImg from "@/assests/images/skullcandy-logo.png"
import vivo from "@/assests/images/vivo.png"
import nms from "@/assests/images/nmims.png"
import physics_wallah from "@/assests/images/physics_wallah.png"
import tata_motersfinance from "@/assests/images/tata-motorfinance.png"
import art_of_living from "@/assests/images/art-of-living.png"
import quicker from "@/assests/images/quikr.png"
import isckon from "@/assests/images/isckon.png"
import hrx from "@/assests/images/hrx.png"
import upgrade from "@/assests/images/upgrade.png"
import cakezone from "@/assests/images/cakezone.png"
import trulymadly from "@/assests/images/trulymadly.png"
import growth from "@/assests/images/growth.png"
import emudhra from "@/assests/images/emudhra.png"
import stayvista from "@/assests/images/stayvista.png"
import digo_blue from "@/assests/images/digio-blue.png"

import { StaticImageData } from "next/image"

interface foundersInterface {
    id: number,
    altText: string,
    imgSrc: StaticImageData
}

export const founders_sections : foundersInterface[] = [
    {
        id: 1,
        altText : "cosco_image",
        imgSrc : coscoImg
    },
    {
        id: 2,
        altText : "skullcandy_image",
        imgSrc : skullcandyImg
    },
    {
        id: 3,
        altText : "vivo_image",
        imgSrc : vivo
    },
    // {
    //     id: 4,
    //     altText : "bsc_image",
    //     imgSrc : bsc_image
    // }
    {
        id: 4,
        altText : "nms_image",
        imgSrc : nms

    },
    {
        id: 5,
        altText : "physics_wallah_image",
        imgSrc : physics_wallah
    },
    {
        id: 6,
        altText : "tata_motersfinance_image",
        imgSrc : tata_motersfinance
    },
    {
        id: 7,
        altText : "art_of_living_image",
        imgSrc : art_of_living
    },
    {
        id: 8,
        altText : "quikr_image",
        imgSrc : quicker
    },
    {
        id: 9,
        altText : "iskon_image",
        imgSrc : isckon
    },
    {
        id: 10,
        altText : "hrx_image",
        imgSrc : hrx
    },
    {
        id: 11,
        altText : "upgrade_image",
        imgSrc : upgrade
    },
    {
        id: 12,
        altText : "cakezone_image",
        imgSrc : cakezone
    },
    {
        id: 13,
        altText : "trulymadly_image",
        imgSrc : trulymadly
    },
    {
        id: 14,
        altText : "growth_image",
        imgSrc : growth
    },
    {
        id: 15,
        altText : "emudra_image",
        imgSrc : emudhra
    },
    {
        id: 16,
        altText : "stayvitsa_image",
        imgSrc : stayvista
    },
    {
        id: 17,
        altText : "digo_blue_image",
        imgSrc : digo_blue
    }
]