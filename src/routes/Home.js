import "../css/Home.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import heart from '../image/emptyheart.png'
import { Link } from "react-router-dom";
import dayongbeside from "../image/dayongbeside.png"

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <p className="title">오늘도<br />#다용</p></Animator>

                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
                    <img className="dayongbeside" src={dayongbeside} />
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div className="contentgroup">
                    <span>
                        <Animator animation={MoveIn(-1000, 0)}><p className="contentfont">환경을 위한🌎,<br/>
그리고 나를 위한 다회용기<br/><br/><br/><br/></p></Animator>
                        <Animator animation={MoveIn(1000, 0)}>

                        <p className="contentfont">다회용기를 사용해<br/>
포인트를 적립해봐요!🤜</p>
                        </Animator>
                    </span>
                </div>


                <div >

                    <Animator animation={FadeUp}>
                        <div className="buttongroup">
                            <ul className="buttoncontent">
                                <Link to='/login'><li>
                                    <button type="button" className="login">로그인하기</button>

                                </li></Link>
                                <Link to='/join'><li>
                                    <button type="button" className="join">회원가입하기</button>


                                </li></Link>
                            </ul>

                        </div>

                    </Animator>
                </div>
            </ScrollPage>
        </ScrollContainer>
    )
}

export default Home;