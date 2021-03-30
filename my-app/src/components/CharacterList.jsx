import React from 'react'
import { Card } from 'react-bootstrap'

export default function CharacterList (props) {
  return (
    <div className="col-md-3 mb-4 ">
      <div className="card shadow">
        <img src={props.character.img} className="card-img-top" style={{height: "300px"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.character.char_id}. {props.character.nickname}</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button type="button" className="btn" id="btn-detail">See Detail</button>
        </div>
      </div>
    </div>
  )
}

// class CharacterList extends React.Component {

//   render() {
//     const { character } = this.props
//     return (
//       <div className="col-md-3 mb-4 ">
//         <div className="card shadow">
//           <img src={character.img} className="card-img-top" style={{height: "300px"}}/>
//           <div className="card-body">
//             <h5 className="card-title">{character.char_id}. {character.nickname}</h5>
//             <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//             <button type="button" className="btn" id="btn-detail">See Detail</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
