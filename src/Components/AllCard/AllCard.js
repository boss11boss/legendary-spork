import React from 'react'
import OneCard from "./OneCard/OneCard";
import { connect } from 'react-redux';


function AllCard(props) {
    let allList = ''
    if(props.directories){
        allList = props.directories.map((d,i)=>
        <OneCard key={i} dir={d} />
    )
  }
        const boxx={
            padding:40,
            marginTop:90,
            display:'flex',
            backgroundColor:'#eee',
            width:'100%',
            height: 800,
            flexWrap: 'wrap'

        }
        return(
            <div style={boxx}>
                {allList}
            </div>
        )
}

const mapStateToProps = state=>{
    return{
        directories: state.directory
    }
  }

 
  
export default connect(mapStateToProps)(AllCard);