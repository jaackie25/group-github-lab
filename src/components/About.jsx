export default function About(props) {
  const personData = props.aboutData.map((person, index) => {
    console.log(props.person)
    return(
      <div key={`project-${index}`}>
      <h3 key={`title-${index}`}>{person.name}</h3>
      <p key={`paragraph-${index}`}>{person.blurb}</p>
      <div key={`image-${index}`}> {person.img} </div>
    </div>
    )
  })
  return (
    <div>
       {personData}
    </div>
  )
}