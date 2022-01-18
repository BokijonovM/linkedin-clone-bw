import React, {Component} from 'react'
import DisplayList from './DisplayList';
class Experience extends React.Component {
  
  state={
      experiences:[

          {'image':'https://image.shutterstock.com/z/stock-vector-global-community-logo-icon-elements-template-community-human-logo-template-vector-community-1568433844.jpg','title':'Manager', 'info':'Full time','year':'2030','address':'Japan'},
          {'image':'https://image.shutterstock.com/image-vector/children-pre-school-logo-icon-600w-1075581656.jpg','title':'Department Head', 'info':'Full time','year':'2025','address':'Spain'},
          {'image':'https://image.shutterstock.com/image-vector/charity-logo-love-design-illustration-600w-1485471590.jpg','title':'Incharge',  'info':'Full time','year':'2022','address':'France'},
        //   {'image':'https://image.shutterstock.com/image-vector/people-care-logoabstract-family-logo-600w-1372448618.jpg','title':'Assistant',  'info':'Full time','year':'2020','address':'Budapest'},
        ],
      
      educations:[
          {'image':'https://image.shutterstock.com/z/stock-vector-university-education-logo-design-with-open-book-and-laurel-branch-university-or-college-is-golden-1135003337.jpg','title':'Strive School', 'info':'Full time','year':'2021','address':'Berlin'},
          {'image':'https://image.shutterstock.com/z/stock-vector-university-education-logo-design-670576681.jpg','title':'Harvard Business School', 'info':'Full time','year':'2018-2021','address':'California'},
          {'image':'https://image.shutterstock.com/image-vector/university-logo-template-600w-1253572435.jpg','title':'Oxford University', 'info':'Full time','year':'2017-2018','address':'Oxfor'},
        //   {'image':'https://image.shutterstock.com/image-vector/ebook-concept-design-vector-illustration-600w-257246440.jpg','title':'Lincon College', 'info':'Full time','year':'2015-2017','address':'London'},
      ],

      licenses: [
        {'image':'https://image.shutterstock.com/z/stock-vector-certificate-of-appreciation-template-gold-and-blue-color-clean-modern-certificate-with-gold-badge-1376095769.jpg','title':'Full Stack', 'info':'Full time','year':'6 months','address':'Berlin, Germany'},
        {'image':'https://image.shutterstock.com/image-vector/certificate-appreciation-templatetrendy-geometric-design-600w-600498386.jpg','title':'AI and Data Science', 'year':'4 months','address':'Rome, Italy'},
        {'image':'https://image.shutterstock.com/image-vector/certificate-appreciation-trendy-design-simple-600w-567791893.jpg','title':'Graphics Designing','year':'3 months','address':'Lisbon, Portugal'},
        {'image':'https://image.shutterstock.com/image-vector/isometric-user-interface-design-vector-600w-663441043.jpg','title':'AI and Data Science', 'year':'4 months','address':'Rome, Italy'},
        // {'image':'https://image.shutterstock.com/image-vector/color-square-composition-text-geometric-600w-1337231156.jpg','title':'Computer Science', 'year':'12 month','address':'Denamrk, Copenhagen'},
         
      ]
  }
    render() { 
        return <div className='bg-white p-3 mt-3 round-border'>
            <p>Experience</p>
            <div className='experience'>{
                this.state.experiences.map((list,i)=><DisplayList key={i} list={list}/>)
                }</div>
                <hr/>
            <p>Education</p>
            <div className='education'>{
                this.state.educations.map((list,j)=><DisplayList key={j} list={list}/>)
            }</div>
            <hr/>
            <p>Licenses & Certifications</p>
            <div className='licenses'>{
                this.state.licenses.map((list,k)=><DisplayList key={k} list={list}/>)
            }</div>
            <hr/>
        </div>
    }
}
 
export default Experience;