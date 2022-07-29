// import React from 'react'
// import Carousel from '../molecules/carousel/carousel'


// const HomePage=(props)=>{
    
//     const items = [
//         {
//             id: 1,
//             title: 'Dit zijn wij',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 2,
//             title: 'Pioniers',
//             linkUrl: '#',
//             active: ''
//         },
//         {
//             id: 3,
//             title: 'Footprint',
//             linkUrl: '#',
//             active: ''
//         },
//         {
//             id: 4,
//             title: 'Target discovery',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 5,
//             title: 'Onze partner Gilead',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 6,
//             title: 'Research gebieden',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 7,
//             title: 'Sterke pijplijn',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 8,
//             title: 'Filgotinib',
//             linkUrl: '#',
//             active: 'active'
//         },
//         {
//             id: 9,
//             title: 'Studies in RA',
//             linkUrl: '#',
//             active: 'active'
//         },
//     ]

//     const vertical_tab_heading = {
//         Heading : "Footprint",
//         Sub_Heading : "Klaar voor lancering"
//     }
     
//     const vertical_tab_map_footerText = [
//         {
//            abbrevation : "RA = ",
//            full_form : "Reumatoïde Artritis"
//         },
//         {
//            abbrevation : "IBD = ",
//            full_form : "Inflammatory Bowel Disease"
//         },
//     ]

//     const vertical_tab_map_list=[
//         {  
//            tab_ID : "tab1",
//            tab_content_ID: "content1",
//            year: '2020-2021',
//            heading: 'Folgotinib in RA',
//            places: 'Nederland, België, Frankrijk, Italië & Spanje',
//            upcoming : '',
//            active : '',
//            content_img : 'storybook-images/map1.png'
//         },
//         {
//            tab_ID : "tab2",
//            tab_content_ID: "content2",
//            year: '2021-2022',
//            heading: 'Folgotinib in IBD',
//            places: 'Nederland, België, Engeland & Duitsland',
//            upcoming : '',
//            active : '',
//            content_img : 'storybook-images/map2.png'
//         },
//         {
//            tab_ID : "tab3",
//            tab_content_ID: "",
//            year: '2022-2023',
//            heading: 'Toekomstige lancering',
//            places: 'Verdere uitrol in heel Europa',
//            upcoming : 'upcoming',
//            active : '',
//            content_img : ''
//         },
//     ]

//     const vertical_tab_filgotinib_list = [
//         {  
//            tab_ID:"tab_1",
//            tab_contentID:"content_1",
//            tab_list_title : "Reumatoïde artritis",
//            upcoming : "",
//            content_img : "storybook-images/filgot-1.png",
//            active : ''
     
//         },
//         { 
//            tab_ID:"tab_2",
//            tab_contentID:"content_2",
//            tab_list_title : "Colitis ulcerosa",
//            upcoming : "",
//            content_img : "storybook-images/filgot-2.png",
//            active : ""
//         },
//         {
//            tab_ID:"tab_3",
//            tab_contentID:"content_3",
//            tab_list_title : "Ziekte van Crohn",
//            upcoming : "",
//            content_img : "storybook-images/filgot-3.png",
//            active : ""
//         },
//         {
//            tab_ID:"tab_4",
//            tab_contentID:"content_4",
//            tab_list_title : "Artritis psoriatica",
//            upcoming : "",
//            content_img : "storybook-images/filgot-4.png",
//            active : ""
//         },
//         {
//            tab_ID:"tab_5",
//            tab_contentID:"content_5",
//            tab_list_title : "Ankyloserende spondylitis",
//            upcoming : "",
//            content_img : "storybook-images/filgot-5.png",
//            active : ""
//         },
//         {
//            tab_ID:"tab_6",
//            tab_contentID:"content_6",
//            tab_list_title : "Andere indicaties worden momenteel onderzocht",
//            upcoming : "upcoming",
//            content_img : "",
//            active : ""
//         },
//     ]

//     const vertical_tab_slideDeck_list =[
//         {  
//            tab_ID : "tab_11",
//            tab_content_ID: "content_11",
//            tab_list_title: 'Dit zijn wij',
//            active : '',
//            content_img : 'storybook-images/slideDeck-1.png'
//         },
//         {  
//            tab_ID : "tab_22",
//            tab_content_ID: "content_22",
//            tab_list_title: 'Pioniers',
//            active : '',
//            content_img : 'storybook-images/slideDeck-2.png'
//         },
//         {  
//            tab_ID : "tab_33",
//            tab_content_ID: "content_33",
//            tab_list_title: 'Footprint',
//            active : '',
//            content_img : 'storybook-images/slideDeck-1.png'
//         },
//         {  
//            tab_ID : "tab_44",
//            tab_content_ID: "content_44",
//            tab_list_title: 'Target discovery',
//            active : '',
//            content_img :'storybook-images/slideDeck-2.png'
//         },
//         {  
//            tab_ID : "tab_55",
//            tab_content_ID: "content_55",
//            tab_list_title: 'Onze partner Gilead',
//            active : '',
//            content_img : 'storybook-images/slideDeck-1.png'
//         },
//         {  
//            tab_ID : "tab_66",
//            tab_content_ID: "content_66",
//            tab_list_title: 'Research gebieden',
//            active : '',
//            content_img : 'storybook-images/slideDeck-2.png'
//         },
//         {  
//            tab_ID : "tab_77",
//            tab_content_ID: "content_77",
//            tab_list_title: 'Sterke pijplijn',
//            active : '',
//            content_img : 'storybook-images/slideDeck-1.png'
//         },
//         {  
//            tab_ID : "tab_88",
//            tab_content_ID: "content_88",
//            tab_list_title: 'Filgotinib',
//            active : '',
//            content_img : 'storybook-images/slideDeck-2.png'
//         },
//         {  
//            tab_ID : "tab_99",
//            tab_content_ID: "content_99",
//            tab_list_title: 'Studies in RA',
//            active : '',
//            content_img : 'storybook-images/slideDeck-1.png'
//         },
//     ]

//     return(
//         <Carousel>
//             <div className='carousel-item active'>
//                 <div className="column-control aem-GridColumn aem-GridColumn--default--12">

//                     <div className="column-control-wrapper">
//                         <div className="bg-container" style={{backgroundImage: `url(storybook-images/desktop.jpg)`}}>
//                             <div className="container-fluid">
//                                 <div className="row">
//                                     <div className="col-md-5"></div>
//                                     <div className="col-md-7">
//                                         ffdgdfgdfg
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className='carousel-item'>
//                 <div className="column-control aem-GridColumn aem-GridColumn--default--12">

//                     <div className="column-control-wrapper">
//                         <div className="bg-container">
//                             <div className="container-fluid">
//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         fdfgdfgdfgdfg
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Carousel>          
//     );
// }

// export default HomePage
