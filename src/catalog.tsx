import logo from './images/free-icon-furniture-5564847.png'
import burger from './images/Menu Candy Box.svg'
import search from './images/Search 2.svg'
import heart from './images/Heart 1.svg'
import basket from './images/Buy 2.svg'
import profile from './images/Profile 1.svg'
export const Catalog = ()=>{
    return (
        <div className='Catalog'>
            <img src={logo} alt="" className='logoCatalog'/>
            <button className='buttonCatalog'><img src={burger} alt="" />Каталог</button>
            <form action="" className='searchCatalog'>
                <input type="text" placeholder='Искать товар' />
                <button><img src={search} alt="" /></button>
            </form>
            <a className='phoneCatalog' href='+998905939927'>+998905939927</a>
            <button className='heartCatalog'><img src={heart} alt="" /></button>
            <button className='basketCatalog'><img src={basket} alt="" /></button>
            <button className='profileCatalog'><img src={profile} alt="" /></button>
        </div>
    )
}