

const LayoutCon: React.FC = (props) => {

    return(
        <>
            <div>이것은 레이아웃</div>
            <div>{props.children}</div>
        </>
    )
}

export default LayoutCon