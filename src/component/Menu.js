import styled from 'styled-components';

const MenuButton = styled.button`

    position:fixed;
    width:50px;
    height:50px;
    left:0;
    top:0;
    font-size:30px;
    border:0;
    outline:0;
    cursor:pointer;

`

const Menu = () => {

    return(
        <div>
            <MenuButton>
                <i className="fas fa-bars"></i>
            </MenuButton>
        </div>
    )

}

export default Menu;