import React from "react";
import "./styles.css";
// import "./Pickup.css";

const timeDataOld = [
    {
        "id":   "0",
        "num":  "6",
    },
    {
        "id":   "1",
        "num":  "2",
    },
    
    {
        "id":   "3",
        "num":  "0",
    },

]

const timeData = [
    [
        "Sat, Jan 30",
        1,
        2,
        6,
        4,
        1,
        10,
        3,
        9
    ],
    [
        "Sun, Jan 31",
        6,
        10,
        10,
        1,
        4,
        2,
        7,
        8
    ],
    [
        "Mon, Feb 1",
        0,
        4,
        6,
        0,
        0,
        4,
        10,
        5
    ]
]

const listOfTimes = [
    "11:00 – 12:00",
    "12:00 – 1:00 PM",
    "1:00 – 2:00 PM",
    "2:00 – 3:00 PM",
    "3:00 – 4:00 PM",
    "4:00 – 5:00 PM",
    "5:00 – 6:00 PM",
    "6:00 – 7:00 PM"
]

const jan30 = [3,2,0,4,9,6,0,0]
const jan31 = [5,3,2,7,9,4,2,1]
const feb01 = [9,10,0,5,4,0,1,3]

function clicked() {
    console.log("test9");
}

var render1 = jan30.map(function(d){
    let string = "";
    let addClass = "time-slot";

    switch(d) {
        case 0:
            string = "Free"
            break;
        case 10:
            string = "Slot Full " + d + "/10";
            addClass += " time-slot-full"
            break;
        case 3:
            string = "Free " + d + "/10";
            addClass += " booked"
            break;
        default:
            string = "Free " + d + "/10";
            break;
    }

    return <div className={addClass} onClick={clicked}>{string}</div>
})

const render2 = jan31.map(function(d){
    let string = "";
    let addClass = "time-slot";

    switch(d) {
        case 0:
            string = "Free"
            break;
        case 10:
            string = "Slot Full " + d + "/10";
            addClass += " time-slot-full"
            break;
        default:
            string = "Free " + d + "/10";
            break;
    }

    return <div className={addClass}>{string}</div>
})

const render3 = feb01.map(function(d){
    let string = "";
    let addClass = "time-slot";

    switch(d) {
        case 0:
            string = "Free"
            break;
        case 10:
            string = "Slot Full " + d + "/10";
            addClass += " time-slot-full"
            break;
        default:
            string = "Free " + d + "/10";
            break;
    }

    return <div className={addClass}>{string}</div>
})

// function renderTimeData {
// const renderTimeData = timeData.map(function(day){

//     if (day.length !== listOfTimes.length+1) return; 
//     let date = listOfTimes[0];
//     for (let i = 1; i <= listOfTimes.length; i++) {
        
//     }

//     console.log("begin test2")

//     return  <div className="time-selection-column">
//                 {timeSlots(day,listOfTimes.length)}
//             </div>
// });
// }


const renderTimeData = listOfTimes.map(function(){
    // let rand = Math.floor(Math.random() * 11);
    // let rand = s=>()=>(s=Math.imul(741103597,s)>>>0)/2**32;
    let rand = Math.floor(Math.random()*11);
    let string = "";
    let addClass = "time-slot";

    switch(rand) {
        case 0:
            string = "Free"
            break;
        case 10:
            string = "Slot Full " + rand + "/10";
            addClass += " time-slot-full"
            break;
        default:
            string = "Free " + rand + "/10";
            break;
    }

    return <div className={addClass}>{string}</div>
});

function timeSlots(day,numOfSlots) {
    console.log("begin test3")
    for (let i = 0; i < numOfSlots; i++) {
        timeSlot(day,i);
    }
}

function timeSlot(day,i) {
    console.log("begin test4")
    return <button className="time-slot">Hello, {day[i]}</button>;
}



const renderTimes = listOfTimes.map((listOfTimes) =>
    <div className="time">{listOfTimes}</div>
)

function demoButton() {
    console.log("begin test1")
    const Http = new XMLHttpRequest();
    const url='https://d65a32a748279ab3db732254aaa24a9f.m.pipedream.net';
    Http.open("GET", url);
    Http.send();
    console.log("end test1")
}



function Pickup() {
  return (
    <body id="page-pickup">
        <div className="container" id="main">
            <br/><br/>
            <img src="Best_buy_logo_2018.svg" alt="Best Buy" width="230"/>
            <br/><br/><br/>
            <p>Hi John Smith,</p>
            <h1>Your order is ready for pickup #12345678</h1>
            <br/><br/>
            <p><b>Great news! Your order is ready for anytime pickup or scheduled pickup at our <span id="store-name">Richmond store</span>.</b></p>
            <p>Schedule a pickup to speedup the process by letting us know ahead of time when you will be arriving. Our Blue Shirts will prepare for your arrival and be ready to drop off your order faster than ever. 3 hours before your schedule pickup, an email with more instructions will be sent.</p>
            <p>Alternatively you can still follow anytime pickup steps and text us when you arrive in the designated pickup area.</p>

            <div className="menu">
                <div className="time-and-date">
                    <h2>Select a time slot</h2>
                    <div className="time-selection">
                        <div className="time-selection-column">
                            <div className="time-selection-heading">Time/Date</div>
                            {renderTimes}
                        </div>
                        <div className="time-selection-column">
                            <div className="time-selection-heading">Sat, Jan 30</div>
                            {render1}
                        </div>
                        <div className="time-selection-column">
                            <div className="time-selection-heading">Sun, Jan 31</div>
                            {render2}
                        </div>
                        <div className="time-selection-column">
                            <div className="time-selection-heading">Mon, Feb 1</div>
                            {render3}
                        </div>
                    </div>
                </div>
            
                <button id="demo" onClick={demoButton} className = "submit">SUBMIT</button>
            </div>

            <h2>Ready to check in?</h2>
            <p>If you're at the store, let us know you're here and we'll bring your order out to you. You'll need your order number to check-in.</p>
            <br/>
            <b>Order Number</b>
            <p>877475383</p>
        </div>
        <div className="container" id="footer">
            <h2>Thank you for shopping at BestBuy.ca</h2>
            <p>This email was sent from an outgoing-only address that cannot accept incoming emails. If you still have questions, please visit our help centre for more information</p>
            <p><b>Promotional Emails: </b>As a customer of Best Buy Canada, we may send you promotional emails. If you do not wish to receive promotional emails from Best Buy Canada, please feel free to unsubscribe.</p>
        </div>
   </body>
  );
};

export default Pickup;
