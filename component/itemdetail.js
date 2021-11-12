import styles from '../styles/itemdetail.module.css'

const ItemDetail = () => {


    return(
        <>
        {/* 상단 컬러 */}
           <div className={styles.topcolor}>    

           </div>
           
        {/* 중간 컨텐츠 */}
           <div className={styles.middlecontent}>
                <div className={styles.logo}>
                    <img src="./subj_logo_svg/react.svg" alt="no subject img" />
                    <img src="./subj_logo_svg/react.svg" alt="no subject img" />
                    <img src="./subj_logo_svg/react.svg" alt="no subject img" />
                </div>
                <div className={styles.contenttitle}>
                    이것은 제목입니다. 동해물과 백두산이 마르고 닳도록 하느님 보우하사 우리나라만세 아기다리 고기다리 거기다리 다금바리
                </div>
                <div className={styles.contentdivider}>
                    <div className={styles.since}>하루전</div>
                    <div className={styles.statecount}>
                    <img src="./card_state_logo/viewcnt.svg" alt="" />12
                    <img src="./card_state_logo/likecnt.svg" alt="" />252
                    </div>
                </div>
                <div className={styles.maincontent}>
                할지니 인생에 가치를 주는 원질이 되는 것이다 그들은 앞이 긴지라 착목한는 곳이 원대하고 그들은 피가 더운지라 실현에 대한 자신과 용기가 있다 그러므로 그들은 이상의 보배를 능히 품으며 그들의 이상은 아름답고 소담스러운 열매를 맺어 우리 인생을 풍부하게 하는 것이다 보라 청춘을 ! 그들의 몸이 얼마나 튼튼하며 그들의 피부가 얼마나 생생하며 그들의 눈에 무엇이 타오르고 있는가? 우리 눈이 그것을 보는 때에 우리의 귀는 생의 찬미를 듣는다 그것은 웅대한 관현악이며 미묘한 교향악이다 뼈 끝에 스며들어 가는 열락의 소리다이것은 피어나기 전인 유소년에게서 구하지 못할 바이며 시들어 가는 노년에게서 구하지 못할 바이며 오직

청춘의 끓는 피다 청춘의 피가 뜨거운지라 인간의 동산에는 사랑의 풀이 돋고 이상의 꽃이 피고 희망의 놀이 뜨고 열락의 새가 운다사랑의 풀이 없으면 인간은 사막이다 오아이스도 없는 사막이다 보이는 끝까지 찾아다녀도 목숨이 있는 때까지 방황하여도 보이는 것은 거친 모래뿐일 것이다 이상의 꽃이 없으면 쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는

쓸쓸한 인간에 남는 것은 영락과 부패 뿐이다 낙원을 장식하는 천자만홍이 어디 있으며 인생을 풍부하게 하는 온갖 과실이 어디 있으랴? 이상! 우리의 청춘이 가장 많이 품고 있는 이상! 이것이야말로 무한한 가치를 가진 것이다 사람은 크고 작고 간에 이상이 있음으로써 용감하고 굳세게 살 수 있는 것이다 석가는 무엇을 위하여 설산에서 고행을 하였으며 예수는 무엇을 위하여 광야에서 방황하였으며 공자는 무엇을 위하여 천하를 철환하였는가? 밥을 위하여서 옷을 위하여서 미인을 구하기 위하여서 그리하였는가? 아니다 그들은 커다란 이상 곧 만천하의 대중을 품에 안고 그들에게 밝은 길을 찾아 주며 그들을 행복스럽고 평화스러운 곳으로 인도하겠다는 커다란 이상을 품었기 때문이다 그러므로 그들은 길지 아니한 목숨을 사는가 싶이 살았으며 그들의 그림자는 천고에 사라지지 않는 것이다 이것은 현저하게 일월과 같은 예가 되려니와 그와 같지 못하다 할지라도 창공에 반짝이는 뭇 별과 같이 산야에 피어나는 군영과 같이 이상은
                </div>
                <div className={styles.createrinfo}>
                    <div className={styles.infoprop}><img src="./detail_logo_svg/creater.svg" alt="" /> Creater</div>
                    <div className={styles.infodata}>김갑수</div>
                    <div className={styles.infoprop}><img src="./detail_logo_svg/type.svg" alt="" />Type</div>
                    <div className={styles.infodata}>스터디</div>
                    <div className={styles.infoprop}><img src="./detail_logo_svg/tags.svg" alt="" />Tags</div>
                    <div className={styles.infodata}>#React #GraphQL #Javascript</div>
                    <div className={styles.infoprop}><img src="./detail_logo_svg/contact.svg" alt="" />Contact</div>
                    <div className={styles.infodata}><a href="#">KaKaoLink</a></div>
                </div>


           </div>
        {/* 하단 댓글 */}
           <div className={styles.bottomcomment}>

           </div>
        </>
    )
}

export default ItemDetail