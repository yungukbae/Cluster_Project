import './Detail_Page.css'

const Detail_Page = () => {

    return(
        <div>
            <div className="container">
                <div id="detail_content">


                <div id="top_section">
                    <div className="header_bar">
                        <div className="group_subject"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                            <title>React Logo</title>
                            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                            <g stroke="#61dafb" stroke-width="1" fill="none">
                                <ellipse rx="11" ry="4.2"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                        </svg></div>
                    </div>

                    <div className="group_info">
                        <div className="group_type">Study</div>
                        <div className="create_at">1 day ago..</div>
                        <div className="group_title">스터디 그룹원 구합니다.</div>
                        <div className="create_user">김갑수</div>
                        <div className="tag_data"><a href="#">#react</a><a href="#">#javascript</a><a href="#">#web</a><a href="#">#프론트엔드</a></div>
                    </div>
                    <div className="contact_info">
                        <p>email: example@example.com chat:openchat.kakao.eoefij2i1</p>
                    </div>
                </div>



                <div id="middle_section">

                    <div className="group_content">
                        <p>애국가의 가사는 1900년대 초에 쓰여졌다. 작사자는 크게 윤치호라는 설과 안창호라는 설 두 가지가 있으며, 국사편찬위원회의 공식적인 입장으로는 미상이다. 작사자 윤치호 설은 윤치호가 애국가의 가사를 1907년에 써서 후에 그 자신의 이름으로 출판했다는 것이다. 한편 안창호가 썼다는 주장은 안창호가 애국가를 보급하는 데에 앞장섰다는 데에 중점을 두고 있다. 1908년에 출판된 가사집 《찬미가》에 수록된 것을 비롯한 많은 일제 강점기의 애국가 출판물은 윤치호를 작사자로 돌리고 있는 등 윤치호 설에는 증거가 많은 반면[4] 안창호 설에는 실증적인 자료가 부족하다.</p>
                    </div>

                    <div className="group_recent">신규그룹</div>
                    <div className="incruit_number">3/5</div>

                    <div className="contact_date">
                    <span>주3회</span>
                    <ul>
                        <li className="Mon">월</li>
                        <li className="Tue">화</li>
                        <li className="Wed">수</li>
                        <li className="Thu">목</li>
                        <li className="Fri">금</li>
                        <li className="Sat">토</li>
                        <li className="Sun">일</li>
                    </ul>
                    </div>

                    <div className="contact_location">
                        map
                    </div>


                </div>



                    <div id="bottom_section">



                </div>



                </div>
            </div>
        </div>
    );
}

export default Detail_Page;