import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', "남성", "신생아/유아", 'H&M Home', "Sale", "지속가능성"];
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    }

    const logOut = () => {
        setAuthenticate(false);
        navigate('/');
    }

    const search = (e) => {
        if(e.key === "Enter") {
            /* e.target ≒ this, 이벤트가 발생한 요소 자체 */
            let keyword = e.target.value;
            navigate(`/?q=${keyword}`);
        }
    }

    return (
        <header>
            <nav>

                {/* 이렇게 세 영역으로 */}
                <div>
                    {authenticate == false ?
                        <div className='login-button' onClick={ goLogin }>
                            {/* 이렇게 한 컨테이너에 넣어서 다루기 */}
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            <div>로그인</div>
                        </div>
                    :
                        <div className='login-button' onClick={ logOut }>
                            {/* 이렇게 한 컨테이너에 넣어서 다루기 */}
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                            <div>로그아웃</div>
                        </div>
                    }
                </div>

                <div className='nav-section'>
                    <img width={100} src='https://www2.hm.com/hm-logo.png'></img>
                </div>

                <div className='menu-area'>
                {/* 전체 메뉴 바가 움직이길 바란다면 컨테이너 요소에 스타일 주기  */}
                    <ul className='menu-list'>
                        {/* 배열의 요소를 따라 태그와 함께 반복해주기 */}
                        { menuList.map((menu) => (<li>{menu}</li>)) }
                    </ul>
                    <div>
                        <FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon>
                        {/* onKeyPress 이벤트 적용하기 */}
                        <input type="text"
                        placeholder='제품검색' className='search-area' onKeyPress={(e) => search(e)}>
                        </input>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Navbar;