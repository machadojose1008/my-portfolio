import './nav-bar.styles.scss';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <div className="name">José Guilherme</div>
            <div className='links-container'>
                <a>Meus Projetos</a>
                <a>Sobre Mim</a>
                <a>Contatos</a>
            </div>
        </div>
    )
}

export default NavigationBar;