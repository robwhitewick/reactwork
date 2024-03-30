
function Post({image, name}) {

    const handleClick = (otterName) => {
        return console.log('You clicked ' + otterName)
    }
    
    const mouseEnter = (otterName) => {
        return console.log('Hello, ' + otterName)
    }
    const mouseExit = (otterName) => {
        return console.log('Goodbye, ' + otterName)
    }

    return (
        <li className='post-component' onMouseEnter={() => mouseEnter(name)} onMouseLeave={() => mouseExit(name)}>
            <button onClick={() => handleClick(name)}>
                <img src={image} alt={name}/>
                <p className='post-name'>{name}</p>
            </button>
        </li>
    )
}
export default Post;