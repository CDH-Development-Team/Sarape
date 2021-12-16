import React from 'react';
import img from '../../images/credits.png'
import swlogo from '../../images/SW logo.jpg'
import thrums from '../../images/thrumslogo.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Credits = () =>{
    return(
        <div style={{backgroundColor:'#4a0033', color:'white'}}>
    <div style={{position: 'relative', width: '100%', fontSize: "1.5rem"}}>
    <img src={img} style={{width:"100%"}}>
    </img>
    <div style={{position:'absolute', top:'5%', left:'15%', width:'70%', margin: '0 auto', color:'white'}}>
        <p>“A family of reds, from purples and violets to deep reds, pinks, corals, and oranges, is created with different amounts of cochineal, different mordants and modifiers, and various overdyes of cochineal and other natural dyestuffs.”</p>
        <br />
        <p style={{fontSize:'1.2rem', float:'right'}}> Keith Recker, True Colors: World Masters of Natural Dyes and Pigments, Thrums Books, 2019 <br/>Joe Coca, photographer, 2019</p>
    </div>
    </div>

    <div className="row" >
        <div className="col-md-6 p-5" style={{textAlign:'right'}}>
        <h4>THIS EXHIBIT CAME TOGETHER THROUGH THE WORK OF</h4>
        <div >Porfirio Gutiérrez, guest curator<br/>Andrew Higgins, co-curator/registrar<br/>Lisa Falk, co-curator/project manager<br/>Jannelle Weakly, manager, photographic collections<br/>Diane Dittemore, contributing curator<br/>Andie Zelnio, exhibit designer<br/>Ruben Moreno, preparator<br/>Gina Watkinson, conservation lab manger<br/>Tobi Lopez Taylor, editor<br/>Michelle Dillon, photographer</div>
        </div>
        <div className="col-md-6 p-5">
        <h4>THANK YOU TO</h4>
        <div>
        Amon Carter Museum <br/>Arizona History Museum <br/>Bonnie Barcus, Spin Dance Acres <br/>Joe Coca <br/>Alana Coghlan<br/>Michael D. Higgins, Antique Indian Art<br/>Craig Holmes<br/>Steve Getzwiller, Nizhoni Ranch Gallery<br/>James Jeter<br/>Tom Kieft<br/>Tom McCormick<br/>Menaul Historical Society <br/>Robert Ortega, Ortega’s Weaving Shop<br/>Harry Ransom Center <br/>Keith Recker<br/>Shaw Contract<br/>Lisa and Irvin Trujillo, Centinela Traditional Arts
        </div>
        </div>
    </div>
    <div>
        <div className='row'>
            <div className='col-md-6 p-4'>
                <img src={swlogo} width={"100%"}/>
            </div>
            <div className='col-md-3 p-4'>
                <img src={thrums} width={"100%"}/>
            </div>
        </div>
    </div>
    </div>
    )
};

export default Credits;