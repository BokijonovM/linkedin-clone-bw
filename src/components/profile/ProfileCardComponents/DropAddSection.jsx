import {IoIosArrowDown} from 'react-icons/io'


export default function DropAddSection () {
    return (<>
          <ul className='list-unstyled'>
                                <li className='d-flex justify-content-between grey-border-bottom p-3' >
                                    <span>Info</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>About</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Featured</span>
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Background</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Skill</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Accomplishments</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Aditional Information</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                                <li className='d-flex justify-content-between grey-border-bottom p-3'>
                                    <span>Supported Languages</span> 
                                    <span><IoIosArrowDown/></span>
                                </li>
                            </ul>
    </>
    )
}


