import React from 'react';
import "./App.css";
import ConnectedSidebar from "./ConnectedSidebar/ConnectedSidebar"

function App() {
    const sideBarLinks = [
        {title: "Link 1", link: "#link1", children: []},
        {title: "Link 2", link: "#link2", children: [  {title: "Child Link to Link 2", link: "#child1"},
                                                            {title: "Child Link to Link 2", link: "#child2"},
                                                            {title: "Child Link to Link 2", link: "#child3"},
                                                            {title: "Child Link to Link 2", link: "#child4"},
                                                            {title: "Child Link to Link 2", link: "#child5"},]},
        {title: "Link 3", link: "#link3", children: []},
        {title: "Link 4", link: "#link4", children: [  {title: "Child Link to Link 4", link: "#child11"},
                                                            {title: "Child Link to Link 4", link: "#child12"},
                                                            {title: "Child Link to Link 4", link: "#child13"},
                                                            {title: "Child Link to Link 4", link: "#child14"},
                                                            {title: "Child Link to Link 4", link: "#child15"},
                                                            {title: "Child Link to Link 4", link: "#child16"},
                                                            {title: "Child Link to Link 4", link: "#child17"}]},
    ]
    return (
        <div className="App">
            <header className="Test Header">
            </header>
            <section>
                <div className="sideBarSideLeft">
                    <ConnectedSidebar sideBarLinks={sideBarLinks}/>
                </div>
                <div className="contentWrap">
                    <h1 id="link1">Link 1</h1>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>
                    <div>Fugiat mollit esse sit Lorem tempor id culpa sunt ut laborum Lorem nostrud dolor.</div>

                    <h1 id="link2">Link 2</h1>
                    <div id="child1">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child2">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child3">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child4">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child5">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>

                    <h1 id="link3">Link 3</h1>
                    <div>Irure elit sunt labore consequat ut amet pariatur laboris laboris ullamco tempor.</div>
                    <div>Irure elit sunt labore consequat ut amet pariatur laboris laboris ullamco tempor.</div>
                    <div>Irure elit sunt labore consequat ut amet pariatur laboris laboris ullamco tempor.</div>
                    <div>Irure elit sunt labore consequat ut amet pariatur laboris laboris ullamco tempor.</div>
                    <div>Irure elit sunt labore consequat ut amet pariatur laboris laboris ullamco tempor.</div>

                    <h1 id="link4">Link 4</h1>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child11">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child12">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child13">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child14">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div id="child15">Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                    <div>Ex ut nulla sunt deserunt fugiat aute.</div>
                </div>
            </section>
        </div>
    );
}

export default App;
