

const Card = ({post}) => {
  return (
    <div className='card' style={{ border: '1px solid black', width: '300px', height: '300px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', margin: '20px', backgroundColor: '#d41717' }}>
        <h2>@{post.name}</h2>
        <img src={post.image} alt="Cat" style={{ width: '60%', height: '60%', objectFit: 'cover', border: '1px solid black', borderRadius: '50%' }} />
    </div>
  )
}

export default Card