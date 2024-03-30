
function Post({image, name}) {

    const handleClick = (canaryName) => {
        return window.alert('You clicked ' + canaryName)
    }
    
    const mouseEnter = (canaryName) => {
        return console.log('Hello, ' + canaryName)
    }
    const mouseExit = (canaryName) => {
        return console.log('Goodbye, ' + canaryName)
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