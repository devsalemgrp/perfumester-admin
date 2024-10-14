import React, { useEffect, useState } from 'react'
import BackgroundImage from '../../Assets/HomePage/background.png'
import Women from '../../Assets/HomePage/Women.png'
import WelcomePageModal from './Modals/welcomeSectionModal'
import HeroSectionModal from './Modals/heroSectionModal'
import Section2Modal from './Modals/section2Modal'
import CallToActionModal from './Modals/callToActionModal'
 
const Home = () => {

    //Home table 
    /**
     * 1. Welcome Section
     *  - Add another image
     * 2. Hero Section
     *  - H3 Title
     *  - H1 Title
     *  - Text
     * 3. Section 2
     *  - Replace Image1
     *  - Replace Image2
     * 4. Package Section
     *  - Hide or Not 
     * 5. Call To Action
     *  - H1 Title
     *  - Button 1
     *  - Button 2
     */


    const backgroundImages=[
        {
            image:BackgroundImage
        },
        {
            image:BackgroundImage
        }
    ]

    const section2Images = [
        {
            image :Women,
        },
        {
            image:Women,
        }
    ]

    const heroDataArray=[
        {
            'H3 Title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc tincidunt efficitur. '
        },
        {
            'H1 Title':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc tincidunt efficitur. '
        },
        {
            'Text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis sit amet nunc tincidunt efficitur. '
        }
    ]
    const ctaDataArray = [
        {
            'H1 Title': 'Exclusive brands for you!',
        },
        {
            'Button 1': 'Explore our collection',
        },
        {
            'Button 2': 'Get one of our packages',
        }
    ];

    //When i click edit on the data , this data is found in the database , which means 
    // i have the id and that whatever i change on this data , i update it on the database 

    const [isOpenModal,setIsOpenModal] = useState({
        welcome:{
            addAnotherImage:false,
            deleteImage:false,
        },
        hero:false,
        section2:{
            replaceImage:false,
            deleteImage:false
        },
        cta:false
    });
  
    const [welcomeData,setWelcomeData] = useState(null);
    const [section2Data, setSection2Data] = useState(null);
    const [heroData,setHeroData] = useState(heroDataArray);
    const [callToActionData, setCallToActionData] = useState(ctaDataArray);
    

    //Opening Modal Functions
    const openWelcomeModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                welcome:{
                    ...prevState.welcome,
                    [modalType]:true
                }
            })
        )
    }
    const openHeroSectionModal=()=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                hero:true
            })
        )
    }
    const openSection2Modal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                section2:{
                    ...prevState.section2,
                    [modalType]:true
                }
            })
        )
    }
    const openCtaModal =()=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                cta:true
            })
        )
    }
    

    //Closing Modal Functions 
    const closeWelcomeModal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                welcome:{
                    ...prevState.welcome,
                    [modalType]:false
                }
            })
        )
    }

    const closeHeroSectionModal=()=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                hero:false
            })
        )
    }

    const closeSection2Modal=(modalType)=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                section2:{
                    ...prevState.section2,
                    [modalType]:false
                }
            })
        )
    }

    const closeCtaModal = ()=>{
        setIsOpenModal(
            (prevState)=>({
                ...prevState,
                cta:false}))
    }

    



  return (
    <div className='w-full p-20 flex flex-col gap-y-5'>
        <WelcomePageModal
            isOpenModal={isOpenModal}
            closeModal={closeWelcomeModal}  
            data={welcomeData}
        >
        </WelcomePageModal>

        <HeroSectionModal
            isOpenModal={isOpenModal}
            closeModal={closeHeroSectionModal}  
            data={heroData}
        >
        </HeroSectionModal>

        <Section2Modal
            isOpenModal={isOpenModal}
            closeModal={closeSection2Modal}
            data={section2Data}
            >

        </Section2Modal>

        <CallToActionModal
            isOpenModal={isOpenModal}
            closeModal={closeCtaModal}
            data={callToActionData}

        >
        </CallToActionModal>


        <h1 className='text-4xl'>Home Page</h1>
        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md '>
            <div className='flex flex-row items-center justify-between'>
                <h1 className='text-3xl'>Welcome Section</h1>

                <div 
                    className='p-2 px-5 bg-[#323d4e] rounded-md flex flex-row gap-2 items-center cursor-pointer'
                    onClick={()=>{
                        openWelcomeModal('addAnotherImage');
                        
                    }}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                        <path d="M9 5.75712H5.14286V9.61426H3.85714V5.75712H0V4.4714H3.85714V0.614258H5.14286V4.4714H9V5.75712Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                    </svg>
                    <span>Add another image </span>
                </div>
            </div>
            

            <div className='flex flex-row gap-2'>
                {backgroundImages.map((element,index)=>(
                    <div className='border-2 flex flex-col gap-4 p-3'>
                        <img src={element.image} alt="background" />
                        <div className='flex flex-row justify-between'>
                            <div className='border bg-[#282828] p-1 rounded-md cursor-pointer'>
                                <span className='text-sm'>Set as Image 1</span>
                            </div>

                            <div
                                onClick={()=>{
                                    setWelcomeData(element)
                                    openWelcomeModal('deleteImage')}} 
                                className=' bg-white text-black px-2 flex items-center rounded-md cursor-pointer'>
                                <span className='text-sm'>Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div 
            className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md' 
            onClick={()=>{
                openHeroSectionModal('hero')}
            }
        >

            <h1 className='text-3xl'>Hero Section</h1>

            {heroDataArray.map((element,index)=>(
                <div className='border-2 p-2 flex flex-col'>
                    <h1>{Object.keys(element)}</h1>
                    <p className='opacity-60'> 
                        {Object.values(element)}
                    </p>
                </div>
                
            ))}

            
        </div>

        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md'>
            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-3xl'>Section 2</h1>

                <div className='p-2 px-4 flex flex-row gap-1 bg-[#323d4e] rounded-md items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M0.50182 0.65611L1.14415 0.0187988L9.53458 8.40923L8.89727 9.05156L7.35166 7.50595C6.77457 7.69664 6.16235 7.79701 5.52002 7.79701C3.01092 7.79701 0.868149 6.23635 0 4.03336C0.346256 3.15016 0.898258 2.37233 1.60081 1.7551L0.50182 0.65611ZM5.52002 2.5279C5.91929 2.5279 6.30221 2.68651 6.58454 2.96884C6.86687 3.25117 7.02548 3.63409 7.02548 4.03336C7.02573 4.20426 6.99688 4.37396 6.94017 4.53518L5.0182 2.61321C5.17942 2.55649 5.34912 2.52765 5.52002 2.5279ZM5.52002 0.269709C8.02912 0.269709 10.1719 1.83037 11.04 4.03336C10.6302 5.0736 9.93431 5.97656 9.03276 6.6378L8.32018 5.9202C9.01417 5.44018 9.57386 4.79066 9.94607 4.03336C9.54043 3.20529 8.91059 2.50764 8.12816 2.01973C7.34573 1.53182 6.44211 1.27323 5.52002 1.27335C4.97304 1.27335 4.43609 1.36368 3.93427 1.52426L3.16147 0.756474C3.88409 0.445346 4.68198 0.269709 5.52002 0.269709ZM1.09397 4.03336C1.49961 4.86143 2.12945 5.55908 2.91188 6.04698C3.69431 6.53489 4.59793 6.79349 5.52002 6.79337C5.86628 6.79337 6.20751 6.75824 6.52366 6.68799L5.37951 5.53882C5.03032 5.50139 4.70447 5.34556 4.45615 5.09723C4.20782 4.8489 4.05199 4.52305 4.01456 4.17387L2.30837 2.46266C1.81157 2.88921 1.39506 3.42114 1.09397 4.03336Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                    </svg>
                    <span>Hide</span>
                </div>
            </div>

            <div className='flex flex-row gap-2'>
                {section2Images.map((element,index)=>(
                    <div className='border flex flex-col gap-2 p-3'>
                        <img src={element.image} alt="background" />
                        <div className='flex flex-row justify-between'>
                            <div 
                                className='border bg-[#282828] rounded-md p-1 cursor-pointer'
                                onClick={()=>{
                                    setSection2Data(element);
                                    openSection2Modal('replaceImage')
                                }}
                                >
                                <span className='text-sm'>Replace Image</span>
                            </div>

                            <div className=' bg-white text-black px-2 rounded-md flex items-center cursor-pointer'>
                                <span className='text-sm'>Delete</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        <div className='bg-black p-5 w-full flex flex-row items-center justify-between rounded-md'>
            <h1 className='text-3xl'>Package Section</h1>
            <div className='p-2 px-4 flex flex-row gap-1 bg-[#323d4e] rounded-md items-center cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M0.50182 0.65611L1.14415 0.0187988L9.53458 8.40923L8.89727 9.05156L7.35166 7.50595C6.77457 7.69664 6.16235 7.79701 5.52002 7.79701C3.01092 7.79701 0.868149 6.23635 0 4.03336C0.346256 3.15016 0.898258 2.37233 1.60081 1.7551L0.50182 0.65611ZM5.52002 2.5279C5.91929 2.5279 6.30221 2.68651 6.58454 2.96884C6.86687 3.25117 7.02548 3.63409 7.02548 4.03336C7.02573 4.20426 6.99688 4.37396 6.94017 4.53518L5.0182 2.61321C5.17942 2.55649 5.34912 2.52765 5.52002 2.5279ZM5.52002 0.269709C8.02912 0.269709 10.1719 1.83037 11.04 4.03336C10.6302 5.0736 9.93431 5.97656 9.03276 6.6378L8.32018 5.9202C9.01417 5.44018 9.57386 4.79066 9.94607 4.03336C9.54043 3.20529 8.91059 2.50764 8.12816 2.01973C7.34573 1.53182 6.44211 1.27323 5.52002 1.27335C4.97304 1.27335 4.43609 1.36368 3.93427 1.52426L3.16147 0.756474C3.88409 0.445346 4.68198 0.269709 5.52002 0.269709ZM1.09397 4.03336C1.49961 4.86143 2.12945 5.55908 2.91188 6.04698C3.69431 6.53489 4.59793 6.79349 5.52002 6.79337C5.86628 6.79337 6.20751 6.75824 6.52366 6.68799L5.37951 5.53882C5.03032 5.50139 4.70447 5.34556 4.45615 5.09723C4.20782 4.8489 4.05199 4.52305 4.01456 4.17387L2.30837 2.46266C1.81157 2.88921 1.39506 3.42114 1.09397 4.03336Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                </svg>
                <span>Hide</span>
            </div>
        </div>

        <div className='bg-black p-5 w-full flex flex-col gap-y-2 rounded-md' >

            <div className='flex flex-row justify-between items-center'>
                <h1 className='text-3xl'>Call To Action</h1>

                <div className='p-2 px-4 flex flex-row gap-1 bg-[#323d4e] rounded-md items-center cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path d="M0.50182 0.65611L1.14415 0.0187988L9.53458 8.40923L8.89727 9.05156L7.35166 7.50595C6.77457 7.69664 6.16235 7.79701 5.52002 7.79701C3.01092 7.79701 0.868149 6.23635 0 4.03336C0.346256 3.15016 0.898258 2.37233 1.60081 1.7551L0.50182 0.65611ZM5.52002 2.5279C5.91929 2.5279 6.30221 2.68651 6.58454 2.96884C6.86687 3.25117 7.02548 3.63409 7.02548 4.03336C7.02573 4.20426 6.99688 4.37396 6.94017 4.53518L5.0182 2.61321C5.17942 2.55649 5.34912 2.52765 5.52002 2.5279ZM5.52002 0.269709C8.02912 0.269709 10.1719 1.83037 11.04 4.03336C10.6302 5.0736 9.93431 5.97656 9.03276 6.6378L8.32018 5.9202C9.01417 5.44018 9.57386 4.79066 9.94607 4.03336C9.54043 3.20529 8.91059 2.50764 8.12816 2.01973C7.34573 1.53182 6.44211 1.27323 5.52002 1.27335C4.97304 1.27335 4.43609 1.36368 3.93427 1.52426L3.16147 0.756474C3.88409 0.445346 4.68198 0.269709 5.52002 0.269709ZM1.09397 4.03336C1.49961 4.86143 2.12945 5.55908 2.91188 6.04698C3.69431 6.53489 4.59793 6.79349 5.52002 6.79337C5.86628 6.79337 6.20751 6.75824 6.52366 6.68799L5.37951 5.53882C5.03032 5.50139 4.70447 5.34556 4.45615 5.09723C4.20782 4.8489 4.05199 4.52305 4.01456 4.17387L2.30837 2.46266C1.81157 2.88921 1.39506 3.42114 1.09397 4.03336Z" fill="white" style={{fill:'white',fillOpacity:1}}/>
                    </svg>
                    <span>Hide</span>
                </div>
            </div>

            {ctaDataArray.map((element,index)=>(
                <div className='border-2 p-2 flex flex-col' onClick={()=>openCtaModal()}>
                    <h1>{Object.keys(element)}</h1>
                    <p className='opacity-60'> 
                        {Object.values(element)}
                    </p>
                </div>
            ))}
            
        </div>

        
        
    </div>
  )
}

export default Home