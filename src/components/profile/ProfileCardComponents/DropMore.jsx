import {GrFormEdit, GrDocument} from 'react-icons/gr'
import {RiShareForwardFill} from 'react-icons/ri'
import {FiDownload} from 'react-icons/fi'

export default function  DropMore () {
    return (<>
         <ul className='list-unstyled'>
                                <li >
                                    <span className="mx-3"><RiShareForwardFill/></span>
                                    <span>Share Profile in a message</span>
                                </li>
                                <li >
                                    <span className="mx-3"><FiDownload/></span>
                                    <span className="text-left">Save to pdf</span>
                                </li>
                                <li >
                                    <span className="mx-3"><GrDocument/></span>
                                    <span>Build a resume</span>
                                </li>
                            </ul>
    </>
    )
}