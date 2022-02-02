import React from 'react';
import img from '../../images/credits.png'
import swlogo from '../../images/SW logo.jpg'
import thrums from '../../images/thrumslogo.png'
import cdhlogo from '../../images/CDH_logo_Primary.png'
import higgins from '../../images/higgins.png'
import med from '../../images/med.png'
import asmlogo from '../../images/asmlogo.png'
const Credits = () =>{
    return(
        <div style={{backgroundColor:'#4a0033', color:'white'}}>
    <div style={{position: 'relative', width: '100%', fontSize: "1.5rem"}}>
    <img alt="" src={img} style={{width:"100%"}}>
    </img>
    <div style={{position:'absolute', top:'5%', left:'15%', width:'70%', margin: '0 auto', color:'black'}}>
        <p style={{fontFamily:'Lucida'}}>“A family of reds, from purples and violets to deep reds, pinks, corals, and oranges, is created with different amounts of cochineal, different mordants and modifiers, and various overdyes of cochineal and other natural dyestuffs.”</p>
        <br />
        <p style={{fontSize:'1.2rem', float:'right'}}> Keith Recker, <i>True Colors: World Masters of Natural Dyes and Pigments,</i> Thrums Books, 2019 <br/>Joe Coca, photographer, 2019</p>
    </div>
    </div>

    <div width="100%" style={{padding:'2vw'}}>
        <div className="left-col" style={{textAlign:'right'}}>
        <h4>THIS EXHIBIT CAME TOGETHER THROUGH THE WORK OF</h4><br/>
        <div >Porfirio Gutiérrez, guest curator<br/>Andrew Higgins, co-curator/registrar<br/>Lisa Falk, co-curator/project manager<br/>Jannelle Weakly, manager, photographic collections<br/>Diane Dittemore, contributing curator<br/>Andie Zelnio, exhibit designer<br/>Ruben Moreno, preparator<br/>Gina Watkinson, conservation lab manger<br/>Tobi Lopez Taylor, editor<br/>Michelle Dillon, photographer</div>
        </div>
        <div className="right-col">
        <h4>THANK YOU TO</h4><br/>
        <div>
        Amon Carter Museum <br/>Arizona History Museum <br/>Bonnie Barcus, Spin Dance Acres <br/>Joe Coca <br/>Alana Coghlan<br/>Michael D. Higgins, Antique Indian Art<br/>Craig Holmes<br/>Steve Getzwiller, Nizhoni Ranch Gallery<br/>James Jeter<br/>Tom Kieft<br/>Tom McCormick<br/>Menaul Historical Society <br/>Robert Ortega, Ortega’s Weaving Shop<br/>Harry Ransom Center <br/>Keith Recker<br/>Shaw Contract<br/>Lisa and Irvin Trujillo, Centinela Traditional Arts
        </div>
        </div>

        <div style={{width: '100%'}} className='credsCDH'>
        <h4>ONLINE EXHIBIT CAME TOGETHER THROUGH THE WORK OF</h4><br/>
        <div>
        Lisa Falk, project manager<br/>Andie Zelnio, project designer<br/>Bryan Carter, CDH director <br/> Tehan Ketema, photographer <br />Samantha Mathis, developer<br/>Elijah Acuna, developer<br/>Ali Hamza Noor, developer<br/>Davlat Uralov, developer
        </div>
        </div>

        <h2 style={{textAlign: 'center'}}>The exhibit originally opened at Arizona State Museum in 2021.</h2>
    </div>
    <div style={{backgroundColor: '#b93069'}}>
        <br /><br /><br /><br /><br />
    <div width="100%">
            <img className='logo' alt="" src={swlogo} width="40%"/>   
            <img className='logo' alt="" src={asmlogo} width="40%"/>
            
    </div>
        <br/><br/><br/>
    <div width="100%">
            <img className='logo' alt="" src={thrums} width="20%"/>
            <img className='logo' alt="" src={higgins} width="12%" style={{}}/>
            <img className='logo' alt="" src={med} width="38%" style={{}}/>
    </div>
    <br/><br/><br/>
    <div style={{width:'50%', margin: '0 auto'}}>
    <img className='logo' alt="" src={cdhlogo} style={{width:'90%'}} />
    </div>
    </div>
    </div>
    )
};

export default Credits;