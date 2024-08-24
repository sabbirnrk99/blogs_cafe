import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-5 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowladge Cafe</h1>
            <img className='p-1 bg-blue-300 rounded-full ' src={profile} alt="" />
        </header>
    );
};

export default Header;