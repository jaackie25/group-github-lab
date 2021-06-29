
import ryan from './image/ryan.jpeg'
import jackie from './image/jackie.jpg'
import mv from './image/matt.jpg'
import andie from './image/andie.jpeg'

const aboutData = [  { 

  name: 'ryan kim',
  blurb: 'i am ryan',
  img: 
  <img className="portImage" src={ryan} alt='ryan'
  />
},
  
{
  name: 'Jackie Dinh',
  blurb: 'My name is Jackie Dinh. I enjoy snowboarding and paddle boarding',
  img: 
  <img className="portImage" src={jackie} alt='jackie'
   />
},
  
{ 
  name: 'andie perez',
  blurb: 'lover of all things dark & moody',
  img: 
  <img className="portImage" src={andie} alt='andrea perez'
  />
},
  
{
  name: "Matthew Velasco",
  blurb: "Matthew Velasco is a rookie coder looking to break it in big to the hotshot coding industry. Matthew has 9 weeks of professional training and experience in the field of computer coding. Matthew is a proud owner of one Roborovski Hamster. Matthew doesn't know what else to add to this but I'm paddin it out.",
  img: 
  <img className="portImage" src={mv} alt="Matthew" 
  />
},
]

export default aboutData
