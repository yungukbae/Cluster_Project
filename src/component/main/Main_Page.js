import './Main_Page.css'

const Main_Page = () => {

    return(
        <div>

                <div id="main_top">

                    <p>Find your team, achieve your goal.</p>
                    <div id="search_input_container">
                        <div id="search_input_div"><input type="text" id="input_search"/></div>
                        <button id="btn_search"><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div id="main_bottom">
                    <p>newly created groups</p>
                    <div id="group_list">

                    </div>
                </div>

        </div>
    );
}
export default Main_Page;