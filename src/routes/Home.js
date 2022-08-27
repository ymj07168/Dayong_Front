import "../css/Home.css"
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import heart from '../image/emptyheart.png'
import { Link } from "react-router-dom";

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <p className="title">오늘도<br />#다용</p>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <div className="contentgroup">
                    <span >
                        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
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