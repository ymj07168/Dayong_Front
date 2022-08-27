import "../css/DetailSection.css";

export default function DetailSection() {
    return (
        <div className='detail-info'>
            <p>
                <span style={{ fontWeight: "bold" }}>최소주문금액</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;5,000원<br />
                <span style={{ fontWeight: "bold" }}>이용방법</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 포장, 배달<br />
                <span style={{ fontWeight: "bold" }}>픽업시간</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 18~28분 소요 예상<br />
                <span style={{ fontWeight: "bold" }}>위치 안내</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;서울특별시 용산구 청파동<br />
                <span style={{ fontWeight: "bold" }}>배달팁</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0원~3,000원<br />
            </p>
        </div>
    )
}