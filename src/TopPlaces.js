//Child of Travel
import React, {Component} from 'react'
import Reviews from './Reviews'

export default class TopPlaces extends Component {
    constructor(props){
        super(props)
    }
//     topSeed = () => { 
//         fetch(baseUrl + "/topplaces") 
//         .then(res => {
//             if(res.status == 200) {
//                 return res.json()
//             } else {
//                 return[]
//             }
//         }).then(data => {
//             console.log(data)
//             this.setState({travels:data})
//         })
//    }
    render(){
        return(
           <div>
           </div> 
        )
    }
}