import { BsBarChart, BsCameraReels, BsCodeSlash, BsCoin, BsCreditCard2Back, BsEnvelopeAt, BsFacebook, BsFileEarmarkTextFill, BsGraphUpArrow, BsHouseCheck, BsInstagram, BsLayers, BsLinkedin, BsPatchCheck, BsPatchQuestion, BsPeopleFill, BsPersonCheck, BsPinMap, BsPinMapFill, BsPinterest, BsSuitHeart, BsTwitter, BsYelp } from "react-icons/bs";
import { FaStar, FaStarHalfStroke, FaHammer, FaWrench, FaPaintRoller, FaPlug, FaScrewdriverWrench, FaHouse, FaBroom, FaLeaf } from "react-icons/fa6";

import list1 from '../assets/img/list-1.jpg'
import list2 from '../assets/img/list-2.jpg'
import list3 from '../assets/img/list-3.jpg'
import list4 from '../assets/img/list-4.jpg'
import list5 from '../assets/img/list-5.jpg'
import list6 from '../assets/img/list-6.jpg'
import list7 from '../assets/img/list-7.jpg'
import list8 from '../assets/img/list-8.jpg'
import list9 from '../assets/img/list-9.jpg'

import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'
import team5 from '../assets/img/team-5.jpg'
import team6 from '../assets/img/team-6.jpg'
import team7 from '../assets/img/team-7.jpg'
import team8 from '../assets/img/team-8.jpg'
import team9 from '../assets/img/team-9.jpg'

import blog1 from '../assets/img/blog-2.jpg'
import blog2 from '../assets/img/blog-3.jpg'
import blog3 from '../assets/img/blog-4.jpg'
import blog4 from '../assets/img/blog-5.jpg'
import blog5 from '../assets/img/blog-6.jpg'
import blog6 from '../assets/img/blog-1.jpg'

import cats1 from '../assets/img/cats/catt-1.jpg'
import cats2 from '../assets/img/cats/catt-2.jpg'
import cats3 from '../assets/img/cats/catt-3.jpg'
import cats4 from '../assets/img/cats/catt-4.jpg'
import cats5 from '../assets/img/cats/catt-5.jpg'
import cats6 from '../assets/img/cats/catt-6.jpg'
import cats7 from '../assets/img/cats/catt-7.jpg'
import cats8 from '../assets/img/cats/catt-8.jpg'
import cats9 from '../assets/img/cats/catt-9.jpg'
import cats10 from '../assets/img/cats/catt-10.jpg'

import loction1 from '../assets/img/city/location-1.jpg'
import loction2 from '../assets/img/city/location-2.jpg'
import loction3 from '../assets/img/city/location-3.jpg'
import loction4 from '../assets/img/city/location-4.jpg'
import loction5 from '../assets/img/city/location-5.jpg'
import loction6 from '../assets/img/city/location-6.jpg'

import event1 from '../assets/img/eve-1.jpg'
import event2 from '../assets/img/eve-2.jpg'
import event3 from '../assets/img/eve-3.jpg'

import review1 from '../assets/img/google.png'
import review2 from '../assets/img/trustpilot.png'
import review3 from '../assets/img/capterra.png'

export const categoryData = [
    {
        image:cats1,
        icon:FaHammer,
        title:'General Contractors',
        list:'85 Contractors'
    },
    {
        image:cats2,
        icon:FaWrench,
        title:'Plumbing Services',
        list:'67 Contractors'
    },
    {
        image:cats3,
        icon:FaPlug,
        title:'Electrical Services',
        list:'52 Contractors'
    },
    {
        image:cats4,
        icon:FaPaintRoller,
        title:'Painting & Decorating',
        list:'73 Contractors'
    },
    {
        image:cats5,
        icon:BsHouseCheck,
        title:'HVAC Services',
        list:'44 Contractors'
    },
    {
        image:cats6,
        icon:FaScrewdriverWrench,
        title:'Home Repair',
        list:'91 Contractors'
    },
    {
        image:cats7,
        icon:FaHouse,
        title:'Roofing Specialists',
        list:'38 Contractors'
    },
    {
        image:cats8,
        icon:BsLayers,
        title:'Flooring Installation',
        list:'56 Contractors'
    },
    {
        image:cats9,
        icon:FaLeaf,
        title:'Landscaping & Gardening',
        list:'62 Contractors'
    },
    {
        image:cats10,
        icon:FaBroom,
        title:'Cleaning Services',
        list:'49 Contractors'
    },
    {
        image:cats1,
        icon:BsCodeSlash,
        title:'Kitchen Remodeling',
        list:'35 Contractors'
    },
    {
        image:cats2,
        icon:BsSuitHeart,
        title:'Bathroom Renovation',
        list:'41 Contractors'
    },
]

export const listData = [
    {
        id:1,
        image:list1,
        user:team1,
        status:'open',
        featured:true,
        title:'Elite Home Builders',
        desc:'Professional general contracting services for residential and commercial projects.',
        call:'+1 (555) 123-4567',
        loction:'Denver, Colorado',
        tag:'General Contractor',
        tagIcon:FaHammer,
        tagIconStyle:'catIcon me-2 cats-1',
        review:'46 Reviews',
        rating:'good',
        ratingRate:'4.5',
        instantBooking:false
    },
    {
        id:2,
        image:list2,
        user:team2,
        status:'open',
        featured:false,
        title:'Pro Plumbing Solutions',
        desc:'Licensed plumber with 15+ years experience in residential and commercial plumbing.',
        call:'+1 (555) 987-6543',
        loction:'Austin, Texas',
        tag:'Plumbing',
        tagIcon:FaWrench,
        tagIconStyle:'catIcon me-2 cats-2',
        review:'35 Reviews',
        rating:'midium',
        ratingRate:'4.3',
        instantBooking:true
    },
    {
        id:3,
        image:list3,
        user:team3,
        status:'open',
        featured:true,
        title:'Spark Electric Services',
        desc:'Certified electrician providing safe and reliable electrical installations and repairs.',
        call:'+1 (555) 456-7890',
        loction:'Seattle, Washington',
        tag:'Electrical',
        tagIcon:FaPlug,
        tagIconStyle:'catIcon me-2 cats-3',
        review:'52 Reviews',
        rating:'excellent',
        ratingRate:'4.8',
        instantBooking:false
    },
    {
        id:4,
        image:list4,
        user:team4,
        status:'open',
        featured:false,
        title:'Perfect Paint Professionals',
        desc:'Interior and exterior painting specialists with premium quality finishes.',
        call:'+1 (555) 321-9876',
        loction:'Phoenix, Arizona',
        tag:'Painting',
        tagIcon:FaPaintRoller,
        tagIconStyle:'catIcon me-2 cats-4',
        review:'72 Reviews',
        rating:'good',
        ratingRate:'4.6',
        instantBooking:true
    },
    {
        id:5,
        image:list5,
        user:team5,
        status:'open',
        featured:true,
        title:'Climate Control HVAC',
        desc:'Expert heating, ventilation, and air conditioning services for optimal comfort.',
        call:'+1 (555) 654-3210',
        loction:'Miami, Florida',
        tag:'HVAC',
        tagIcon:BsHouseCheck,
        tagIconStyle:'catIcon me-2 cats-5',
        review:'64 Reviews',
        rating:'good',
        ratingRate:'4.4',
        instantBooking:false
    },
    {
        id:6,
        image:list6,
        user:team6,
        status:'open',
        featured:false,
        title:'HandyMan Express',
        desc:'Quick and reliable home repair services for all your maintenance needs.',
        call:'+1 (555) 789-0123',
        loction:'Portland, Oregon',
        tag:'Home Repair',
        tagIcon:FaScrewdriverWrench,
        tagIconStyle:'catIcon me-2 cats-6',
        review:'58 Reviews',
        rating:'excellent',
        ratingRate:'4.7',
        instantBooking:true
    },
    {
        id:7,
        image:list7,
        user:team7,
        status:'open',
        featured:true,
        title:'Summit Roofing Contractors',
        desc:'Professional roofing installation, repair, and maintenance specialists.',
        call:'+1 (555) 147-2580',
        loction:'Atlanta, Georgia',
        tag:'Roofing',
        tagIcon:FaHouse,
        tagIconStyle:'catIcon me-2 cats-1',
        review:'41 Reviews',
        rating:'good',
        ratingRate:'4.5',
        instantBooking:false
    },
    {
        id:8,
        image:list8,
        user:team8,
        status:'open',
        featured:true,
        title:'Premium Flooring Installers',
        desc:'Expert installation of hardwood, tile, carpet, and laminate flooring.',
        call:'+1 (555) 369-2580',
        loction:'Chicago, Illinois',
        tag:'Flooring',
        tagIcon:BsLayers,
        tagIconStyle:'catIcon me-2 cats-1',
        review:'67 Reviews',
        rating:'excellent',
        ratingRate:'4.8',
        instantBooking:true
    },
    {
        id:9,
        image:list9,
        user:team9,
        status:'open',
        featured:true,
        title:'Green Gardens Landscaping',
        desc:'Professional landscaping and lawn care services to beautify your outdoor spaces.',
        call:'+1 (555) 852-7410',
        loction:'San Diego, California',
        tag:'Landscaping',
        tagIcon:FaLeaf,
        tagIconStyle:'catIcon me-2 cats-8',
        review:'76 Reviews',
        rating:'good',
        ratingRate:'4.7',
        instantBooking:false
    },
]

export const reviewData = [
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Found the Perfect Contractor"',
        desc:`Amazing platform! Found a reliable electrician within hours. The contractor was professional, on-time, and did excellent work at a fair price.`,
        image:team1,
        name:'Sarah Johnson',
        position:'Homeowner'
    },
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Professional Service Every Time"',
        desc:`As a contractor, this platform has helped me connect with quality clients. The review system builds trust and the booking process is seamless.`,
        image:team2,
        name:'Mike Rodriguez',
        position:'General Contractor'
    },
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Saved Me Time and Money"',
        desc:`No more calling dozens of contractors! I can compare ratings, read reviews, and book appointments all in one place. Highly recommend!`,
        image:team3,
        name:'Jennifer Liu',
        position:'Property Manager'
    },
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Excellent Quality Control"',
        desc:`The verification process for contractors gives me confidence. All the contractors I've hired through this platform have been licensed and insured.`,
        image:team4,
        name:'David Chen',
        position:'Real Estate Developer'
    },
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Growing My Business"',
        desc:`As a small contractor, this platform has been game-changing. I've doubled my client base and the project management tools are fantastic.`,
        image:team5,
        name:'Maria Gonzalez',
        position:'Painting Contractor'
    },
    {
        rate:[FaStar,FaStar,FaStar,FaStar,FaStar],
        title:'"Transparent Pricing"',
        desc:`Love that I can see upfront pricing and compare multiple contractors. No hidden fees or surprise charges. The booking system is user-friendly.`,
        image:team6,
        name:'Robert Taylor',
        position:'Homeowner'
    },
]

export const blogData = [
    {
        id:1,
        image:blog1,
        title:'10 Essential Home Maintenance Tips Every Homeowner Should Know',
        desc:"Discover the key maintenance tasks that can prevent costly repairs and keep your home in excellent condition year-round.",
        date:'13th Sept 2025',
        views:'12k Views'
    },
    {
        id:2,
        image:blog2,
        title:'How to Choose the Right Contractor for Your Home Project',
        desc:"A comprehensive guide to finding, vetting, and hiring reliable contractors for your renovation or repair projects.",
        date:'29th Nov 2025',
        views:'33k Views'
    },
    {
        id:3,
        image:blog3,
        title:'Spring Home Improvement Projects That Add Value',
        desc:"Learn about the best spring renovation projects that increase your home's value and improve your quality of life.",
        date:'13th March 2025',
        views:'15k Views'
    },
    {
        id:4,
        image:blog4,
        title:'Understanding Contractor Licenses and Insurance Requirements',
        desc:"Everything you need to know about contractor credentials, licensing requirements, and insurance protection.",
        date:'5th May 2025',
        views:'12k Views'
    },
    {
        id:5,
        image:blog5,
        title:'Budget-Friendly Home Upgrades That Make a Big Impact',
        desc:"Explore cost-effective home improvement ideas that deliver maximum impact without breaking the bank.",
        date:'19th June 2025',
        views:'33k Views'
    },
    {
        id:6,
        image:blog6,
        title:'Seasonal Contractor Services: What to Schedule When',
        desc:"A seasonal guide to planning home maintenance and improvement projects throughout the year.",
        date:'20th June 2025',
        views:'15k Views'
    },
]

export const footerLink1  = ['About ContractorHub','Find Contractors','Contractor Signup','Careers']

export const footerLink2  = ['Trust & Safety','Contractor Verification','Terms of Services','Advertising','Home Improvement Blog']

export const footerLink3  = ['Help Center','Contact Support','Pricing','Insurance Info','Safety Guidelines']

export const cityData = [
    {
        image:loction1,
        gridClass:'col-xl-6 col-lg-6 col-md-4 col-sm-6',
        listing:'186 Contractors',
        name:'Jersey City',
        tag:['Plumbing','Electrical','HVAC','General']
    },
    {
        image:loction2,
        gridClass:'col-xl-3 col-lg-3 col-md-4 col-sm-6',
        listing:'324 Contractors',
        name:'San Diego',
        tag:['Landscaping','Roofing','Painting','Repair']
    },
    {
        image:loction3,
        gridClass:'col-xl-3 col-lg-3 col-md-4 col-sm-6',
        listing:'298 Contractors',
        name:'New Orleans',
        tag:['Flooring','Kitchen','Bathroom','Clean']
    },
    {
        image:loction4,
        gridClass:'col-xl-3 col-lg-3 col-md-4 col-sm-6',
        listing:'142 Contractors',
        name:'San Antonio',
        tag:['General','HVAC','Plumbing','Electrical']
    },
    {
        image:loction5,
        gridClass:'col-xl-3 col-lg-3 col-md-4 col-sm-6',
        listing:'456 Contractors',
        name:'Los Angeles',
        tag:['Remodeling','Painting','Landscaping','Repair']
    },
    {
        image:loction6,
        gridClass:'col-xl-6 col-lg-6 col-md-4 col-sm-6',
        listing:'278 Contractors',
        name:'San Francisco',
        tag:['Tech Install','HVAC','General','Electrical']
    },
]

export const eventData = [
    {
        image:event1,
        date:'13',
        month:'March',
        tag:'Home Show',
        tagIcon:FaHammer,
        iconStyle:'badge badge-xs badge-danger',
        title:'Spring Home & Garden Expo',
        time:'10:30 AM To 14:40 PM'
    },
    {
        image:event2,
        date:'5',
        month:'May',
        tag:'Workshop',
        tagIcon:FaScrewdriverWrench,
        iconStyle:'badge badge-xs badge-success',
        title:'DIY Home Repair Workshop',
        time:'8:00 AM To 12:30 PM'
    },
    {
        image:event3,
        date:'19',
        month:'June',
        tag:'Networking',
        tagIcon:FaHouse,
        iconStyle:'badge badge-xs badge-warning',
        title:'Contractor Networking Event',
        time:'6:30 PM To 9:20 PM'
    },
]

export const workData = [
    {
        icon:BsPinMap,
        title:'Find Local Contractors',
        desc:'Search and discover verified contractors in your area using our comprehensive directory and location-based search tools.'
    },
    {
        icon:BsEnvelopeAt,
        title:'Connect & Compare',
        desc:'Contact multiple contractors, read reviews, compare quotes, and evaluate their portfolios to make informed decisions.'
    },
    {
        icon:BsPatchCheck,
        title:'Book with Confidence',
        desc:'Schedule appointments, track project progress, and manage payments through our secure platform with verified professionals.'
    },
]
export const reviewData2 = [
    {
        image:review1,
        rate:'4.8',
        star:[FaStar,FaStar,FaStar,FaStar,FaStarHalfStroke],
        reviews:'422k Reviews'
    },
    {
        image:review2,
        rate:'4.8',
        star:[FaStar,FaStar,FaStar,FaStar,FaStarHalfStroke],
        reviews:'422k Reviews'
    },
    {
        image:review3,
        rate:'4.8',
        star:[FaStar,FaStar,FaStar,FaStar,FaStarHalfStroke],
        reviews:'422k Reviews'
    },
]

export const adminCounter = [
    {
        icon:BsPinMapFill,
        iconStyle:'text-success',
        number:23,
        symbol:'',
        title:'Active Listings',
        bg:'bg-light-success'
    },
    {
        icon:BsGraphUpArrow,
        iconStyle:'text-danger',
        number:32,
        symbol:'K',
        title:'Total Views',
        bg:'bg-light-danger'
    },
    {
        icon:BsSuitHeart,
        iconStyle:'text-warning',
        number:4,
        symbol:'K',
        title:'Total Saved',
        bg:'bg-light-warning'
    },
    {
        icon:BsYelp,
        iconStyle:'text-info',
        number:88,
        symbol:'',
        title:'Total Reviews',
        bg:'bg-light-info'
    },
]

export const chatData = [
    {
        image:team8,
        name:'Warlinton Diggs',
        time:'08:20 AM',
        msg:'How are you stay dude?',
        pandding:false,
        message:0
    },
    {
        image:team7,
        name:'Chad M. Pusey',
        time:'06:40 AM',
        msg:'Hey man it is possible to pay mo..',
        pandding:true,
        message:5
    },
    {
        image:team6,
        name:'Mary D. Homer',
        time:'08:10 AM',
        msg:'Dear you have a spacial offers...',
        pandding:true,
        message:3
    },
    {
        image:team5,
        name:'Marc S. Solano',
        time:'10:10 AM',
        msg:'Sound good! We will meet you aft...',
        pandding:false,
        message:0
    },
    {
        image:team4,
        name:'Sandra W. Barge',
        time:'07:20 PM',
        msg:'I am also good and how are...',
        pandding:true,
        message:2
    },
]

export const invoiceData = [
    {
       name:'Basic Platinum Plan',
       id:'#PC01362' ,
       status:'Paid',
       date:'Sept 13,2025'
    },
    {
       name:'Standard Platinum Plan',
       id:'#PC01363' ,
       status:'Unpaid',
       date:'March 13,2025'
    },
    {
       name:'Extended Platinum Plan',
       id:'#PC01364' ,
       status:'On Hold',
       date:'June 19,2025'
    },
    {
       name:'Basic Platinum Plan',
       id:'#PC01365' ,
       status:'Paid',
       date:'June 20,2025'
    },
]

export const bookingData = [
    {
        image:team1,
        title:'Mubarak Barbar Shop',
        tag:'Salon',
        pending:true,
        unpaid:true,
        approved:false,
        cancelled:false,
        reject:true,
        approve:true,
        sendMsg:true,
        date:'13.03.2025 at 1:00 PM',
        info:'02 Adults, 01 Child',
        name:'Kallay Mortin',
        contact:'41 125 254 2563',
        price:'$25.50'
    },
    {
        image:team2,
        title:'Sunrise Apartment',
        tag:'Apartment',
        pending:false,
        unpaid:false,
        approved:true,
        cancelled:false,
        reject:false,
        approve:false,
        sendMsg:true,
        date:'14.06.2024 - 15.06.2025 at 11:30 AM',
        info:'02 Adults, 02 Child',
        name:'Kalla Adroise',
        contact:'41 125 254 6258',
        price:'$17,00'
    },
    {
        image:team3,
        title:'Blue Star Cafe',
        tag:'Restaurants',
        pending:false,
        unpaid:false,
        approved:false,
        cancelled:true,
        reject:false,
        approve:false,
        sendMsg:false,
        date:'12.05.2024 at 16:30 AM',
        info:'02 Adults, 01 Child',
        name:'Sorika Michel',
        contact:'441 125 254 625',
        price:'$245.00'
    },
    {
        image:team4,
        title:'now Valley Resort',
        tag:'Hotel',
        pending:false,
        unpaid:true,
        approved:true,
        cancelled:false,
        reject:false,
        approve:true,
        sendMsg:true,
        date:'14.10.2024 at 08:30 PM',
        info:'03 Adults, 01 Child',
        name:'Kallay Mortin',
        contact:'41 125 254 2563',
        price:'$25.50'
    },
]
export const adminListing = [
    {
        image:list1,
        title:'The Big Bumbble Gym',
        location:'410 Apex Avenue, California USA',
        review:'412 Reviews',
        expired:false
    },
    {
        image:list2,
        title:'Greenvally Real Estate',
        location:'410 Apex Avenue, California USA',
        review:'152 Reviews',
        expired:true
    },
    {
        image:list3,
        title:'The Blue Ley Light',
        location:'520 Adde Resort, Liverpool UK',
        review:'302 Reviews',
        expired:false
    },
    {
        image:list4,
        title:'Shreya Study Center',
        location:'102 Hozri Avenue, California USA',
        review:'180 Reviews',
        expired:false
    },
]

export const message = [
    {
        id:1,
        image:team1,
        name:'Karan Shivraj',
        time:'Today'
    },
    {
        id:2,
        image:team2,
        name:'Shree Preet',
        time:'just Now'
    },
    {
        id:3,
        image:team3,
        name:'Shikhar Musk',
        time:'30 min ago'
    },
    {
        id:4,
        image:team4,
        name:'Mortin Mukkar',
        time:'Yesterday'
    },
    {
        id:5,
        image:team5,
        name:'Melly Arjun',
        time:'Today'
    },
    {
        id:6,
        image:team6,
        name:'Mortin Mukkar',
        time:'Yesterday'
    },
]

export const adminReview =[
    {
        image:team1,
        name:'Karan Shivraj',
        date:'13th March 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
    {
        image:team2,
        name:'Shree Preet',
        date:'5th May 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
    {
        image:team3,
        name:'Shikhar Musk',
        date:'19th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
    {
        image:team4,
        name:'Mortin Mukkar',
        date:'20th June 2025',
        desc:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    },
]

export const earning = [
    {
        name:'Swarna Apartment',
        id:'#PC01362',
        date:'Dec 10,2025',
        value:'$200 USD',
        free:'$17.10 USD'
    },
    {
        name:'Blue Cafe',
        id:'#PC01363',
        date:'Jan 12,2025',
        value:'$150 USD',
        free:'$12.30 USD'
    },
    {
        name:'Kanoop Barbar Shop',
        id:'#PC01364',
        date:'Sep 22,2023',
        value:'$75.50 USD',
        free:'$10.20 USD'
    },
    {
        name:'Classic Casino',
        id:'#PC01365',
        date:'Dec 16,2024',
        value:'$652 USD',
        free:'$80.90 USD'
    },
]

export const counterData = [
    {
        number:145,
        symbol:'K',
        title:'Daily New Visitors'
    },
    {
        number:670,
        symbol:'',
        title:'Active Listings'
    },
    {
        number:22,
        symbol:'',
        title:'Won Awards'
    },
    {
        number:642,
        symbol:'K',
        title:'Happy Customers'
    },
]

export const teamData = [
    {
        image:team1,
        name:'Julia F. Mitchell',
        position:'Chief Executive'
    },
    {
        image:team2,
        name:'Maria P. Thomas',
        position:'Co-Founder'
    },
    {
        image:team3,
        name:'Willa R. Fontaine',
        position:'Field Manager'
    },
    {
        image:team4,
        name:'Rosa R. Anderson',
        position:'Business Executive'
    },
    {
        image:team5,
        name:'Jacqueline J. Miller',
        position:'Account Manager'
    },
    {
        image:team6,
        name:'Oralia R. Castillo',
        position:'Writing Manager'
    },
    {
        image:team7,
        name:'Lynda W. Ruble',
        position:'Team Manager'
    },
]
export const mostViewBlog = [
    {
        image:blog1,
        title:'Top 10 Free Bootstrap Templates for Your Next Project',
        date:'13th Sept 2025'
    },
    {
        image:blog2,
        title:'Top 10 Free Bootstrap Templates for Your Next Project',
        date:'29th Nov 2025'
    },
    {
        image:blog3,
        title:'Top 10 Free Bootstrap Templates for Your Next Project',
        date:'13th March 2025'
    },
    {
        image:blog4,
        title:'Top 10 Free Bootstrap Templates for Your Next Project',
        date:'5th May 2025'
    },
    {
        image:blog5,
        title:'Top 10 Free Bootstrap Templates for Your Next Project',
        date:'19th June 2025'
    },
]

export const blogTag = ['Job','Web Design','Development','Figma','Photoshop','HTML']

export const blogSocial = [
    BsFacebook,BsTwitter,BsInstagram,BsPinterest,BsLinkedin
]

export const helpData = [
    {
        icon:BsPeopleFill,
        title:'Community',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Share','Network','Discussion']
    },
   
    {
        icon:BsFileEarmarkTextFill,
        title:'Order',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Tracking','Delivery','Management']
    },
    {
        icon:BsCoin,
        title:'Refund Policy',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Methods','Process']
    },
    {
        icon:BsPersonCheck,
        title:'Account Issues',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Profile','Settings','Password']
    },
    {
        icon:BsBarChart,
        title:'Business Helps',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Dashboard','Report','Logistics']
    },
    {
        icon:BsCreditCard2Back,
        title:'Payment',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Methods','VAT','Security']
    },
    {
        icon:BsCameraReels,
        title:'Guides',
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Tutorials','Blogs','Newsletters']
    },
    {
        icon:BsPatchQuestion,
        title:`FAQ's`,
        desc:`Think of a news blog that's filled with content hourly on the day of going live.`,
        tag:['Help','Articles']
    },
]

export const articles = [
    {
        title:'What are Favorites?',
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
    {
        title:'How Do I Add Or Change My Billing Details?',
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
    {
        title:'How do I change my username?',
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
    {
        title:'How do I change my email address?',
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
    {
        title:`I'm not receiving the verification email`,
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
    {
        title:'How do I change my password?',
        desc:`"Favorites" is a feature that allows you to save your treasured items on Envato Market. So if you see something you like, but you’re not ready to u...`
    },
]

export const faqData1 = [
    {
        id:'collapseOne',
        title:'How to Meet ListingHub Directory Agents?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseTwo',
        title:'Can I see Property Visualy?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseThree',
        title:'Can We Sell it?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseFour',
        title:'Can We Customized it According me?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseFive',
        title:'Can We Get Any Extra Services?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
]
export const faqData2 = [
    {
        id:'collapseOne2',
        title:'Can We Refund it Within 7 Days?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseTwo2',
        title:'Can We Pay Via PayPal Service?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseThree2',
        title:'Will You Accept American Express Card?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseFour2',
        title:'Will You Charge Monthly Wise?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseFive2',
        title:'Can We Get Any Extra Services?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
]
export const faqData3 = [
    {
        id:'collapseOne3',
        title:'Realcout Agent Can Chat Online?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseTwo3',
        title:'Can I Call Agent on Site?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
    {
        id:'collapseThree3',
        title:'Is This Collaborate with Oyo?',
        desc:`In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements.`
    },
]