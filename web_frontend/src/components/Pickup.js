import React from "react";
import "./styles.css";
// import "./Pickup.css";

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

            <div class="menu">
                <div class="time-selection">
                    <h2>Select a time slot</h2>
                    <table className = "table2">
                        <tr>
                            <th>Time/Date</th>
                            <th>Sat, Jan 30</th>
                            <th>Sun, Jan 31</th>
                            <th>Mon, Feb 1</th>
                        </tr>
                        <tr>
                            <td>11:00 - 12:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>12:00 - 1:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>1:00 - 2:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>2:00 - 3:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>3:00 - 4:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>4:00 - 5:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>5:00 - 6:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                        <tr>
                            <td>6:00 - 7:00</td>
                            <td>asdffdas</td>
                            <td>asdfdfas</td>
                            <td>asedffda</td>
                        </tr>
                    </table>
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
