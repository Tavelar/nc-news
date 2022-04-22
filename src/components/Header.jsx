const Header = ({user}) => {
    return (
        <>
        <p className="login">logged in as {user}</p>
        <h1 className="text-3xl font-bold underline">Nc News</h1>
        </>
    )
}

export default Header