import profile from "../../assets/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center py-8 border-b-2 container mx-auto w-11/12">
            <h1 className='text-4xl font-bold '>Knowledge Cafe</h1>
            {/* <img src="/src/assets/profile.png" alt=""></img> */}
            <img src={profile} alt=""></img>
        </header>
    );
};

export default Header;